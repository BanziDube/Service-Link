import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { StarIcon, MapPinIcon, CheckIcon } from "lucide-react";
import { Button } from "./Button";

export const FeaturedProviders = () => {
  const providers = [
    {
      name: "Clean Home Services",
      category: "House Cleaning",
      rating: 4.8,
      reviews: 124,
      location: "Pretoria",
      verified: true,
      experience: "5+ years",
      colorClass: "bg-green-100 hover:bg-green-200",
    },
    {
      name: "Fix-It-All Repairs",
      category: "Handyman",
      rating: 4.7,
      reviews: 98,
      location: "Cape Town",
      verified: true,
      experience: "8+ years",
      colorClass: "bg-blue-100 hover:bg-blue-200",
    },
    {
      name: "Green Thumb Landscaping",
      category: "Gardening",
      rating: 4.9,
      reviews: 156,
      location: "Johannesburg",
      verified: true,
      experience: "10+ years",
      colorClass: "bg-emerald-100 hover:bg-emerald-200",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Featured Providers
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600">
          Meet our top-rated professionals ready to serve you
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <Card
              key={index}
              variant="elevated"
              className={`transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${provider.colorClass}`}
              aria-label={`View profile of ${provider.name}`}
            >
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-teal-100 text-xs rounded-full text-teal-800">
                    {provider.category}
                  </span>
                  {provider.verified && (
                    <div className="flex items-center text-xs text-teal-600">
                      <CheckIcon className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-bold text-xl text-gray-800">{provider.name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(provider.rating) ? "fill-current text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {provider.rating} ({provider.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-1 text-teal-600" />
                  {provider.location}
                </div>
                <div className="text-sm text-gray-600">
                  Experience: {provider.experience}
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <div className="flex justify-between w-full space-x-2">
                  <Button variant="secondary" size="small">
                    View Profile
                  </Button>
                  <Button variant="primary" size="small">
                    Contact
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="secondary">View All Providers</Button>
        </div>
      </div>
    </section>
  );
};