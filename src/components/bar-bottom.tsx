import React from 'react';

const BottomBar: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-black py-8 border-t border-gray-200 dark:border-gray-900 relative z-10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-600 text-sm font-display tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} The Creator.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                    <span>Github</span>
                </div>
            </div>
        </footer>
    );
};

export default BottomBar;
