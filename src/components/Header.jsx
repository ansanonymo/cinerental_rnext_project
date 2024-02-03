import { useContext, useState } from "react";
import { MovieContext, ThemeContext } from "../context";
import MoonLogo from "./../assets/icons/moon.svg";
import SunIcon from "./../assets/icons/sun.svg";
import Logo from "./../assets/others/logo.svg";
import RingLogo from "./../assets/others/ring.svg";
import ShippingCartLogo from "./../assets/others/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartState } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={RingLogo} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((dm) => !dm)}
            >
              <img
                src={darkMode ? SunIcon : MoonLogo}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              <img src={ShippingCartLogo} width="24" height="24" alt="" />
              {cartState.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px] flex justify-center items-center">
                  {cartState.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
