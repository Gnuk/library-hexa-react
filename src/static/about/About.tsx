import { useTranslation } from 'react-i18next';
import {inject} from "@/injections.ts";
import {MODAL_ACTION} from "@/modal";
import {MoreInfo} from "@/static/about/MoreInfo.tsx";
import {CGU} from "@/static/about/CGU.tsx";

export const About = () => {
  const {t} = useTranslation();

  const modal = inject(MODAL_ACTION);

  const moreInfo = ()=> {modal.open(<MoreInfo/>)};
  const cgu = ()=> {modal.open(<CGU/>)};

  return(<>
    <h2 data-selector="about.title">{t('about.title')}</h2>
    <p data-selector="about.description">{t('about.description')}</p>
    <button data-selector="about.more-info.button" onClick={moreInfo}>{t('about.more-info.button')}</button>
    <button data-selector="about.cgu.button" onClick={cgu}>{t('about.cgu.button')}</button>
  </>);
}
