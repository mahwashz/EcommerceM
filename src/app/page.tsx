import React from "react";
import Navbar from "../app/components/Navbar";
import Progressor from "./components/Progressor";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import Burger from "./components/burger";
import Menuitem from "./components/Menuitem";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Burger />
      <Banner />
      <ProductList />
      <Menuitem />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
