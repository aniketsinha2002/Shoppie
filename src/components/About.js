import Banner from "./Banner";
const About = () => {
  return (
    <div className="text-black min-h-screen tracking-wider overflow-x-hidden text-justify">
      {/* <Banner /> */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">About Us</h1>
        <div className="pt-6">
          <p className="text-lg font-thin leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            elit sed velit consequat tristique vitae ut risus. Phasellus at
            ipsum sit amet mi finibus tincidunt nec in turpis. Duis sit amet
            nunc porttitor, sagittis risus non, eleifend magna. Donec mattis,
            leo at sodales elementum, elit tortor tempor sapien, id posuere
            risus sem et lacus.
          </p>
          <p className="text-lg font-thin leading-relaxed">
            Vivamus id velit nulla. Duis et tempor felis. Integer id est vel
            purus aliquam varius. Fusce eget commodo felis. Integer malesuada
            arcu id facilisis rhoncus. Curabitur varius nisl at leo dictum
            ullamcorper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
