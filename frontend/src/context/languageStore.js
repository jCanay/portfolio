import { persistentAtom } from "@nanostores/persistent";

const DEFAULT_DATA = { countryCode: "es" };

export const $language = persistentAtom("language", DEFAULT_DATA, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

/**
 *
 * @param {object} [language]
 * @param {"es" | "us"} [language.countryCode]
 */
export const setCountryCode = ({ countryCode = "es" }) => {
  const current = $language.get();
  $language.set({ ...current, countryCode });
};
