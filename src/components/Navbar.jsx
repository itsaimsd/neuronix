import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-900 p-4 shadow-md flex items-center justify-between">
      {/* Navigation links */}
      <ul  className="flex gap-6 font-bold ms-auto me-5 pt-2">
  <li>
    <Link to="/" style={{ textDecoration: 'none' }}  className="hover:text-blue-600 transition ">Home</Link>
  </li>
  <li>
    <Link to="/services" style={{ textDecoration: 'none' }}  className="hover:text-blue-600 transition">Services</Link>
  </li>
  <li>
    <Link to="/contact" style={{ textDecoration: 'none' }}  className="hover:text-blue-600 transition">About Us</Link>
  </li>
</ul>


      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-pill border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
          Hire Me
        </button>
        <button className="px-4 py-2 rounded-pill bg-blue-600 text-white hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
}