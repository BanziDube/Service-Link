import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const serviceImages = [
  "clean.jpg",
  "Plumber.jpg",
  "electrician-working.jpg",
  "landscape-gardener.jpg",
  "image-asset.jpg",
];

// Slide Show Settings
export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const category = formData.get("category") as string;
    const location = formData.get("location") as string;
    console.log("Search:", { category, location });
    // Add search logic here (e.g., filter services by category and location)
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
        <form
          onSubmit={handleSearch}
          className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="category"
              placeholder="e.g., Cleaning, Plumbing..."
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              name="location"
              placeholder="e.g., Johannesburg, Cape Town..."
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};