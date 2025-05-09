const ContactForm = () => {
  return (
    <form className="w-full mt-3">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-700 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-700 mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            placeholder="Contact Number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
      >
        Submit
      </button>

      <p className="text-sm text-gray-500 mt-2 italic">
        We’ll use your information solely to provide online quotes.
      </p>
    </form>
  );
};

export default ContactForm;
