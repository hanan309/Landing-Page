import Illustration from "../assets/illustration.png"
const Banner = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Lessons and insights <br />
            <span className="text-green-400">from 8 years</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-green-400 text-white px-6 py-2 rounded-2xl font-semibold shadow hover:bg-green-500 transition cursor-pointer">
            Register
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Illustration} alt="banner image" className="max-w-xs md:max-w-md w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Banner;