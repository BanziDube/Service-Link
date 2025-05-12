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
      icon: <HomeIcon className="w-8 h-8" />,
      title: "House Cleaning",
      description: "Regular & deep cleaning services",
    },
    {
      icon: <WrenchIcon className="w-8 h-8" />,
      title: "Repairs & Maintenance",
      description: "Plumbing, electrical & more",
    },
    {
      icon: <DropletIcon className="w-8 h-8" />,
      title: "Landscaping",
      description: "Gardening & lawn care",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Childcare",
      description: "Babysitting & nanny services",
    },
    {
      icon: <ShirtIcon className="w-8 h-8" />,
      title: "Laundry",
      description: "Washing & ironing services",
    },
    {
      icon: <UtensilsIcon className="w-8 h-8" />,
      title: "Cooking",
      description: "Personal chef & meal prep",
    },
  ];
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Service Categories
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Browse our most popular service categories
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} isClickable variant="outlined">
              <CardContent className="flex items-center p-6">
                <div className="mr-4 p-3 border border-gray-300 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p className="text-sm">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
