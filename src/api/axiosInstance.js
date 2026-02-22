import axios from "axios";
import useAuthStore from "../store/authStore";

// Constante contenant l'url de base de l'API
// Axios crée une instance de l'url de base
const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Variable booléennes pour savoir s'il y a un refresh de token en cours.
let isRefreshing = false;

// Tableau pour stocker les requêtes en attentes
let failedQueue = [];

// processQueue permet de résoudre la file d'attente en exécutant chaque requête dans le tableau
// failedQueue avec le nouveau token.
// Soit on rejoue les requête avec le nouveau token
// Soit on rejette toutes les requêtes en renvoyant une erreur
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) =>
    error ? prom.reject(error) : prom.resolve(token),
  );
  // On vide la file d'attente
  failedQueue = [];
};

// Interceptions de la requêtes vers l'api
api.interceptors.request.use((config) => {
  //   Je stock le token dans une variable
  const token = useAuthStore.getState().accessToken;

  //   Si il ya un token, j'intègre le token dans chaque requête pour automatisé
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Interceptions des reponses de l'api
api.interceptors.response.use(
  // Si la réponse est correcte rien n'est à faire
  (response) => response,

  //   Si c'est une erreur
  async (error) => {
    // On stock la requête entière dans une constante
    const originalRequest = error.config;

    // Si le status de la réponse est 401 (unAuthorized) ET que la requête n'a pas été retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      //   permet d'éviter les boucles infini:
      // Sans retry:
      // Requête → 401 → refresh → nouvelle requête → 401 → refresh → ... (boucle infinie)
      // Avec retry:
      // Requête → 401 → on pose _retry = true → refresh → nouvelle requête → 401 → _retry est déjà true → on arrête → Promise.reject
      originalRequest._retry = true;

      // Si un refresh du token est déjà en cours
      if (isRefreshing) {
        // On crée un nouvel objet Promise permettant de traiter les opérations asynchrone
        return (
          new Promise((resolve, reject) => {
            // On stocke les fonctions resolve et reject
            // dans une file d'attente (failedQueue)
            // Cela permettra de débloquer cette requête plus tard
            failedQueue.push({ resolve, reject });
          })

            // Une fois le token reçu cette partie s'exécute
            .then((token) => {
              // On met à jour le header Authorization
              // avec le nouveau token reçu après le refresh
              originalRequest.headers.Authorization = `Bearer ${token}`;

              // On relance la requête initiale avec le nouveau token
              return api(originalRequest);
            })
        );
      }

      // On indique qu'un refresh est en cours
      isRefreshing = true;
      //   on récupère la valeur actuelle du refresh token
      const refreshToken = useAuthStore.getState().refreshToken;

      try {
        // On appelle direct axios pour éviter de passer dans les intercepteurs
        const { data } = await axios.post(
          // Appelle de la route pour refresh les token
          "http://localhost:8000/api/token/refresh",
          //   Request Body renvoyé à l'API
          { refresh_token: refreshToken },
        );

        // On met à jour les tokens dans Zustand
        useAuthStore.getState().setTokens(data.token, data.refresh_token);

        // Ici on a reçu le token donc on exécute le processQueue sans erreur avec le nouveau Token
        processQueue(null, data.token);

        // On rejoue la requête originale avec le nouveau token
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        // On rejoue la requête original
        return api(originalRequest);
      } catch (err) {
        // Ici on est dans le catch donc il y a eu une erreur donc on rejette les requêtes en mettant un token null
        processQueue(err, null);
        // Le refresh token est expiré → on déconnecte l'utilisateur
        useAuthStore.getState().logout();
        // Redirection à la page login
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        // Dans tous les cas on remet isRefreshing à false
        isRefreshing = false;
      }
    }
    // On propage l'erreur au composant qui a fait la requête
    return Promise.reject(error);
  },
);

export default api;
