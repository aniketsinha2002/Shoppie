const Contact = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          Feel free to reach out to us for any inquiries or assistance you may
          need. We are here to help!
        </p>
        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our Contact Information
          </h2>
          <p className="text-lg leading-relaxed">
            Email: <span className="text-gray-600">contact@example.com</span>
          </p>
          <p className="text-lg leading-relaxed">
            Phone: <span className="text-gray-600">+123-456-7890</span>
          </p>
          <p className="text-lg leading-relaxed">
            Address:{" "}
            <span className="text-gray-600">
              123 Main Street, City, Country
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
