import { provide } from '@/injections.ts';
import { REACT_MODAL_ACTION, REACT_MODAL_LISTEN } from '@/modal/ReactModalKey.ts';
import { ModalAction } from '@/modal/ModalAction.ts';
import { ModalListen } from '@/modal/ModalListen.ts';

export const reactModalProvider = (): void => {
  provide(REACT_MODAL_ACTION, new ModalAction(document));
  provide(REACT_MODAL_LISTEN, new ModalListen(document));
};
