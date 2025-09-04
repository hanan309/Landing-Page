import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg";
import feature3 from "../assets/feature3.svg";

const Features = () => {
    const features = [
        {
            img: feature1,
            title: "Membership Organizations",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            img: feature2,
            title: "National Associations",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            img: feature3,
            title: "Clubs And Groups",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        }
    ];
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Manage your entire community <br />in a single system
          </h1>
          <p className="text-gray-600">Who is Nextcent suitable for?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 p-6 shadow rounded-lg flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <img src={f.img} alt="Not Found" className="h-12 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;