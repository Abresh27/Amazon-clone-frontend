import React from "react";
import { Carousel } from "react-bootstrap";

const ImageSlideshow = () => {
  const imageStyle = {
    width: "100%",
    height: "100vh", // Adjust the height as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Carousel className="banner-img">
      {/* Slide 1 */}
      <Carousel.Item>
        <div
          style={{
            ...imageStyle,
            backgroundImage:
              'url("https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j8damPo5L._SX3000_.jpg")',
          }}
        />
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div
          style={{
            ...imageStyle,
            backgroundImage:
              'url("https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j8damPo5L._SX3000_.jpg")',
          }}
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div
          style={{
            ...imageStyle,
            backgroundImage:
              'url("https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717RUPA1bDL._SX3000_.jpg")',
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlideshow;
