import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import Button from '../ui/Button';
import GradientIcon from '../ui/GradientIcon';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openModal } = useModal();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cad-darker/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <GradientIcon size="small" className="w-8 h-8" />
                        <span className="text-xl font-bold tracking-tight">CadAI</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Button variant="primary" size="small" onClick={openModal}>
                            Try Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open menu</span>
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-cad-darker border-b border-white/10">
                    <div className="pt-4">
                        <Button variant="primary" size="medium" className="w-full" onClick={() => {
                            setIsMobileMenuOpen(false);
                            openModal();
                        }}>
                            Try Now
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
