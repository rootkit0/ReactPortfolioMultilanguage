import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import esFlag from "../assets/flags/es.svg";
import caFlag from "../assets/flags/cat.svg";
import enFlag from "../assets/flags/en.svg";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("lang") || "es";
  });

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const changeLanguage = (lng) => {
    setCurrentLang(lng);
    localStorage.setItem("lang", lng);
    i18n.changeLanguage(lng);
  };

  const Flag = ({ lng, src, alt }) => (
    <img
      src={src}
      alt={alt}
      onClick={() => changeLanguage(lng)}
      className={`lang-flag ${currentLang === lng ? "active" : ""}`}
    />
  );

  return (
    <div className="lang-selector" aria-label="Language selector">
      <Flag lng="es" src={esFlag} alt="Español" />
      <Flag lng="ca" src={caFlag} alt="Català" />
      <Flag lng="en" src={enFlag} alt="English" />
    </div>
  );
}

export default LanguageSelector;
