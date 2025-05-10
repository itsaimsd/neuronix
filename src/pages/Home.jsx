import groupImage from "../assets/icon/Group-39972.png";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <div className="bg-white px-6 py-10 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Web Development <br />
            Services Company <br />
            in India
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Struggling to find pocket-friendly yet results-driven website
            development services? We are the answer. <br /> <br />
            Welcome to the best in the digital world - Birbal Bits. We offer web
            design services like no other. How? Explore below.
          </p>
          <ContactForm />
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={groupImage} alt="Illustration" className="w-4/5 h-auto" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Modern Website <br /> Development Services <br /> In India
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              In a market full of countless options, it seems quite challenging
              to find the right platform. We want you to stop your search here
              and get in touch with us.
              <br /> <br />
              We are known not only for our budget-friendly web design services
              but for our flawless performance too. With an industry-leading
              company like us you get to enjoy more than you demand.
            </p>
            <ContactForm />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src={groupImage} alt="Illustration" className="w-4/5 h-auto" />
          </div>
        </div>
      </div>
      <div className="big-container bg-blue-600 text-white py-10 px-6 md:px-20 mt-16 rounded-3xl">
        <div className="header">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white-900 leading-tight mb-4">
              Our Website Development Services{" "}
              <br className="text-align:center" />
              Include:
            </h1>
            <h4>
              Our website development services are designed to understand every
              business’s needs and drive growth. As a website development
              company, which believes in bespoke functionality by using a wide
              range of website development services.
            </h4>
          </div>
          <div>
            <div>
              <img src="/src/assets/icon/Phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
