import { useContext } from "react";
import { CartContext } from "../Layout";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Carousel = ({ data }) => {
  const { state } = useContext(CartContext);
  return (
    <Slider {...settings}>
      {data &&
        data.map((banner) => {
          const { isActive, bannerImageUrl, bannerImageAlt } = banner;
          if (isActive) {
            return (
              <div>
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
  );
};
export default Carousel;
