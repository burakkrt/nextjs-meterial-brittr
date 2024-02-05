export const langMetaConvert = (locales: Array<string>, currentLang: string) => {
  const alternateLocale: Array<string> = [];

  locales.map((langCode) => {
    if (langCode !== currentLang) {
      switch (langCode) {
        case 'en':
          alternateLocale.push('en_US');
          alternateLocale.push('en_GB');
          break;
        case 'ar':
          alternateLocale.push('ar_SA');
          break;
        case 'da':
          alternateLocale.push('da_DK');
          break;
        default:
          alternateLocale.push(`${langCode}_${langCode.toLocaleUpperCase('en-US')}`);
      }
    }
  });

  return alternateLocale;
};

export const langCanonicalUrls = (locales: Array<string>, currentLang: string) => {
  const canonicals: any = {};

  langMetaConvert(locales, currentLang).map((lang) => {
    const key = lang.replace('_', '-');

    if (!canonicals.key) {
      canonicals[key] = lang.slice(0, 2);
    }
  });

  return canonicals;
};
