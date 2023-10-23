import {inject} from "@/injections.ts";
import {MODAL_ACTION, MODAL_LISTEN} from "@/modal/ModalKey.ts";
import { ReactNode, useEffect, useState} from "react";

export const ModalArea = () => {
    const modal = inject(MODAL_LISTEN);
    const modalAction = inject(MODAL_ACTION);
    const [body, setBody] = useState<ReactNode>();
    const [opened, setOpened] = useState<boolean>(false);

    useEffect(() => {
        modal.onOpen((component) => {
            setBody(component);
            setOpened(true);
        });
        modal.onClose(() => setOpened(false));
    }, [modal]);

    const close = () => modalAction.close();

    return <>
        {opened &&
            <>
            <button data-selector="modal.close" onClick={close}>Close</button>
            <div data-selector="modal-area">{body}</div>
            </>
        }
    </>
}