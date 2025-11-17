export const locales = ["en", "zh"];
export const defaultLocale = "en";
export const homePage = "introduction";


export const getSlug = (path: string, homePage: string) => {
  const [locale, ...rest] = path.split("/");

  if (locale === defaultLocale) {
    if (rest[0] === homePage) {
      return "";
    } else {
      return rest.join("/");
    }
  } else if (rest[0] === homePage) {
    return locale;
  }

  return path;
}
