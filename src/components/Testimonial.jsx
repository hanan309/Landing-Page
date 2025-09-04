import testimo from "../assets/testimo.png";
import members from "../assets/members.svg";
import clubs from "../assets/clubs.svg";
import ebooking from "../assets/ebooking.svg";
import payments from "../assets/payments.svg";
import signUp from "../assets/signUp.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const Testimonial = () => {
  const arr = [
    {
      img: members,
      num: "2,245,341",
      desc: "Members"
    },
    {
      img: clubs,
      num: "46,328",
      desc: "Clubs"
    },
    {
      img: ebooking,
      num: "828,867",
      desc: "Event Bookings"
    },
    {
      img: payments,
      num: "1,926,436",
      desc: "Payments"
    }
  ];
  return (
    <div>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={testimo} alt="Not Found" className="max-w-xs md:max-w-md w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              The unseen of spending three years at <span className="text-green-400">Pixelgrade</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic
              dolorem voluptatem modi animi suscipit totam eum minima possimus cum
              obcaecati sed, ipsum sint adipisci eos beatae sapiente mollitia, illo
              consequuntur numquam vel voluptas assumenda incidunt! Nulla.
            </p>
            <button className="bg-green-400 text-white px-6 py-2 rounded-2xl font-semibold shadow hover:bg-green-500 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Helping a local <br /><span className="text-green-400">business reinvent itself</span>
            </h1>
            <p className="text-gray-600">We reached here with our hard work and dedication</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {arr.map((t, i) => (
              <div key={i} className="flex flex-col items-center bg-white p-6 rounded-lg shadow text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                <img src={t.img} alt="Not Found" className="h-10 mb-2" />
                <h1 className="text-xl font-bold text-gray-800">{t.num}</h1>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={signUp} alt="Not Found" className="max-w-xs md:max-w-md w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              How to design your site footer like <br />we did
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Iure eaque corporis distinctio, deleniti architecto expedita
              libero fugit facilis in quasi reiciendis dolore 
              accusantium quos inventore impedit at, doloremque commodi fuga.
            </p>
            <button className="bg-green-400 text-white px-6 py-2 rounded-2xl font-semibold shadow hover:bg-green-500 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-gray-600 mb-8">
            The Nextcent blog is the best place to read about the latest membership insights,<br className="hidden md:block" />
            trends and more. See who's joining the community, read about how our community <br className="hidden md:block" />
            are increasing their membership income and lot's more.​
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <img src={card1} alt="Not Found" className="rounded-lg shadow-md max-w-xs w-full transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer" />
            <img src={card2} alt="Not Found" className="rounded-lg shadow-md max-w-xs w-full transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer" />
            <img src={card3} alt="Not Found" className="rounded-lg shadow-md max-w-xs w-full transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Pellentesque suscipit <br />fringilla libero eu.
          </h1>
          <button className="bg-green-400 text-white px-8 py-3 rounded-2xl font-semibold shadow hover:bg-green-500 transition cursor-pointer">
            Get a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;