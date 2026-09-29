import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslation from "./locales/es/translation.json";
import usTranslation from "./locales/us/translation.json";
import { useStore } from "@nanostores/react";
import { $language } from "../context/languageStore";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esTranslation },
    us: { translation: usTranslation },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
