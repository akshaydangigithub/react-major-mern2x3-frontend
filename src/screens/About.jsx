import React from "react";
import Layout from "../components/Layout";

const About = () => {
  const btn = {
    btnText: "Go to Home",
    link: "/",
  };
  return (
    <Layout
      head="AboutPage"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil harum nulla, cumque ipsum pariatur veritatis quia ratione fuga asperiores ducimus consequatur quae ex autem libero voluptas voluptatem corrupti molestias sapiente eius."
      img="https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
      btn={btn}
    />
  );
};

export default About;
