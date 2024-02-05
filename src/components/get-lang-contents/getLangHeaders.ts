import { useTranslations } from 'next-intl';

const GetLangHeaders = () => {
  const langPages = useTranslations('Header.pages');
  const pageCount = Number(langPages('pageCount'));

  return Array(pageCount)
    .fill('')
    .map((_, index) => ({
      label: langPages(`page${index + 1}.label`),
      path: langPages(`page${index + 1}.path`),
    }));
};

export default GetLangHeaders;
