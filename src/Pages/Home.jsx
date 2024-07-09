import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Featured from "../Components/Featured/Featured";
import Review from "../Components/Review/Review";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
