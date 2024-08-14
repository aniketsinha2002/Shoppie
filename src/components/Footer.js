const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-500 text-center mb-2 tracking-widest">
      <p className="text-lg">© {new Date().getFullYear()} Aniket Sinha</p>
      <a
        href="https://github.com/aniketsinha2002"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium no-underline"
      >
        GitHub
      </a>
    </div>
  );
};

export default Footer;
