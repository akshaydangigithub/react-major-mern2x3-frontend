import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Card from "../components/Card";
import { RiHandbagLine } from "react-icons/ri";
import Footer from "../components/Footer";
import axios from "../utils/axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/admin/product/read/all");
      // console.log(res);

      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNavigateToProduct = (product) => {
    navigate(`/details/${product._id}`);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-20 w-full">
        {/* slider */}

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-fit"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // onSlideChange={(slide) => console.log("slide change", slide)}
        >
          <SwiperSlide>
            <div
              className="w-full h-[30rem] flex flex-col justify-center px-32"
              style={{
                backgroundImage:
                  "url('https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/banner-bg-1.jpg')",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-3xl font-semibold">
                Living Room <br /> Furnishing Light - $75.00
              </h1>
              <Link
                className="mt-4 w-fit hover:text-red-600 transition-all duration-200"
                to="#"
              >
                shop now
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-[30rem] flex flex-col justify-center px-32"
              style={{
                backgroundImage:
                  "url('https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/banner-bg-2.jpg')",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-3xl text-white font-semibold">
                Living Room <br /> Furnishing Light - $75.00
              </h1>
              <Link
                className="mt-4 w-fit text-white hover:text-red-600 transition-all duration-200"
                to="#"
              >
                shop now
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-[30rem] flex flex-col justify-center px-32"
              style={{
                backgroundImage:
                  "url('https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/banner-bg-3.jpg')",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-3xl font-semibold">
                Living Room <br /> Furnishing Light - $75.00
              </h1>
              <Link
                className="mt-4 w-fit hover:text-red-600 transition-all duration-200"
                to="#"
              >
                shop now
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Categories */}
        <div className=" mt-10">
          <div className="inline-block me-5 border py-2 px-5 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
            All
          </div>
          <div className="inline-block mx-5 border py-2 px-5 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
            LIGHTS
          </div>
          <div className="inline-block mx-5 border py-2 px-5 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
            FURNITURE
          </div>
          <div className="inline-block mx-5 border py-2 px-5 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
            DECONRATION
          </div>
          <div className="inline-block mx-5 border py-2 px-5 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
            OUTDOOR
          </div>

          {/* card */}
          <div className="grid grid-cols-4 py-10 gap-6">
            {products.map((p, i) => (
              <div
                onClick={() => handleNavigateToProduct(p)}
                key={i}
                className="w-full overflow-hidden group h-[25rem] relative"
              >
                <img
                  className="group-hover:invisible visible transition-all duration-200 cursor-pointer h-72 w-full object-cover"
                  src={p?.images[0]?.url}
                  alt=""
                />
                <img
                  className="absolute top-0 group-hover:scale-100 scale-0 transition-all duration-200  cursor-pointer left-0 h-72 w-full object-cover"
                  src={p?.images[1]?.url}
                  alt=""
                />

                <div className="py-5">
                  <div className="flex justify-between gap-10">
                    <h1 className="leading-none font-semibold text-gray-700">
                      {p?.name}
                    </h1>
                    <h1 className="leading-none">{p?.price}</h1>
                  </div>
                  <div className="mt-2">
                    <h1 className="font-medium text-gray-500 scale-100 group-hover:hidden">
                      {p?.category}
                    </h1>
                    <button className="scale-0 group-hover:scale-100 text-gray-500 flex items-center gap-3 border py-2 px-4 hover:bg-black hover:text-white transition-all duration-200">
                      <RiHandbagLine className="text-2xl" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="mb-10" />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
