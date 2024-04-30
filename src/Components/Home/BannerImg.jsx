import React from "react";
import { Carousel } from "react-bootstrap";

const BannerImg = () => {
  return (
    <Carousel className="banner-img">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="../../../public/Images/61P7hqIHrdL._SX3000_1.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="../../../public/Images/61lwJy4B8PL._SX3000_2.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="../../../public/Images/71Ie3JXGfVL._SX3000_3.jpg"
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="../../../public/Images/61CiqVTRBEL._SX3000_4.jpg"
          alt="Slide 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="../../../public/Images/61zAjw4bqPL._SX3000_5.jpg"
          alt="Slide 5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="../../../public/Images/81KkrQWEHIL._SX3000_6.jpg"
          alt="Slide 6"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerImg;
