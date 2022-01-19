import type React from 'react';
import { useEffect } from 'react';

// Based on: https://stackoverflow.com/a/42234988/8133868
const useClickOutside = (
    refElement: React.RefObject<HTMLDivElement>,
    handler: () => void
): void => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent): void => {
            if (
                refElement.current &&
                !refElement.current.contains(event.target as Node)
            ) {
                handler();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return (): void =>
            document.removeEventListener('click', handleOutsideClick);
    }, [refElement, handler]);
};

export default useClickOutside;
