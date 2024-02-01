import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home-row">
          <Product
            id={1241}
            title="Harry Potter and the Sorcerer's Stone (Harry Potter, Book 1) (MinaLima Edition) (1)"
            price={22.79}
            image="https://m.media-amazon.com/images/I/91pI+R+GE7L._SY342_.jpg"
            rating={5}
          />
          <Product
            id={1242}
            title="Certified Refurbished Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal"
            price={39.99}
            image="https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={1243}
            title="Samsung Galaxy S24 Ultra Cell Phone + Storage Upgrade, 512GB AI Smartphone, Pen, US Version, 2024, Titanium Black"
            price={1299.99}
            image="https://m.media-amazon.com/images/I/41AuzibyEAL.AC_SX250.jpg"
            rating={4}
          />
          <Product
            id={1244}
            title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth"
            price={129.95}
            image="https://m.media-amazon.com/images/I/31f3ZZqiSEL._AC_SR400,600_.jpg"
            rating={4}
          />
          <Product
            id={1245}
            title="Fossil Gen 6 44mm Touchscreen Smart Watch for Men with Alexa Built-In, Fitness Tracker"
            price={162.99}
            image="https://m.media-amazon.com/images/I/31sIuTqaXpL._AC_SR400,600_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={1246}
            title="Sony OLED 55 inch BRAVIA XR A75L Series 4K Ultra HD TV: Smart Google TV with Dolby Vision HDR and Exclusive Gaming Features for The Playstation® 5 XR55A75L- 2023 Model,Black"
            price={1198.0}
            image="https://m.media-amazon.com/images/I/81OzWf1SNJL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
