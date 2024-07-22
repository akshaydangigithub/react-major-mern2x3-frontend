import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold text-2xl mt-10">AboutPage</h1>
      <p className="text-center w-[70%] mx-auto mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
        perferendis voluptas quod possimus soluta animi, voluptates modi cum
        temporibus in magnam iusto velit. Odit laudantium, praesentium delectus
        facilis distinctio saepe libero?
      </p>
    </div>
  );
};

export default About;
