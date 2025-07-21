import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  UserIcon,
  HomeIcon,
  WrenchIcon,
  FolderIcon,
  InfoIcon,
} from "lucide-react";
import { Button } from "./Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock auth state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/images/SL Logo.png"
                alt="Service Link Logo"
                className="w-50 h-11 object-contain"
              />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="flex items-center hover:text-teal-400 transition duration-300"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Home
              </Link>
              <Link
                to="/services"
                className="flex items-center hover:text-teal-400 transition duration-300"
              >
                <WrenchIcon className="w-5 h-5 mr-2" />
                Services
              </Link>
              <Link
                to="/categories"
                className="flex items-center hover:text-teal-400 transition duration-300"
              >
                <FolderIcon className="w-5 h-5 mr-2" />
                Categories
              </Link>
              <Link
                to="/about"
                className="flex items-center hover:text-teal-400 transition duration-300"
              >
                <InfoIcon className="w-5 h-5 mr-2" />
                About
              </Link>
            </div>
          </div>

          {/* Authentication Icon */}
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center hover:text-teal-400 transition duration-300"
                >
                  <UserIcon className="w-5 h-5 mr-2" />
                  Profile
                </Link>
                <div
                  className="w-8 h-8 flex items-center justify-center bg-teal-400 rounded-full cursor-pointer"
                  onClick={() => setIsAuthenticated(false)}
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="w-8 h-8 flex items-center justify-center bg-teal-400 rounded-full cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
                <div
                  className={`absolute right-0 mt-2 w-32 bg-gray-800 text-white text-center rounded-md shadow-lg ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    to="/signin"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    to="/"
                    className="flex items-center py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HomeIcon className="w-5 h-5 mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="flex items-center py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <WrenchIcon className="w-5 h-5 mr-2" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="flex items-center py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FolderIcon className="w-5 h-5 mr-2" />
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <InfoIcon className="w-5 h-5 mr-2" />
                    About
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col space-y-2 mt-4">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center py-2 hover:bg-gray-700 px-2 rounded text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserIcon className="w-5 h-5 mr-2" />
                      Profile
                    </Link>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsAuthenticated(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="primary">Sign In</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="primary">Sign Up</Button>
                    </Link>
                  </div>
                )}
                <Link to="/provider-signup" onClick={() => setIsMenuOpen(false)}>
                  <Button>Become a Provider</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};