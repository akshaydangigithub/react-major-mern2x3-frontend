import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHandbagLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { LuCheckSquare } from "react-icons/lu";
import { DataContext } from "../context/ContextApi";
import { AdminAuthContext } from "../context/AdminAuth";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const { authAdmin } = useContext(AdminAuthContext);

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

  const { cartData, setCartData } = useContext(DataContext);

  const removeFromCart = (index) => {
    const filterData = cartData.filter((d, i) => i !== index);

    setCartData(filterData);
  };

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
            {cartData.length}
          </div>
        </div>
        {authAdmin.isAuth ? (
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="bg-black text-white py-1 px-3 rounded-lg"
          >
            Dashboard
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white py-1 px-3 rounded-lg"
          >
            Login
          </button>
        )}
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
        {cartData.length > 0 ? (
          cartData.map((cart, index) => (
            <div
              key={index}
              className="flex relative items-center gap-10 mt-5 px-5"
            >
              <img height={70} width={70} src={cart.img} alt="" />
              <div>
                <h1 className="font-semibold hover:text-red-600 transition-all duration-200 cursor-pointer">
                  {cart.name}
                </h1>
                <p>
                  {cart.quantity} x {cart.price}
                </p>
              </div>

              <span
                onClick={() => removeFromCart(index)}
                className="absolute top-0 right-8 cursor-pointer"
              >
                <IoIosClose className="text-2xl" />
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-[80%]">
            <h1>Cart is empty</h1>
          </div>
        )}

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
