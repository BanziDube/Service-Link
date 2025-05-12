import { Button } from "./Button";
import { SearchIcon } from "lucide-react";
export const Hero = () => {
  return (
    <section className="py-12 md:py-20 border-b border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Trusted Domestic Service Providers
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Connect with verified professionals for cleaning, repairs,
          landscaping, childcare, and more — all in one place.
        </p>
        <div className="max-w-lg mx-auto bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <Button leftIcon={<SearchIcon />}>Search</Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
              Cleaning
            </span>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
              Plumbing
            </span>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
              Electrical
            </span>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
              Gardening
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
