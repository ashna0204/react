import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            MyBrand
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
            <a href="#" className="block text-gray-600 dark:text-white">
              Home
            </a>
            <a href="#" className="block text-gray-600 dark:text-white">
              About
            </a>
            <a href="#" className="block text-gray-600 dark:text-white">
              Services
            </a>
            <a href="#" className="block text-gray-600 dark:text-white">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
