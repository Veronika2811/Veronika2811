import {REGIONS, TRANSLATION_OBJ} from "./internationalization/locale.js";

const footerYear = document.querySelector(".footer__year");
const currentYear = new Date().getFullYear();

footerYear.textContent = `© ${currentYear}`;

const LANG_LOCAL_STORAGE = "lang";
const lang = document.querySelector(".lang");
const enLang = document.querySelector(".lang-en");
const ruLang = document.querySelector(".lang-ru");
const currentLang = localStorage.getItem(LANG_LOCAL_STORAGE) || REGIONS.EN;

const getTranslate = (language) => {
  localStorage.setItem(LANG_LOCAL_STORAGE, language);

  const words = document.querySelectorAll("[data-i18]");

  words.forEach((item) => {
    item.textContent = TRANSLATION_OBJ[language][item.dataset.i18];
  });
};

lang.addEventListener("click", (event) => {
  const target = event.target;
  const allLang = document.querySelectorAll(".lang__item");

  if (target.classList.contains("lang__item")) {
    allLang.forEach((item) => item.classList.remove("lang_active"));

    target.classList.add("lang_active");

    const selectedLang = target.classList.contains("lang-en")
      ? REGIONS.EN
      : REGIONS.RU;

    getTranslate(selectedLang);
  }
});

window.addEventListener("load", () => {
  getTranslate(currentLang);

  currentLang === REGIONS.RU
    ? ruLang.classList.add("lang_active")
    : enLang.classList.add("lang_active");
});
