import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./config";

const defaultLng = localStorage.getItem("i18nextLng") ||
  (navigator.language || navigator.userLanguage || "en").split("-")[0] ||
  "en";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: defaultLng,
  interpolation: {
    escapeValue: false, // react already does escaping
  },
});

// persist language selection
i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem("i18nextLng", lng);
  } catch (e) {
    console.error("Could not store language preference", e);
  }
});

export default i18n;
