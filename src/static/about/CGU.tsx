import { useTranslation } from 'react-i18next';
export const CGU = () => {
  const { t } = useTranslation();
  return <h2 data-selector="modal.title">{t('about.cgu.title')}</h2>;
};
