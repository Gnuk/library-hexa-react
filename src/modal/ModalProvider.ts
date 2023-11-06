import { provide } from '@/injections.ts';
import { MODAL_ACTION, MODAL_LISTEN } from '@/modal/ModalKey.ts';
import { ModalAction } from '@/modal/ModalAction.ts';
import { ModalListen } from '@/modal/ModalListen.ts';

export const modalProvider = (): void => {
  provide(MODAL_ACTION, new ModalAction(document));
  provide(MODAL_LISTEN, new ModalListen(document));
};
