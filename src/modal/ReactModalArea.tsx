import { inject } from '@/injections.ts';
import { REACT_MODAL_ACTION, REACT_MODAL_LISTEN } from '@/modal/ReactModalKey.ts';
import { ReactNode, useEffect, useState } from 'react';

export const ReactModalArea = () => {
  const modal = inject(REACT_MODAL_LISTEN);
  const modalAction = inject(REACT_MODAL_ACTION);
  const [body, setBody] = useState<ReactNode>();
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    modal.onOpen(component => {
      setBody(component);
      setOpened(true);
    });
    modal.onClose(() => setOpened(false));
  }, [modal]);

  const close = () => modalAction.close();

  return (
    <>
      {opened && (
        <>
          <button data-selector="modal.close" onClick={close}>
            Close
          </button>
          <div data-selector="modal-area">{body}</div>
        </>
      )}
    </>
  );
};
