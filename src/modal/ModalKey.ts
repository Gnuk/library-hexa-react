import { key } from 'piqure';
import { ModalAction } from '@/modal/ModalAction.ts';
import { ModalListen } from '@/modal/ModalListen.ts';

export const MODAL_ACTION = key<ModalAction>('Modal action');
export const MODAL_LISTEN = key<ModalListen>('Modal listen');
