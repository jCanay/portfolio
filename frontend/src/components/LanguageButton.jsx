import { useEffect, useState } from "react";
import { $language, setCountryCode } from "../context/languageStore";
import JButton from "./JButton";
import { useStore } from "@nanostores/react";
import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const { countryCode } = useStore($language);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const checkCC = () => {
      handleLanguageChange(countryCode === "es");
    };

    checkCC();
  }, [countryCode]);

  const handleLanguageChange = (e) => {
    let cc = e ? "es" : "us";
    i18n.changeLanguage(cc);
    setCountryCode({ countryCode: cc });
  };

  return (
    <JButton
      onClick={handleLanguageChange}
      className="absolute right-6 px-3 py-1 flex gap-2 items-center content-center"
      initialState={countryCode === "us"}
    >
      {t("header.language_switch")}
      <span
        className={`fi fi-${i18n.language} language-change aspect-8/7 h-4`}
      ></span>
    </JButton>
  );
}
