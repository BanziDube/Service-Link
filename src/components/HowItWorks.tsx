import { SearchIcon, ListIcon, StarIcon, CalendarIcon } from "lucide-react";
export const HowItWorks = () => {
  const steps = [
    {
      icon: <SearchIcon className="w-8 h-8" />,
      title: "Search",
      description: "Browse service categories or search for specific providers",
    },
    {
      icon: <ListIcon className="w-8 h-8" />,
      title: "Compare",
      description: "Read reviews, check ratings, and compare service offerings",
    },
    {
      icon: <CalendarIcon className="w-8 h-8" />,
      title: "Book",
      description: "Schedule an appointment with your chosen provider",
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: "Review",
      description: "Rate your experience to help others find great service",
    },
  ];
  return (
    <section className="py-12 border-b border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          How It Works
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Find and book service providers in 4 simple steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 border-2 border-dashed border-gray-300 rounded-full">
                {step.icon}
              </div>
              <div className="mb-2 text-xl font-bold">{step.title}</div>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute mt-8 ml-32">
                  <div className="w-16 border-t-2 border-dashed border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
