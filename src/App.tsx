import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceCategories } from "./components/ServiceCategories";
import { FeaturedProviders } from "./components/FeaturedProviders";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { ProviderSignup } from "./components/ProviderSignup";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ServiceCategories />
                  <FeaturedProviders />
                  <HowItWorks />
                </>
              }
            />
            <Route path="/provider-signup" element={<ProviderSignup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
