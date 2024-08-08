import { key } from 'piqure';
import { ModalAction } from '@/modal/ModalAction.ts';
import { ModalListen } from '@/modal/ModalListen.ts';
import {ReactNode} from "react";

export const REACT_MODAL_ACTION = key<ModalAction<ReactNode>>('Modal action');
export const REACT_MODAL_LISTEN = key<ModalListen<ReactNode>>('Modal listen');
