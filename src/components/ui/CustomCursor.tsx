'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    useEffect(() => {
        // Only show on desktop
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (isMobile) return;

        window.addEventListener('mousemove', handleMouseMove);

        // Add hover detection for interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        // Observe DOM changes to apply hover listeners to new elements
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });
        addHoverListeners();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
            observer.disconnect();
        };
    }, [isMobile, handleMouseMove]);

    if (isMobile || !isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
                style={{
                    width: 8,
                    height: 8,
                    background: '#3B82F6',
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                }}
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
                style={{
                    width: 36,
                    height: 36,
                    borderColor: 'rgba(59, 130, 246, 0.4)',
                }}
                animate={{
                    x: position.x - 18,
                    y: position.y - 18,
                    scale: isHovering ? 2 : 1,
                    borderColor: isHovering ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8,
                }}
            />
        </>
    );
}
