import { ReactNode } from 'react';

export class ModalAction {
  constructor(private readonly doc: Document) {}

  open(component: ReactNode) {
    const modalOpen = new CustomEvent('modal.open', { detail: component });
    this.doc.dispatchEvent(modalOpen);
  }

  close() {
    const modalClose = new Event('modal.close');
    this.doc.dispatchEvent(modalClose);
  }
}
