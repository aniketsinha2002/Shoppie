import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit sed velit consequat tristique
          vitae ut risus. Phasellus at ipsum sit amet mi finibus tincidunt nec in turpis. Duis sit amet nunc
          porttitor, sagittis risus non, eleifend magna. Donec mattis, leo at sodales elementum, elit tortor
          tempor sapien, id posuere risus sem et lacus.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Vivamus id velit nulla. Duis et tempor felis. Integer id est vel purus aliquam varius. Fusce eget
          commodo felis. Integer malesuada arcu id facilisis rhoncus. Curabitur varius nisl at leo dictum
          ullamcorper.
        </p>
      </div>
    </div>
  );
};

export default About;
