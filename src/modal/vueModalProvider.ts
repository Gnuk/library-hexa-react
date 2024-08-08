import { provide } from '@/injections.ts';
import { ModalAction } from '@/modal/ModalAction.ts';
import { ModalListen } from '@/modal/ModalListen.ts';
import {VUE_MODAL_ACTION} from "@/modal/vue.ts";
import {VUE_MODAL_LISTEN} from "@/modal/VueModalKey.ts";

export const vueModalProvider = (): void => {
  provide(VUE_MODAL_ACTION, new ModalAction(document));
  provide(VUE_MODAL_LISTEN, new ModalListen(document));
};
