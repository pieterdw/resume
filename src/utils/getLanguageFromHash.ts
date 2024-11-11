import { TranslatableKey } from "../resumeData";

export const getLanguageFromHash = (): TranslatableKey => {
  let hashLang = window.location.hash.substring(1);
  if (hashLang === "nl" || hashLang === "en") {
    return hashLang;
  }
  return "en";
};
