import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} VRL Audio Visual.</p>
      </div>
    </footer>
  );
}

export default Footer;