import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import hambugger from "@/assets/icons/hambugger.svg";
import cancelWithCircle from "@/assets/icons/cancelWithCircle.svg";

const Header = () => {
  const location = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  interface UrlItem {
    name: string;
    path: string;
  }

  const url: UrlItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={dropDownRef}
      className="px-6 lg:px-[120px] md:px-10 md:h-[104px]  h-14 flex items-center flex-row justify-between gap-3 w-full"
    >
      <h1 className="md:text-[36px] text-[16px] md:leading-[45px] leading-6 font-semibold font-quicksand">
        LOGO
      </h1>

      {/* Hamburger Icon for Mobile */}
      <div></div>

      <img
        src={hambugger}
        alt="hambugger"
        className={`md:hidden  ${menuOpen ? "hidden" : "block"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <img
        src={cancelWithCircle}
        alt="hambugger"
        className={`md:hidden  ${menuOpen ? "block" : "hidden"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-4 text-[20px] leading-[32px] font-medium text-[#3C3C3C] ">
        {url.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`cursor-pointer hover:text-[#008080] hover:underline hover:underline-offset-8 hover:decoration-1 ${location.toLocaleLowerCase().slice(1) === item.name.toLocaleLowerCase() ? "underline underline-offset-8 decoration-1 text-[#008080]" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation (Toggled by Hamburger) */}
      <div
        className={`absolute z-10 top-14 left-0 right-0 border-b border shadow-custom1 bg-white h-screen w-full shadow-md  md:hidden transition-all duration-500 ease-in-out transform px-6 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-20px] opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {url.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`cursor-pointer py-4 text-[14px] leading-5 text-[#3C3C3C] hover:text-[#008080] h-12  ${
                location.toLocaleLowerCase().slice(1) ===
                item.name.toLocaleLowerCase()
                  ? "text-[#008080]"
                  : "text-[#3C3C3C]"
              } border-t border-[#98A2B3] px-6 ${index + 1 === url.length ? "border-b" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-center gap-4 mt-[284px]">
          <Link to={"/role-selection"} className="w-full">
            <button className="w-full h-14 px-4 bg-[#008080] text-white text-[15px] leading-[24px] font-semibold rounded-lg hover:bg-[#006666] transition-colors">
              Login / SignUp
            </button>
          </Link>
          <Link to={"/auth/handyman-signup"} className="w-full">
            <button className="w-full h-14 px-4 border-[1.5px] border-[#008080] rounded-lg text-[#008080] text-[15px] leading-[24px] font-semibold">
              Become a Handyman
            </button>
          </Link>
        </div>
      </div>

      <div className="items-center hidden gap-6 md:flex">
        <NavLink to={"/role-selection"}>
          <button className="lg:w-[165px] w-fit  h-14 px-4 bg-[#008080] text-white md:text-[18px] text-[12px] leading-[24px] font-semibold rounded-lg hover:bg-[#006666] transition-colors">
            Login / SignUp
          </button>
        </NavLink>

        <Link to={"/auth/handyman-signup"}>
          <button className="lg:w-[217px]  w-fit h-14 px-4 border-[1.5px] border-[#008080] rounded-lg text-[#008080] md:text-[18px] text-[12px] md:leading-[24px] font-semibold">
            Become a Handyman
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
