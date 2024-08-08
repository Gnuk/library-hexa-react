import { key } from 'piqure';
import { ModalAction } from '@/modal/ModalAction.ts';
import { ModalListen } from '@/modal/ModalListen.ts';
import {Component} from "vue";

export const VUE_MODAL_ACTION = key<ModalAction<Component>>('Modal action');
export const VUE_MODAL_LISTEN = key<ModalListen<Component>>('Modal listen');
