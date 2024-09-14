import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

const Homepage = () => {
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

        <ProductCards />
        <hr className="mb-10" />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
