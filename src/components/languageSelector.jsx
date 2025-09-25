import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import esFlag from "../assets/flags/es.svg";
import caFlag from "../assets/flags/cat.svg";
import enFlag from "../assets/flags/en.svg";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("lang") || "es"
  );

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const changeLanguage = (lng) => {
    setCurrentLang(lng);
    localStorage.setItem("lang", lng);
    i18n.changeLanguage(lng);
  };

  const flagStyle = (lng) => ({
    width: "35px",
    height: "24px",
    objectFit: "cover",
    cursor: "pointer",
    border: currentLang === lng ? "2px solid #0d6efd" : "2px solid transparent",
    borderRadius: "4px",
    transition: "transform 0.2s, border 0.2s",
  });

  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <img
        src={esFlag}
        alt="Español"
        onClick={() => changeLanguage("es")}
        style={flagStyle("es")}
      />
      <img
        src={caFlag}
        alt="Català"
        onClick={() => changeLanguage("ca")}
        style={flagStyle("ca")}
      />
      <img
        src={enFlag}
        alt="English"
        onClick={() => changeLanguage("en")}
        style={flagStyle("en")}
      />
    </div>
  );
}

export default LanguageSelector;
