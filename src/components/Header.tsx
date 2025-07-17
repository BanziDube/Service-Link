import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, UserIcon } from "lucide-react";
import { Button } from "./Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock auth state

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-teal-400">
              Service Link
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:text-teal-400 transition duration-300">
                Home
              </Link>
              <Link
                to="/services"
                className="hover:text-teal-400 transition duration-300"
              >
                Services
              </Link>
              <Link
                to="/categories"
                className="hover:text-teal-400 transition duration-300"
              >
                Categories
              </Link>
              <Link to="/about" className="hover:text-teal-400 transition duration-300">
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
                  className="hover:text-teal-400 transition duration-300"
                >
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
              <div className="relative group">
                <div
                  className="w-8 h-8 flex items-center justify-center bg-teal-400 rounded-full cursor-pointer"
                  onClick={() => {/* Handle toggle or navigation */}}
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute right-0 mt-2 w-32 hidden group-hover:block bg-gray-800 text-white text-center rounded-md shadow-lg">
                  <Link
                    to="/signin"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Navigate to Sign In
                    }}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Navigate to Sign Up
                    }}
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
                    className="block py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="block py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 hover:bg-gray-700 px-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col space-y-2 mt-4">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="block py-2 hover:bg-gray-700 px-2 rounded text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
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