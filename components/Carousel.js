import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1400,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        <div>
          <img
            src="/images/logos/bmw.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5", }}
          />
        </div>
        <div>
          <img
            src="/images/logos/bnb.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
        <div>
          <img
            src="/images/logos/netflix.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
        <div>
          <img
            src="/images/logos/indosiar.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
        <div>
          <img
            src="/images/logos/mini.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
        <div>
          <img
            src="/images/logos/react.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
        <div>
          <img
            src="/images/logos/zoom.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
        <div>
          <img
            src="/images/logos/next.png"
            alt=""
            className="w-28"
            style={{ filter: "grayscale(100%)", opacity: "0.5" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
