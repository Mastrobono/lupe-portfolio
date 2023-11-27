// components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Navbar.module.scss';
import Logo from "../../../public/assets/logo.png";
import LogoRed from "../../../public/assets/logoRed.png";
import Image from "next/image";


const Navbar: React.FC = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isNavbarFixed ? styles.fixed : ''}`}>
            <div className={styles.logo}>
                <Image
                    className={styles.image}
                    src={isNavbarFixed ? Logo : LogoRed}
                    width={140}
                    height={50}
                    alt="Logo image"
                    loading="lazy"
                />
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>Editorial</li>
                <li className={styles.navLink}>Travels</li>
                <li className={styles.navLink}>Brands</li>
                <li className={styles.navLink}>Ketupe</li>
            </ul>
        </nav>
    );
};

export default Navbar;
