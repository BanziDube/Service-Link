export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ServiceFinder</h3>
            <p className="text-sm">
              Connecting service seekers with trusted domestic service providers
              since 2023.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service Guarantee
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">For Providers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Join as Provider
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Provider Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Provider Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; 2023 ServiceFinder. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="border border-gray-300 rounded-full p-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </a>
              <a href="#" className="border border-gray-300 rounded-full p-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </a>
              <a href="#" className="border border-gray-300 rounded-full p-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </a>
              <a href="#" className="border border-gray-300 rounded-full p-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
