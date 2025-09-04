import logo from "../assets/logo.svg";
import Insta from "../assets/Insta.svg";
import Social from "../assets/Social.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import send from "../assets/send.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Not Found" className="h-8 w-8 mr-2 cursor-pointer" />
            <span className="text-2xl font-bold cursor-pointer">Nexcent</span>
          </div>
          <p className="text-sm mb-6">
            Copyright @ 2020 Landify UI Kit.<br />All rights reserved
          </p>
          <div className="flex space-x-4">
            <img src={Insta} alt="Instagram" className="h-6 w-6 cursor-pointer" />
            <img src={Social} alt="Social" className="h-6 w-6 cursor-poiter" />
            <img src={twitter} alt="Twitter" className="h-6 w-6 cursor-pointer" />
            <img src={youtube} alt="YouTube" className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Testimonials</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Help center</li>
            <li className="cursor-pointer">Terms of service</li>
            <li className="cursor-pointer">Legal</li>
            <li className="cursor-pointer">Privacy policy</li>
            <li className="cursor-pointer">Status</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Stay up to date</h2>
          <form className="flex items-center bg-gray-700 rounded-lg px-2 py-1">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent outline-none text-white px-2 py-1 flex-1"
            />
            <button type="submit">
              <img src={send} alt="Send" className="h-5 w-5 cursor-pointer" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;