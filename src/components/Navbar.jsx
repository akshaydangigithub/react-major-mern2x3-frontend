import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiHandbagLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { LuCheckSquare } from "react-icons/lu";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const sliderRef = useRef(null);
  const cartRef = useRef(null);

  //  when user click outside the cart slider, it will close
  window.addEventListener("click", (e) => {
    if (
      sliderRef.current &&
      !sliderRef.current.contains(e.target) &&
      !cartRef.current.contains(e.target)
    ) {
      setShowCart(false);
    }
  });

  return (
    <nav className="flex items-center justify-between py-4 px-20">
      <div className="flex items-center gap-16">
        <h1 className="text-xl font-bold">Seese</h1>
        <div className="flex gap-16">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div
          ref={cartRef}
          onClick={() => setShowCart(true)}
          className="relative cursor-pointer"
        >
          <RiHandbagLine className="text-xl" />
          <div className="h-5 w-5 text-white flex items-center justify-center bg-black absolute rounded-full -top-2 -right-2">
            0
          </div>
        </div>
        <FaRegUser className="text-xl cursor-pointer" />
      </div>

      {/* slider of cart */}
      <div
        ref={sliderRef}
        className={`h-screen z-30 transition-all duration-300 w-96 bg-white shadow-xl absolute top-0 right-0 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="bg-gray-100 p-5 w-full">Shopping Cart</div>
        <div className="flex relative items-center gap-10 mt-5 px-5">
          <img
            height={70}
            width={70}
            src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-1-500x570.jpg"
            alt=""
          />
          <div>
            <h1 className="font-semibold hover:text-red-600 transition-all duration-200 cursor-pointer">
              Bottle - Wood Cork
            </h1>
            <p>1 x $170.00</p>
          </div>

          <span className="absolute top-0 right-8 cursor-pointer">
            <IoIosClose className="text-2xl" />
          </span>
        </div>
        <hr className="mt-5" />
        <div className="flex relative items-center gap-10 mt-5 px-5">
          <img
            height={70}
            width={70}
            src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-6-500x570.jpg"
            alt=""
          />
          <div>
            <h1 className="font-semibold hover:text-red-600 transition-all duration-200 cursor-pointer">
              Woolen - Coffee Mug
            </h1>
            <p>1 x $170.00</p>
          </div>

          <span className="absolute top-0 right-8 cursor-pointer">
            <IoIosClose className="text-2xl" />
          </span>
        </div>

        {/* Bottom */}
        <div className="absolute w-full bottom-0 left-0">
          <div className="w-full mb-7 px-5 flex items-center justify-between">
            <h1 className="font-semibold">Subtotal :</h1>
            <h1>$235.00</h1>
          </div>
          <div className="flex items-center gap-1 justify-between">
            <button className="flex items-center gap-3 border w-1/2 py-4 transition-all duration-300 hover:bg-black hover:text-white hover:border-0 justify-center">
              <RiHandbagLine className="text-xl" /> VIEW CART
            </button>
            <button className="flex items-center gap-3 border w-1/2 py-4 transition-all duration-300 hover:bg-black hover:text-white hover:border-0 justify-center">
              <LuCheckSquare className="text-xl" /> CHEKCOUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
