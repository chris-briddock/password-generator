import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-800 text-white py-4 shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold">Password Generator</h1>
            </div>
        </header>
    );
};

export default Header;