import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosStarOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/ContextApi";

const Details = () => {
  const [image, setImage] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [stateData, setStateData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const { state } = useLocation();

  useEffect(() => {
    setStateData(state);
  }, [state]);

  const { cartData, setCartData } = useContext(DataContext);

  console.log(cartData);

  const addToCart = () => {
    const data = {
      img: stateData.img1,
      name: stateData.name,
      price: stateData.price,
      quantity: quantity ? Number(quantity) : 1,
    };

    setCartData([...cartData, data]);
  };

  return (
    <>
      <Navbar />
      {/* landing */}
      <div className="h-screen pt-20 w-full bg-[#EEEEEE] grid grid-cols-2">
        <div className="relative">
          <img
            className={`w-full h-[80%] scale-100 object-cover transition-all duration-200`}
            src={image === 1 ? stateData.img1 : stateData.img2}
            alt=""
          />
          <div className="w-20 h-32 bg-red-400 absolute top-0 right-7">
            <img
              onClick={() => setImage(1)}
              className="cursor-pointer"
              src={stateData.img1}
              alt=""
            />
            <img
              onClick={() => setImage(2)}
              className="cursor-pointer"
              src={stateData.img2}
              alt=""
            />
          </div>
        </div>
        <div className="h-full w-full flex flex-col">
          <h1 className="text-3xl font-bold">{stateData.name}</h1>
          <div className="mt-4 flex items-center gap-1">
            <IoIosStarOutline className="text-xl" />
            <IoIosStarOutline className="text-xl" />
            <IoIosStarOutline className="text-xl" />
            <IoIosStarOutline className="text-xl" />
            <IoIosStarOutline className="text-xl text-gray-400" />
            <p className="font-medium ms-5 hover:text-red-600 transition-all duration-200 cursor-pointer">
              (3 customer reviews)
            </p>
          </div>
          <h2 className="text-2xl font-bold mt-5">{stateData.price}</h2>
          <p className="mt-5 w-3/4">
            Microwave safe coffee mug with graffiti & art ceramic theme.Use in
            Microwave only for reheating purposes and these mugs will make
            Monday mornings easier to handle.
          </p>
          <p className="mt-5">
            <b>Category:</b> {stateData.category}
          </p>
          <p className="mt-3">
            <b>SKU:</b> 603317-01
          </p>
          <p className="mt-3">
            <b>Tags:</b> Classic, Essentials
          </p>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            type="text"
            placeholder="1"
            className="w-[50px] border-2 outline-none py-2 px-2 mt-10 border-black text-black bg-transparent"
          />
          <button
            onClick={addToCart}
            className="py-4 px-16 mt-10 transition-all divide-gray-200 bg-black text-white border w-fit hover:bg-black/70"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* description */}
      <div className="w-full flex items-center justify-center py-[1px] gap-16 mt-10 border-b">
        <div>
          <p
            onClick={() => changeActiveTab("description")}
            className={`text-sm cursor-pointer relative py-3 font-medium ${
              activeTab === "description" &&
              "after:h-[2px] after:w-full after:bg-black after:absolute after:top-full after:left-0"
            }`}
          >
            DESCRIPTION
          </p>
        </div>
        <div>
          <p
            onClick={() => changeActiveTab("additionalInformation")}
            className={`text-sm cursor-pointer relative py-3 font-medium ${
              activeTab === "additionalInformation" &&
              "after:h-[2px] after:w-full after:bg-black after:absolute after:top-full after:left-0"
            }`}
          >
            ADDITIONAL INFORMATION
          </p>
        </div>
      </div>

      {activeTab === "description" ? (
        <>
          <p className="mt-16 w-[70%] m-auto text-gray-500">
            The best part of waking up will be your favorite drink in an
            artistic and colorful mug from KESS House! These high
            quality,ceramic mugs are microwave and dishwasher safe, with vivid
            artwork that won’t fade.Great for all drinks, these mugs will make
            Monday mornings easier to handle.
          </p>
          <p className="mt-10 w-[70%] m-auto text-gray-500">
            Special Mug for a special drink – Green Tea – exclusively designed,
            Glass with amazing designs to increase the pleasure of having green
            tea. A healthy and safe companion for your healthy lifestyle. Lovely
            glass mug with message “Drink Tea, Work, Eat, Read Sleep, Repeat”.
            Use in Microwave only for reheating purposes.
          </p>
        </>
      ) : (
        <>
          <div className="mt-16 w-[60%] m-auto border-b pb-5">
            <p>
              <span className="text-sm">Weight</span>
              <span className="ms-52 font-medium text-gray-500"> 1.73 kg</span>
            </p>
          </div>
          <div className="mt-5 w-[60%] m-auto border-b pb-5">
            <p>
              <span className="text-sm">Dimensions</span>
              <span className="ms-52 font-medium text-gray-500">
                {" "}
                100 × 37 × 100 cm
              </span>
            </p>
          </div>
          <div className="mt-5 w-[60%] m-auto border-b pb-5">
            <p>
              <span className="text-sm">Size</span>
              <span className="ms-52 font-medium text-gray-500">
                {" "}
                One Size, XL, L, M, S
              </span>
            </p>
          </div>
          <div className="mt-5 w-[60%] m-auto">
            <p>
              <span className="text-sm">Color</span>
              <span className="ms-52 font-medium text-gray-500">
                Orange, White
              </span>
            </p>
          </div>
        </>
      )}

      <div className="mt-16 px-20">
        <hr className="mb-10" />
        <Footer />
      </div>
    </>
  );
};

export default Details;
