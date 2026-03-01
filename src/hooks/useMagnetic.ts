'use client';

import { useState, useRef, MouseEvent } from 'react';

export function useMagnetic(strength: number = 0.5) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return {
        ref,
        position,
        handleMouseMove,
        handleMouseLeave,
    };
}
