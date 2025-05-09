import groupImage from "../assets/icon/Group-39972.png";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <div className="bg-white px-6 py-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          We have ranked over 1000+ Keywords 🚀
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Web Development Services Company in India
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Struggling to find pocket-friendly yet results-driven website
          development services? We are the answer. Welcome to the best in the
          digital world - Birbal Bits. We offer web design services like no
          other. How? Explore below.
        </p>

        <ContactForm />
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={groupImage} alt="Illustration" className="w-4/5 h-auto" />
      </div>
    </div>
  );
}
