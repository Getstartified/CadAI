import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-transparent flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
