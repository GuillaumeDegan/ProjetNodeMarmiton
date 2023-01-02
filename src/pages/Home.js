import React from "react";
import Footer from "../components/Footer";
import BandeauTopAccueil from "../components/Home/BandeauTopAccueil";
import NewsletterComponent from "../components/Home/NewsletterComponent";
import SelectionRecettes from "../components/Home/SelectionRecettes";
import SitePresentation from "../components/Home/SitePresentation";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      {/* <h1>Home</h1> */}
      <BandeauTopAccueil />
      <SitePresentation />
      <SelectionRecettes />
      <NewsletterComponent />
      <Footer />
    </div>
  );
};

export default Home;
