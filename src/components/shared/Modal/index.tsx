import '../../../styles/components/modal.css';

import useClickOutside from '@components/shared/hooks/useClickOutside';
import type { ReactNode } from 'react';
import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';

interface props {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const portalDiv = document.getElementById('modal');

const Modal: React.FC<props> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    /* eslint-disable react-hooks/rules-of-hooks */
    const handleClickOutside = useCallback(onClose, [onClose]);

    const container = useRef<HTMLDivElement>(null);

    useClickOutside(container, handleClickOutside);
    /* eslint-enable react-hooks/rules-of-hooks */

    if (portalDiv) {
        return ReactDOM.createPortal(
            <div className="modal">
                <div ref={container} className="modalContainer pt-20">
                    <button
                        type="button"
                        onClick={onClose}
                        className="modalCloseButton"
                    >
                        X
                    </button>
                    {children}
                </div>
            </div>,
            portalDiv
        );
    }
    return null;
};

export default Modal;
