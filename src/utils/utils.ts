
import { TEXTS } from "@/_i18n/languages";

export const TextLanguageSelector = (language: string) => {
switch (language) {
    case "US":
        return TEXTS.en;
    case "PT":
        return TEXTS.pt;
    default:
        return TEXTS.en;
  }
}