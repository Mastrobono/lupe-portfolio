// components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Footer.module.scss';

const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                made by cochi
            </div>
        </footer>
    );
};

export default Footer;
