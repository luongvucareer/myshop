import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SiAdidas } from "react-icons/si";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const cmsMobile = [
  { name: "Store Finder", link: "/store" },
  { name: "Contact Online Shop", link: "/contact-us" },
  { name: "FAQs", link: "/faqs" },
  { name: "Sitemap", link: "/sitemap" },
  { name: "Careers", link: "/careers" },
  { name: "Delivery", link: "/delivery" },
  { name: "Order Tracker", link: "/order-tracker" },
];

const cmsDesktop = [
  {
    title: "PRODUCTS",
    links: [
      { name: "Footwear", link: "/shoes" },
      { name: "Clothing", link: "/clothing" },
      { name: "Accessories", link: "/accessories" },
      { name: "New Arrivals", link: "/new_arrivals" },
      { name: "Release Dates", link: "/release-dates" },
      { name: "Top Sellers", link: "/top_sellers" },
      { name: "Member Exclusives", link: "/member_exclusive" },
      { name: "Outlet", link: "/outlet" },
    ],
  },
  {
    title: "SPORTS",
    links: [
      { name: "Running", link: "/running" },
      { name: "Golf", link: "/golf" },
      { name: "Gym & Training", link: "/gym_training" },
      { name: "Football", link: "/football" },
      { name: "Basketball", link: "/basketball" },
      { name: "Tennis", link: "/tennis" },
      { name: "Outdoor", link: "/outdoor" },
      { name: "Swimming", link: "/swimming" },
      { name: "Motorsport", link: "/motorsport" },
    ],
  },
  {
    title: "COLLECTIONS",
    links: [
      { name: "Pharrell Williams", link: "/pharrell" },
      { name: "Ultraboost", link: "/ultraboost" },
      { name: "Pureboost", link: "/pureboost" },
      { name: "Predator", link: "/predator" },
      { name: "Superstar", link: "/superstar" },
      { name: "Stan Smith", link: "/stan_smith" },
      { name: "NMD", link: "/nmd" },
      { name: "Adicolor", link: "/adicolor" },
    ],
  },
  {
    title: "COMPANY INFO",
    links: [
      { name: "About Us", link: "https://www.adidas-group.com/" },
      { name: "Careers", link: "https://careers.adidas-group.com/" },
      { name: "Press", link: "https://news.adidas.com/" },
      { name: "Adidas stories", link: "/blog" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { name: "Help", link: "/help" },
      { name: "Store Finder", link: "/storefinder#/" },
      { name: "Size Charts", link: "/help" },
      { name: "Payment", link: "/help" },
      { name: "Delivery", link: "/help" },
      { name: "Returns & Refunds", link: "/help" },
      { name: "Promotions", link: "/help" },
      { name: "Sitemap", link: "/help-topics-sitemap" },
      { name: "Customer Services", link: "/help/sea-contact/contact-us" },
    ],
  },
  {
    title: "FOLLOW US",
    isIcon: true,
    links: [
      {
        link: "https://www.facebook.com/adidas",
        name: <FaFacebook />,
      },
      {
        link: "https://www.instagram.com/adidas/",
        name: <FaInstagram />,
      },
      {
        link: "https://twitter.com/adidas",
        name: <FaTwitter />,
      },
      {
        link: "https://www.pinterest.com/adidas/",
        name: <FaPinterest />,
      },
      {
        link: "https://www.tiktok.com/@adidas?lang=en",
        name: <FaTiktok />,
      },
      {
        link: "https://www.youtube.com/c/adidas",
        name: <FaYoutube />,
      },
    ],
  },
];

const policyLinks = [
  { name: "Cookie Settings", link: "/cookie" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "Terms & Conditions", link: "/terms-and-conditions" },
  { name: "Imprint", link: "/imprint" },
  { name: "© 2020 adidas Vietnam Company Limited", link: "/" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="feedback p-5 bg-[#eceff1] lg:hidden">
        <h5 className="uppercase mb-4">Your opinion counts</h5>
        <p className="mb-4">
          We strive to serve you better and appreciate your feedback
        </p>
        <Link to="#" className="underline">
          Please fill out this short survey
        </Link>
      </div>
      <button className="back-to-top lg:hidden w-full uppercase p-2.5 bg-secondary text-center text-sm flex items-center justify-center gap-2.5">
        <span>
          <FaChevronUp />
        </span>
        <span>BACK TO TOP</span>
      </button>
      <div className="account-action flex justify-around p-4 uppercase text-sm bg-primary text-secondary font-bold lg:hidden">
        <Link to="/account-login">Login</Link>
        <Link to="/cart">Your bag</Link>
      </div>
      <div className="hidden md:block bg-primary text-secondary py-20 px-15">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-center mb-4">
              STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
            </h1>
            <p className="mb-4">
              Sport keeps us fit. Keeps you mindful. Brings us together. Through
              sport we have the power to change lives. Whether it is through
              stories of inspiring athletes. Helping you to get up and get
              moving. Sportswear featuring the latest technologies, to up your
              performance. Beat your PB.adidas offers a home to the runner, the
              basketball player, the soccer kid, the fitness enthusiast. The
              weekend hiker that loves to escape the city. The yoga teacher that
              spreads the moves. The 3-Stripes are seen in the music scene. On
              stage, at festivals. Our sports clothing keeps you focused before
              that whistle blows. During the race. And at the finish lines.
              We’re here to supportcreators. Improve their game. Their lives.
              And change the world.
            </p>
            <p>
              adidas is about more than sportswear and workout clothes. We
              partner with the best in the industry to co-create. This way we
              offer our fans the sports apparel and style that match their
              athletic needs, while keeping sustainability in mind. We’re here
              to support creators. Improve their game. Create change. And we
              think about the impact we have on our world.
            </p>
          </div>
          <div className="flex justify-center">
            <SiAdidas className="text-5xl" />
          </div>
        </div>
      </div>
      <div className="newsletter bg-[#ede734] p-10 flex flex-col items-center gap-4 lg:gap-10 lg:flex-row lg:justify-center lg:items-center">
        <h2 className="uppercase">BECOME A MEMBER & GET 15% OFF</h2>
        <button className="btn-secondary uppercase flex items-center justify-center gap-2">
          <span>Sign up for free</span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
      <ul className="cms-mobile py-4 grid grid-cols-2 bg-primary text-secondary text-xs lg:hidden">
        {cmsMobile.map((item, index) => (
          <li key={index} className="px-4 py-2.5 text-center">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="cms-desktop p-10 hidden lg:block">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-6 gap-7 text-sm">
          {cmsDesktop.map((section, index) => (
            <div key={index}>
              <h5 className="mb-2">{section.title}</h5>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.link} className="py-1 block">
                      <span className={section.isIcon ? "text-2xl" : ""}>
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="policy py-4 border-t-1 border-t-btn-border bg-[#282c31] text-xs text-secondary text-center ">
        <ul className="max-w-7xl mx-auto flex flex-wrap justify-center overflow-hidden">
          {policyLinks.map((item, index) => (
            <li key={index} className="p-4 w-1/2 lg:w-auto">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
