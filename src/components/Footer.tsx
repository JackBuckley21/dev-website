import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-500 py-6">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Jack Buckley. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
