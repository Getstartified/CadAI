import React from 'react';

interface GradientIconProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const GradientIcon: React.FC<GradientIconProps> = ({ size = 'medium', className = '' }) => {
    const sizeStyles = {
        small: 'w-12 h-12',
        medium: 'w-20 h-20',
        large: 'w-24 h-24',
    };

    return (
        <div
            className={`${sizeStyles[size]} bg-gradient-cad rounded-2xl shadow-glow-gradient animate-pulse-glow ${className}`}
            aria-hidden="true"
        />
    );
};

export default GradientIcon;
