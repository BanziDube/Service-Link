import { Card, CardContent } from "./Card.tsx";
import {
  HomeIcon,
  DropletIcon,
  WrenchIcon,
  HeartIcon,
  ShirtIcon,
  UtensilsIcon,
} from "lucide-react";

export const ServiceCategories = () => {
  const categories = [
    {
      icon: <HomeIcon className="w-8 h-8 text-teal-600" />,
      title: "House Cleaning",
      description: "Regular & deep cleaning services",
      colorClass: "bg-green-100 hover:bg-green-200",
    },
    {
      icon: <WrenchIcon className="w-8 h-8 text-teal-600" />,
      title: "Repairs & Maintenance",
      description: "Plumbing, electrical & more",
      colorClass: "bg-blue-100 hover:bg-blue-200",
    },
    {
      icon: <DropletIcon className="w-8 h-8 text-teal-600" />,
      title: "Landscaping",
      description: "Gardening & lawn care",
      colorClass: "bg-emerald-100 hover:bg-emerald-200",
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-teal-600" />,
      title: "Childcare",
      description: "Babysitting & nanny services",
      colorClass: "bg-pink-100 hover:bg-pink-200",
    },
    {
      icon: <ShirtIcon className="w-8 h-8 text-teal-600" />,
      title: "Laundry",
      description: "Washing & ironing services",
      colorClass: "bg-purple-100 hover:bg-purple-200",
    },
    {
      icon: <UtensilsIcon className="w-8 h-8 text-teal-600" />,
      title: "Cooking",
      description: "Personal chef & meal prep",
      colorClass: "bg-orange-100 hover:bg-orange-200",
    },
  ];

  return (
    <section className="pt-[200px] md:pt-[360px] lg:pt-[416px] pb-16 border-b border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Explore Service Categories
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600">
          Discover a wide range of trusted services tailored to your needs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              isClickable
              variant="outlined"
              className={`transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${category.colorClass}`}
              aria-label={`View ${category.title} services`}
            >
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="p-3 bg-white rounded-lg shadow-md">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};