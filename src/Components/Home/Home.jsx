import React from "react";
import BannerImg from "../Home/BannerImg";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <>
      <BannerImg />
      <section className="product-cards">
        <div className="products-container row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="00001"
              title="HP 24mh FHD Computer Monitor"
              description="HP 24mh FHD Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for..."
              price={152}
              rating={5}
              imgsrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91fAU6mxFsL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
              imgwidth={200}
              imgheight={200}
              hidedescription
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="00002"
              title="SteelSeries Apex 3 RGB Gaming Keyboard"
              description="SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)"
              price={30.6}
              rating={4}
              imgsrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61is2ZwnHEL._AC_SX466_.jpg"
              imgwidth={200}
              imgheight={200}
              hidedescription
            />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <Product
              id="00003"
              title="ESR for iPad 9th Generation case"
              description="ESR for iPad 9th Generation case(2021)/iPad 8th Generation case(2020)/iPad 7th Generation case(2019), Ascend Series case for iPad 10.2 Inch"
              price={10.79}
              rating={5}
              imgsrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717iPa62FWL._AC_SX679_.jpg"
              imgwidth={200}
              imgheight={200}
              hidedescription
            />
          </div>
        </div>
        <div className="products-container row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="00004"
              title="YAMOBO Gaming Chair"
              description="YAMOBO Gaming Chair with Footrest, Ergonomic Gaming Computer Chair with Massage Lumbar Support, High Back PC Video Game Chair, Green"
              price={139.99}
              rating={5}
              imgsrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61SVWavdDNL._AC_SX679_.jpg"
              imgwidth={200}
              imgheight={200}
              hidedescription
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="00005"
              title="Friends TV Show Mug"
              description=" Friends TV Show Mug Stencil Accessories Central Perk Cappuccino Cup"
              price={20.04}
              rating={6}
              imgsrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81bOm1idcWL._AC_SX679_.jpg"
              imgwidth={200}
              imgheight={200}
              hidedescription
            />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <Product
              id="00006"
              title="VTech Touch and Learn Activity Desk"
              description=" VTech Touch and Learn Activity Desk Deluxe (Frustration Free Packaging)"
              price={47.13}
              rating={4}
              imgsrc="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Sjbk7QLNL._AC_SX679_.jpg"
              imgwidth={200}
              imgheight={200}
              hidedescription
            />
          </div>
        </div>
      </section>
    </>
  );
}
