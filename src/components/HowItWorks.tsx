import { SearchIcon, ListIcon, CalendarIcon, StarIcon } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <SearchIcon className="w-8 h-8 text-teal-600" />,
      title: "Search",
      description: "Browse categories or find specific providers with ease",
    },
    {
      icon: <ListIcon className="w-8 h-8 text-teal-600" />,
      title: "Compare",
      description: "Review ratings and compare service options",
    },
    {
      icon: <CalendarIcon className="w-8 h-8 text-teal-600" />,
      title: "Book",
      description: "Schedule your preferred provider instantly",
    },
    {
      icon: <StarIcon className="w-8 h-8 text-teal-600" />,
      title: "Review",
      description: "Share your experience to guide others",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          How Service Link Works
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Your journey to finding trusted services in just a few steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                index === 0
                  ? "delay-0"
                  : index === 1
                  ? "delay-100"
                  : index === 2
                  ? "delay-200"
                  : "delay-300"
              }`}
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                <span className="text-2xl font-bold text-teal-600">
                  {index + 1}
                </span>
              </div>
              <div className="mb-4 p-3 bg-teal-100 rounded-lg">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};