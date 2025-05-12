import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceCategories } from "./components/ServiceCategories";
import { FeaturedProviders } from "./components/FeaturedProviders";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceCategories />
        <FeaturedProviders />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
