import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosStarOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/ContextApi";
import axios from "../utils/axios";

const Details = () => {
  const [image, setImage] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [stateData, setStateData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  const { state } = useLocation();

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/admin/product/read/${state?.productId}`);

      if (res.data.success) {
        setProduct(res.data.data);
        setImage(res.data.data.images[0].url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      {/* landing */}
      <div className="h-auto py-20 w-full bg-[#EEEEEE] grid grid-cols-2">
        <div className="relative flex items-center justify-center">
          <img
            className={`w-[65%] h-[20rem] scale-100 object-cover transition-all duration-200`}
            src={image}
            alt=""
          />
          <div className="w-20 h-32 absolute top-0 right-7">
            {product.images &&
              product.images.map((img, i) => (
                <img
                  onClick={() => setImage(img.url)}
                  key={i}
                  className={`cursor-pointer ${
                    image === img.url && "border-2 p-1 border-black"
                  } ${i !== 0 && "mt-5"}`}
                  src={img.url}
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="h-full w-full flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
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
          <h2 className="text-2xl font-bold mt-5"></h2>
          <p className="mt-5 w-3/4">{product.about}</p>
          <p className="mt-5">
            <b>Category:</b> {product.category}
          </p>
          <p className="mt-3">
            <b>SKU:</b> {product.sku}
          </p>
          <p className="mt-3">
            <b>Tags:</b>{" "}
            {product.tags &&
              product.tags.map((tag, i) => (
                <span key={i} className="ms-2">
                  {tag},
                </span>
              ))}
          </p>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            type="text"
            placeholder="1"
            className="w-[50px] border-2 outline-none py-2 px-2 mt-10 border-black text-black bg-transparent"
          />
          <button className="py-4 px-16 mt-10 transition-all divide-gray-200 bg-black text-white border w-fit hover:bg-black/70">
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
            {product.description}
          </p>
        </>
      ) : (
        <>
          <div className="mt-16 w-[60%] m-auto border-b pb-5">
            <p className="flex">
              <div className="text-sm w-52">Weight</div>
              <div className="font-medium text-gray-500">
                {product.weight} kg
              </div>
            </p>
          </div>
          <div className="mt-5 w-[60%] m-auto border-b pb-5">
            <p className="flex">
              <div className="text-sm w-52">Dimensions</div>
              <div className="font-medium text-gray-500">
                {product.dimensions}
              </div>
            </p>
          </div>
          <div className="mt-5 w-[60%] m-auto border-b pb-5">
            <p className="flex">
              <div className="text-sm w-52">Size</div>
              <div className="font-medium text-gray-500">{product.size}</div>
            </p>
          </div>
          <div className="mt-5 w-[60%] m-auto">
            <p className="flex">
              <div className="text-sm w-52">Color</div>
              <div className="font-medium text-gray-500">
                {product.colors &&
                  product.colors.map((c, i) => (
                    <span key={i} className={`${i !== 0 && "ms-3"}`}>
                      {c},
                    </span>
                  ))}
              </div>
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
