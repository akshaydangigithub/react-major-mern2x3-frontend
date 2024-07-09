import React from "react";
import Layout from "../components/Layout";

const Homepage = () => {
  const btn = {
    btnText: "Go to About",
    link: "/about",
  };
  return (
    <Layout
      head="homepage"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil harum nulla, cumque ipsum pariatur veritatis quia ratione fuga asperiores ducimus consequatur quae ex autem libero voluptas voluptatem corrupti molestias sapiente eius."
      img="https://images.unsplash.com/photo-1625662171891-9a3348f961f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      btn={btn}
    />
  );
};

export default Homepage;
