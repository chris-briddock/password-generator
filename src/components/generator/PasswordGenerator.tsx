import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecial, setIncludeSpecial] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const special = '!@#$%^&*()_+[]{}|;:,.<>?';
        
        let allChars = '';
        if (includeUppercase) allChars += upper;
        if (includeLowercase) allChars += lower;
        if (includeNumbers) allChars += numbers;
        if (includeSpecial) allChars += special;

        if (allChars.length === 0) return;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }
        setPassword(generatedPassword);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <div className="mb-4">
                <label className="block mb-2">
                    Length: 
                    <input 
                        type="number" 
                        value={length} 
                        onChange={(e) => setLength(Number(e.target.value))} 
                        min="1"
                        className="ml-2 p-1 border border-gray-300 rounded"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block mb-2">
                    <input 
                        type="checkbox" 
                        checked={includeUppercase} 
                        onChange={(e) => setIncludeUppercase(e.target.checked)} 
                        className="mr-2"
                    />
                    Include Uppercase Letters
                </label>
            </div>
            <div className="mb-4">
                <label className="block mb-2">
                    <input 
                        type="checkbox" 
                        checked={includeLowercase} 
                        onChange={(e) => setIncludeLowercase(e.target.checked)} 
                        className="mr-2"
                    />
                    Include Lowercase Letters
                </label>
            </div>
            <div className="mb-4">
                <label className="block mb-2">
                    <input 
                        type="checkbox" 
                        checked={includeNumbers} 
                        onChange={(e) => setIncludeNumbers(e.target.checked)} 
                        className="mr-2"
                    />
                    Include Numbers
                </label>
            </div>
            <div className="mb-4">
                <label className="block mb-2">
                    <input 
                        type="checkbox" 
                        checked={includeSpecial} 
                        onChange={(e) => setIncludeSpecial(e.target.checked)} 
                        className="mr-2"
                    />
                    Include Special Characters
                </label>
            </div>
            <button 
                onClick={generatePassword}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Generate Password
            </button>
            {password && (
                <div className="mt-4">
                    <h3 className="text-md font-bold">Generated Password:</h3>
                    <p className="text-lg font-mono">{password}</p>
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;