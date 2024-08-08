
export class ModalListen<T> {
  constructor(private readonly doc: Document) {}

  onOpen(opened: (component: T) => void): void {
    this.doc.addEventListener('modal.open', event => {
      const custom = event as CustomEvent<T>;
      opened(custom.detail);
    });
  }

  onClose(closed: () => void) {
    this.doc.addEventListener('modal.close', () => closed());
  }
}
