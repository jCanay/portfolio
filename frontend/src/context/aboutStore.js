import { atom } from "nanostores";

const DEFAULT_DATA = { about: null, loading: false, error: false };

export const $aboutStore = atom(DEFAULT_DATA);

export const aboutMethods = {
  setAbout: (about) => {
    if (typeof about !== "object") return;

    const current = $aboutStore.get();
    $aboutStore.set({ ...current, about });
  },
  setLoading: (loading) => {
    if (typeof loading !== "boolean") return;

    const current = $aboutStore.get();
    $aboutStore.set({ ...current, loading });
  },
  setError: (error) => {
    if (typeof error !== "boolean") return;

    const current = $aboutStore.get();
    $aboutStore.set({ ...current, error });
  },
};
