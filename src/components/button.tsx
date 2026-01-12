import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`w-full bg-aw-scarlet text-white font-display font-bold uppercase tracking-[0.2em] py-4 hover:bg-red-700 transition-colors mt-4 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
