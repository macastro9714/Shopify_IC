import Modal from '@components/shared/Modal';
import React from 'react';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    description: string;
}

const CardModal: React.FC<Props> = ({ open, setOpen, description }) => (
    <Modal isOpen={open} onClose={(): void => setOpen(false)}>
        <div className="flex justify-center p-5 font-mono font-bold">
            <p className="text-6xl">{description}</p>
        </div>
    </Modal>
);

export default CardModal;
