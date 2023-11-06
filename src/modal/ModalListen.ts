import { ReactNode } from 'react';

export class ModalListen {
  constructor(private readonly doc: Document) {}

  onOpen(opened: (component: ReactNode) => void): void {
    this.doc.addEventListener('modal.open', event => {
      const custom = event as CustomEvent<ReactNode>;
      opened(custom.detail);
    });
  }

  onClose(closed: () => void) {
    this.doc.addEventListener('modal.close', () => closed());
  }
}
