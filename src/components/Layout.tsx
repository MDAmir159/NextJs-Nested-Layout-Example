// components/Layout.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();

    const getMenuItems = () => {
        if (router.pathname === '/') {
            return (
                <nav>
                    <Link href="/route1">Route1</Link>
                    <Link href="/route2">Route2</Link>
                </nav>
            );
        } else if (router.pathname.startsWith('/route1')) {
            return (
                <nav>
                    <Link href="/route1/page1">Page1</Link>
                    <Link href="/route1/page2">Page2</Link>
                </nav>
            );
        } else if (router.pathname.startsWith('/route2')) {
            return (
                <nav>
                    <Link href="/route2/page3">Page3</Link>
                    <Link href="/route2/page4">Page4</Link>
                </nav>
            );
        }
    };

    return (
        <div>
            <header>Navbar</header>
            {getMenuItems()}
            <footer>Menu</footer>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
