import { useTranslation } from 'react-i18next';

export const About = () => {
  const {t} = useTranslation();

  return(<>
    <h2 data-selector="about.title">{t('about.title')}</h2>
    <p data-selector="about.description">{t('about.description')}</p>
  </>);
}
