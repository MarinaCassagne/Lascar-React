import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  // persist permet de sauvegarder une partie du store dans le localStorage
  // pour que les données survivent à un rafraîchissement de page
  persist(
    (set) => ({
      // Token JWT court (15min) - gardé uniquement en mémoire
      accessToken: null,
      // Refresh token long (7j) - sera persisté dans le localStorage
      refreshToken: null,
      // Infos de l'utilisateur connecté - sera persisté dans le localStorage
      user: null,

      // Met à jour les deux tokens (appelé après login et après refresh)
      setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),

      // Met à jour les infos utilisateur
      setUser: (user) => set({ user }),

      // Déconnecte l'utilisateur en vidant tout le store
      logout: () => localStorage.removeItem("auth-storage"),
    }),
    {
      // Nom de la clé dans le localStorage
      name: 'auth-storage',

      // partialize contrôle CE QUI est sauvegardé dans le localStorage
      // Tout ce qui n'est pas listé ici reste uniquement en mémoire
      partialize: (state) => ({
        accessToken: state.accessToken,
        // On persiste le refresh token car il doit survivre à la fermeture de l'onglet
        refreshToken: state.refreshToken,
        // On persiste le user pour afficher ses infos sans refaire une requête API
        user: state.user,
        // On ne persiste PAS l'accessToken, trop risqué (reste en mémoire uniquement)
      }),
    }
  )
);

export default useAuthStore;