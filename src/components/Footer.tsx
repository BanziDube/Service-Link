import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">ServiceFinder</h3>
            <p className="text-sm text-gray-300">
              Connecting service seekers with trusted domestic service providers
              since 2023.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Service Guarantee
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">For Providers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Join as Provider
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Provider Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Provider Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                © 2023 ServiceFinder. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};