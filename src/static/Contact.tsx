import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 data-selector="contact.title">{t('contact.title')}</h2>
      <address data-selector="contact.email">{t('contact.email')}</address>
    </>
  );
};
