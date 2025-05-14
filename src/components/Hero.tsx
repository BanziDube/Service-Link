import Slider from "react-slick";
import { Button } from "./Button";
import { SearchIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const serviceImages = [
  "./images/clean.jpg",
  "./images/Plumber.jpg",
  "./images/electrician-working.jpg",
  "./images/landscape-gardener.jpg",
  "./images/image-asset.jpg",
];

// Slide Show Settings
export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true, // Ensures looping
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <section className="relative py-12 md:py-20 border-b border-gray-200">
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {serviceImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Service ${index + 1}`}
                className="w-full h-[450px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Find Trusted Domestic Service Providers
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
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
