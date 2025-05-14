import { Card, CardContent, CardHeader, CardFooter } from "./Card";
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
    },
    {
      name: "Fix-It-All Repairs",
      category: "Handyman",
      rating: 4.7,
      reviews: 98,
      location: "Cape Town",
      verified: true,
      experience: "8+ years",
    },
    {
      name: "Green Thumb Landscaping",
      category: "Gardening",
      rating: 4.9,
      reviews: 156,
      location: "Johannesburg",
      verified: true,
      experience: "10+ years",
    },
  ];
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Featured Service Providers
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Top-rated professionals in your area
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <Card key={index} variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                      {provider.category}
                    </span>
                  </div>
                  {provider.verified && (
                    <div className="flex items-center text-xs">
                      <CheckIcon className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">{provider.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(provider.rating) ? "fill-current" : ""
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-sm">{provider.rating}</span>
                  <span className="ml-1 text-sm">
                    ({provider.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-sm mb-2">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  {provider.location}
                </div>
                <div className="text-sm">Experience: {provider.experience}</div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <Button variant="secondary" size="small">
                    View Profile
                  </Button>
                  <Button size="small">Contact</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary">View All Providers</Button>
        </div>
      </div>
    </section>
  );
};
