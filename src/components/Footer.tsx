import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-4 mt-8">
      <div className="max-w-4xl mx-auto text-center">
      <p className="text-sm">
          We do not store any passwords, or collect any data.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} StrongPasswordGenerator, all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;