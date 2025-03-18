import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openAuthPopup } from "../../store/slices/authSlice";
import AuthModal from "../auth/AuthModal";
import { FaCartShopping } from "react-icons/fa6";

const mainNavigation = [
  {
    name: "men",
    link: "/men",
  },
  {
    name: "women",
    link: "/women",
  },
  {
    name: "kids",
    link: "/kids",
  },
  {
    name: "sports",
    link: "/sports",
  },
  {
    name: "brands",
    link: "/brands",
  },
  {
    name: "outlet",
    link: "/outlet",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);
  return (
    <header>
      <div className="header-desktop px-5 xl:px-10 border-b-1 border-b-[#eceff1] bg-white relative">
        <div className="header-bottom py-3 md:py-0 flex justify-between items-center">
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars size={20} />
          </button>
          <Link to="/" className="header-logo ml-11 md:ml-0">
            <img src="/logo.svg" alt="Logo" className="w-15 h-auto" />
          </Link>
          <ul className="hidden md:flex flex-col mt-16 p-5 md:p-0 md:flex-row md:mt-0 md:gap-5">
            {mainNavigation.map((item) => (
              <li key={item.name} className="text-left md:text-center">
                <Link
                  to={item.link}
                  className="block font-bold py-4 uppercase group relative no-underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="hidden md:block absolute left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 h-0.5 bg-black origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              className="p-2"
              onClick={() => dispatch(openAuthPopup("login"))}
            >
              <FaUser size={20} />
            </button>
            <Link to="/cart" className="p-2">
              <FaCartShopping size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center px-5 py-3 border-b border-[#eceff1] relative">
          <Link
            to="/"
            className="header-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src="/logo.svg" alt="Logo" className="w-15 h-auto" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 absolute right-5 top-1/2 transform -translate-y-1/2"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <ul>
          {mainNavigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className="block font-bold py-4 uppercase px-5 no-underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AuthModal />
    </header>
  );
};

export default Header;
