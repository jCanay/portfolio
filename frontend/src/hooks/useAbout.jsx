import { useEffect, useState } from "react";
import { aboutServices } from "../services/aboutServices";
import { useStore } from "@nanostores/react";
import { $aboutStore, aboutMethods } from "../context/aboutStore";

export const useAbout = () => {
  const { about, loading, error } = useStore($aboutStore);

  useEffect(() => {
    const loadData = async () => {
      if ($aboutStore.get().about) return;

      try {
        aboutMethods.setError(false);
        aboutMethods.setLoading(true);
        const data = await aboutServices.get();
        aboutMethods.setAbout(data);
      } catch (e) {
        aboutMethods.setError(true);
      } finally {
        aboutMethods.setLoading(false);
      }
    };

    loadData();
  }, []);

  return { about, loading, error };
};
