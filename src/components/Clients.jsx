import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import client5 from "../assets/client5.svg";
import client6 from "../assets/client6.svg";
import client7 from "../assets/client7.svg";

const Clients = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Clients</h1>
          <p className="text-gray-600">We have been working with some fortune 500+ clients</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <img src={client1} alt="client1" className="h-10 w-auto" />
          <img src={client2} alt="client2" className="h-10 w-auto" />
          <img src={client3} alt="client3" className="h-10 w-auto" />
          <img src={client4} alt="client4" className="h-10 w-auto" />
          <img src={client5} alt="client5" className="h-10 w-auto" />
          <img src={client6} alt="client6" className="h-10 w-auto" />
          <img src={client7} alt="client7" className="h-10 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Clients;