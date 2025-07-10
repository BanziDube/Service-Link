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
      backgroundColor: "bg-green-200",
    },
    {
      icon: <WrenchIcon className="w-8 h-8" />,
      title: "Repairs & Maintenance",
      description: "Plumbing, electrical & more",
      backgroundColor: "bg-blue-400",
    },
    {
      icon: <DropletIcon className="w-8 h-8" />,
      title: "Landscaping",
      description: "Gardening & lawn care",
      backgroundColor: "bg-emerald-300",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Childcare",
      description: "Babysitting & nanny services",
      backgroundColor: "bg-pink-300",
    },
    {
      icon: <ShirtIcon className="w-8 h-8" />,
      title: "Laundry",
      description: "Washing & ironing services",
      backgroundColor: "bg-purple-400",
    },
    {
      icon: <UtensilsIcon className="w-8 h-8" />,
      title: "Cooking",
      description: "Personal chef & meal prep",
      backgroundColor: "bg-orange-400",
    },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Service Categories
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Browse our most popular service categories
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} isClickable variant="outlined" className={category.backgroundColor}>
              <CardContent className="flex items-center p-6">
                <div className="mr-4 p-3 border border-gray-300 rounded-lg bg-white">
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