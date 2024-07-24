import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Card from "../components/Card";
import Footer from "../components/Footer";

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
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-5.jpg"
              name="Wooden Container Bowl"
              price="$190.00"
              category="Essentials, Furniture"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-1.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2.jpg"
              name="Bottle – Wood Cork"
              price="$120.00"
              category="Interior"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-7.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-4.jpg"
              name="Sweeper"
              price="$39.99"
              category="Canvas Basket, Essentials"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-3.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-4.jpg"
              name="Handcrafted Mug"
              price="$119.10"
              category="Furniture"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-5.jpg"
              name="Wooden Container Bowl"
              price="$190.00"
              category="Essentials, Furniture"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-1.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2.jpg"
              name="Bottle – Wood Cork"
              price="$120.00"
              category="Interior"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-7.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-4.jpg"
              name="Sweeper"
              price="$39.99"
              category="Canvas Basket, Essentials"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-3.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-4.jpg"
              name="Handcrafted Mug"
              price="$119.10"
              category="Furniture"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-5.jpg"
              name="Wooden Container Bowl"
              price="$190.00"
              category="Essentials, Furniture"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-1.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2.jpg"
              name="Bottle – Wood Cork"
              price="$120.00"
              category="Interior"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-7.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-4.jpg"
              name="Sweeper"
              price="$39.99"
              category="Canvas Basket, Essentials"
            />
            <Card
              img1="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-3.jpg"
              img2="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-4.jpg"
              name="Handcrafted Mug"
              price="$119.10"
              category="Furniture"
            />
          </div>
        </div>
        <hr className="mb-10" />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
