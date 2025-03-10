import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            commodi vitae atque reprehenderit provident porro accusamus. Ea
            illo, alias neque quia ad quas, exercitationem consequatur deleniti,
            eius aperiam dolorum distinctio.
          </p>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 8754225785</li>
            <li>gr.sandeep87@forever.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className="pt-5 text-sm text-center">
            Copyright {new Date().getFullYear()} @ forever.com - All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
