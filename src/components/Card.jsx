import React from "react";
import { RiHandbagLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Card = ({ img1, img2, name, price, category }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate("/details", {
          state: {
            img1,
            img2,
            name,
            price,
            category,
          },
        })
      }
      className="w-full overflow-hidden group h-[25rem] relative"
    >
      <img
        className="group-hover:invisible visible transition-all duration-200 cursor-pointer h-72 w-full object-cover"
        src={img1}
        alt=""
      />
      <img
        className="absolute top-0 group-hover:scale-100 scale-0 transition-all duration-200  cursor-pointer left-0 h-72 w-full object-cover"
        src={img2}
        alt=""
      />

      <div className="py-5">
        <div className="flex justify-between gap-10">
          <h1 className="leading-none font-semibold text-gray-700">{name}</h1>
          <h1 className="leading-none">{price}</h1>
        </div>
        <div className="mt-2">
          <h1 className="font-medium text-gray-500 scale-100 group-hover:hidden">
            {category}
          </h1>
          <button className="scale-0 group-hover:scale-100 text-gray-500 flex items-center gap-3 border py-2 px-4 hover:bg-black hover:text-white transition-all duration-200">
            <RiHandbagLine className="text-2xl" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
