import styles from '../../styles/home.module.css'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type NavbarProp = {
    onMenuClick: Function
}


export default function Navbar({ onMenuClick }: NavbarProp) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
        onMenuClick(!menuOpen);
    };

    return (
        <div className={`${styles.rectangle1} ${menuOpen ? styles.rectangle1AFTERCLICK : ''}`}>
            <div className={styles.menuButton} onClick={handleHamburgerClick}>
                <svg fill="#ffffff" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g data-name="Layer 2">
                            <g data-name="menu">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"></rect>
                                <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"></rect>
                                <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"></rect>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div className={`${styles.menuOptions} ${menuOpen ? styles.menuOptionsVisible : styles.menuOptionsHidden}`}>
                <ol>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/faqs">
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link href="https://discord.com/"  target='_blank'>
                            Discord
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin">
                            Admin
                        </Link>
                    </li>
                </ol>
            </div>
        </div>
    );
}