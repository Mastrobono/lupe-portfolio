// components/ScrollUpButton.tsx
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ScrollUp.module.scss';

const ScrollUpButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`${styles.scrollUpButton} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
        >
            <div className={styles.arrow}></div>
        </div>
    );
};

export default ScrollUpButton;
