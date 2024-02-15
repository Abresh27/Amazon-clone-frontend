import React from "react";
import { Carousel } from "react-bootstrap";

const BannerImg = () => {
  return (
    <Carousel className="banner-img">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j8damPo5L._SX3000_.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717RUPA1bDL._SX3000_.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Slide 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt="Slide 5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="Slide 6"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerImg;
