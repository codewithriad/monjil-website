import { useRef } from "react";
import { CiCreditCard1, CiHome, CiUser } from "react-icons/ci";
import { FaLayerGroup, FaRegNewspaper } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiInstanceLine, RiMenu4Line } from "react-icons/ri";
import "remixicon/fonts/remixicon.css";
import './Navbar.css';

const Navbar = () => {
  // Dark Light Mode

  const DarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'Dark')
  }
  // Light Mode
  const LightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'Light')
  }

  DarkMode()

  const toggleTheme = () => {
    const theme = document.querySelector('body').getAttribute('data-theme');
    if (theme === 'Dark') {
      LightMode();
    } else {
      DarkMode();
    }
  }

  const Menu = useRef();
  const toggleMenu = () => {
    Menu.current.classList.toggle('show');
  }

  const navItems = (
    <>
      <li>
        <a href="#">
          <CiHome className="text-color"/> Home
        </a>
      </li>
      <li>
        <a href="#">
          <CiUser className="text-color"/> About
        </a>
      </li>
      <li>
        <a href="#">
          <CiCreditCard1 className="text-color"/> Portfolio
        </a>
      </li>
      <li>
        <a href="#">
          <RiInstanceLine className="text-color"/> Services
        </a>
      </li>
      <li>
        <a href="#">
          <FaLayerGroup className="text-color"/> Testimonials
        </a>
      </li>
      <li>
        <a href="#">
          <FaRegNewspaper className="text-color"/> Blogs
        </a>
      </li>
      <li>
        <a href="#">
          <PiPhoneCallLight className="text-color"/> Contact
        </a>
      </li>
    </>
  );
  return (
    <>
      <nav className="fixed h-20 w-full bg-dark-color flex justify-between items-center px-[12%] py-0 z-50 ">
        <div>
          <a className="text-[1.75rem] font-extrabold text-[#ffc94b]" href="/">Monjil</a>
        </div>

        <ul ref={Menu}>

          {navItems}
          
          </ul>

        <div className="flex gap-2">
          <LuSunMoon className="h-12 w-12 p-2 flex items-center justify-center bg-[#ffc94b] cursor-pointer mode-change" onClick={toggleTheme} />
          <RiMenu4Line className="h-12 w-12 p-2 flex items-center justify-center bg-[#ffc94b] cursor-pointer mode-change  xl:hidden" onClick={toggleMenu}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
