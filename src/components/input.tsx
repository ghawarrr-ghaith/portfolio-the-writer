import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
    return (
        <div>
            {label && <label className="block font-display text-xs uppercase tracking-widest text-aw-scarlet mb-2">{label}</label>}
            <input
                className={`w-full bg-white dark:bg-black/50 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:border-aw-scarlet transition-colors font-body ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
