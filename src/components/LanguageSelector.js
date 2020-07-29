import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lng-selector" onClick={handleClick}>
      <i className="fas fa-globe-asia" ></i>
      <div className="lng-selector__options">
        <button className="lng-btn" onClick={() => changeLanguage("en")}>
          EN
        </button>
        <button className="lng-btn" onClick={() => changeLanguage("zh")}>
          中文
        </button>
      </div>
    </div>
  );
}

function handleClick(){
  document.querySelector(".lng-selector__options").classList.toggle("open");
}
