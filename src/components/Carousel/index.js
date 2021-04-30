import { useContext, useRef } from "react";
import { CartContext } from "../Layout";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const NextSlide = ({ slide }) => (
  <div className="next-button" onClick={() => slide.current.slickNext()}>
    Next
  </div>
);
const PrevSlide = ({ slide }) => (
  <div className="prev-button" onClick={() => slide.current.slickPrev()}>
    Prev
  </div>
);
const Carousel = ({ data }) => {
  const { state } = useContext(CartContext);
  const sliderRef = useRef(null);

  return (
    <div className="carousel-parent">
      <NextSlide slide={sliderRef} />
      <PrevSlide slide={sliderRef} />
      <Slider {...settings} ref={sliderRef}>
        {data &&
          data.map((banner) => {
            const { isActive, bannerImageUrl, bannerImageAlt } = banner;
            if (isActive) {
              return (
                <div key={banner.id}>
                  <img
                    className="offer-image"
                    src={state.images[bannerImageUrl]}
                    alt={state.images[bannerImageAlt]}
                  />
                </div>
              );
            }
            return null;
          })}
      </Slider>
    </div>
  );
};
export default Carousel;
