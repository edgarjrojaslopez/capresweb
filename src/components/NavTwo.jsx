import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/capres.jpg";
const NavTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-azul-capres-500">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex relative items-center justify-between">
          <ul className="w-20 h-auto">
            <li>
              <a href="/">
                <img src={Logo} alt="Capres logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
