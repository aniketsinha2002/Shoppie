import React from 'react';
import Header from './Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Feel free to reach out to us for any inquiries or assistance you may need. We are here to help!
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Our Contact Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Email: contact@example.com</p>
          <p className="text-lg text-gray-700 leading-relaxed">Phone: +123-456-7890</p>
          <p className="text-lg text-gray-700 leading-relaxed">Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
