import { useState } from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-2" >
                <img src={logo} alt="Not Found" className="h-8 w-8" />
                <span className="text-2xl font-bold text-gray-800" >Nexcent</span>
            </div>
            <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                <li className="hover:text-green-400 cursor-pointer">Home</li>
                <li className="hover:text-green-400 cursor-pointer">Features</li>
                <li className="hover:text-green-400 cursor-pointer">Community</li>
                <li className="hover:text-green-400 cursor-pointer">Blog</li>
                <li className="hover:text-green-400 cursor-pointer">Pricing</li>
            </ul>
            <button className="hidden md:block bg-green-400 text-white px-6 py-2 rounded-2xl hover:bg-green-500 transition font-semibold shadow cursor-pointer">Register Now <span className="ml-2">&#8594;</span></button>
            
            <button className="md:hidden flex items-center ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </nav>
        {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Features</li>
            <li className="hover:text-green-400 cursor-pointer">Community</li>
            <li className="hover:text-green-400 cursor-pointer">Blog</li>
            <li className="hover:text-green-400 cursor-pointer">Pricing</li>
            <button className="w-full bg-green-400 text-white px-6 py-2 rounded-2xl hover:bg-green-400 transition font-semibold shadow mt-2">
              Register Now <span className="ml-2">&#8594;</span>
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
