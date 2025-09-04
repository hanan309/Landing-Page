import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        <Banner />
        <Clients />
        <Features />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default App;