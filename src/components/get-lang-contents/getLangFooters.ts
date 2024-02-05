import { useTranslations } from 'next-intl';

const GetLangFooters = () => {
  const t = useTranslations('Footer');

  return { copyright: t('copyright'), contactTitle: t('contactTitle') };
};

export default GetLangFooters;
