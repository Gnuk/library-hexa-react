import {useTranslation} from "react-i18next";

export const MoreInfo = () => {
    const {t} = useTranslation();
    return <h2 data-selector="modal.title">{t('about.more-info.title')}</h2>;
}