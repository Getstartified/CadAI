import React from 'react';
import GradientIcon from '../ui/GradientIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-cad-darker border-t border-cad-gray py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-4">
                    <GradientIcon size="small" />
                    <p className="text-gray-400 text-sm">
                        © 2025 CadAI Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
