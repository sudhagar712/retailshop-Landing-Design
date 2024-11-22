import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://www.coloressence.com/cdn/shop/files/The-Mini-Makeup-Kit.jpg?v=1722496393",
      alt: "Helmet Offer",
    },
    {
      src: "https://images-static.nykaa.com/media/catalog/product/3/0/3047ea1MARSX00000990M.jpg?tr=w-500",
      alt: "CDIT Offer",
    },
    {
      src: "https://www.justherbs.in/cdn/shop/files/MakeupEssentialsGlamBox_AthiyaKit_1280x.jpg?v=1717485522",
      alt: "Winter Essentials",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/makeup-kit/0/e/j/make-up-kit-include-kajal-primer-cheek-tint-lipstick-foundation-original-imah4jyjqujzjazw.jpeg?q=90&crop=false",
      alt: "Mumbai Offer",
    },
    {
      src: "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/381556/swiss-beauty-easy-to-do-makeup-kit-with-denim-pouch_1_display_1720070794_8555f2f6.jpg",
      alt: "Mumbai Offer",
    },
    {
      src: "https://m.media-amazon.com/images/I/41PMul1oHRL.jpg",
      alt: "Winter Essentials",
    },
  ];

  return (
    <div className="bg-white px-5 py-10 mx-auto max-w-screen-xl">
      <img src="data:image/png;base64,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"
       className="w-[100px]"/>
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              className="object-cover w-full h-56 md:h-72 lg:h-80 rounded-md"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Offer;
