import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    margin: 20,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="about-us">
      <div>
        <img src="../../images/test-1.jpg" alt="" className="test-img" />
        <h3>Erica Lynda</h3>
        <p>I Good experience so far. Support is good.</p>
      </div>
      <div>
        <img src="../../images/test-2.jpg" alt="" className="test-img" />
        <h3>James Bob</h3>
        <p>Great UX design for back-end and front-end.</p>
      </div>
      <div>
        <img src="../../images/test-3.jpg" alt="" className="test-img" />
        <h3>Lance wilford</h3>
        <p>Complete Software and technical support.</p>
      </div>
      <div>
        <img src="../../images/test-1.jpg" alt="" className="test-img" />
        <h3>Tom Jarvis</h3>
        <p>Instant support made things easy.</p>
      </div>
      <div>
        <img src="../../images/test-2.jpg" alt="" className="test-img" />
        <h3>Carol James</h3>
        <p>I Good experience so far.</p>
      </div>
    </Slider>
  );
};

export default Testimonials;
