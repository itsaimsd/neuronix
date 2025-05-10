import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // New state for email

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for name, phone, and email
    if (name.trim() === "" || phone.trim().length !== 10 || !email.trim()) {
      toast.error("Please enter a valid name, 10-digit phone number, and email.");
      return;
    }

    toast.success(`Submitted successfully! 🎉`);

    // Reset form
    setName("");
    setPhone("");
    setEmail(""); // Reset email field
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full mt-3">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* <button
          type="submit"
          className="mt-3 w-full md:w-auto px-8 py-2 bg-blue-600 text-white font-semibold rounded-pill hover:bg-blue-700 transition"
        >
          Submit
        </button> */}

       <button
        type="submit"
        className="mt-3 w-full md:w-auto mt-9 px-8 py-3 bg-blue-600 text-white font-semibold rounded-2xl cursor-pointer hover:bg-blue-700 transition"
      >
        Submit
      </button> 

        <p className="text-sm text-gray-500 mt-2 italic">
          We’ll use your information solely to provide online quotes.
        </p>
      </form>

      {/* Toast Container with center positioning */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default ContactForm;
