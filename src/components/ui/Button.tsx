import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cad-darker';

    const variantStyles = {
        primary: 'bg-cad-orange text-white hover:brightness-110 hover:shadow-glow-orange focus:ring-cad-orange',
        secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-cad-darker focus:ring-white',
    };

    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
