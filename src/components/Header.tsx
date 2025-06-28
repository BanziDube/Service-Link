import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, UserIcon, SearchIcon } from "lucide-react";
import { Button } from "./Button";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/Logo.png"
              alt="Service Link Logo"
              className="h-10 mr-8"
            />
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="secondary"
              size="small"
              leftIcon={<UserIcon className="w-4 h-4" />}
            >
              Sign In
            </Button>
            <Button size="small">Register</Button>
            <Link to="/provider-signup">
              <Button size="small">Become a Provider</Button>
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="#"
                    className="block py-2 hover:bg-gray-100 px-2 rounded"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 hover:bg-gray-100 px-2 rounded"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 hover:bg-gray-100 px-2 rounded"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 hover:bg-gray-100 px-2 rounded"
                  >
                    About
                  </a>
                </li>
              </ul>
              <div className="flex flex-col space-y-2 mt-4">
                <Button
                  variant="secondary"
                  leftIcon={<SearchIcon className="w-4 h-4" />}
                >
                  Search
                </Button>
                <Button
                  variant="secondary"
                  leftIcon={<UserIcon className="w-4 h-4" />}
                >
                  Sign In
                </Button>
                <Button>Join Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
