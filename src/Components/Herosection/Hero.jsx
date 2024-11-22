import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const videos = [
    {
      id: 1,
      src: "https://videos.pexels.com/video-files/8447058/8447058-hd_1920_1080_24fps.mp4",
      title: "Amazing Deals on Groceries",
    },
    {
      id: 2,
      src: "https://videos.pexels.com/video-files/4291577/4291577-hd_1920_1080_30fps.mp4",
      title: "Electronics at Best Prices",
    },
    {
      id: 3,
      src: "https://videos.pexels.com/video-files/5889071/5889071-uhd_2560_1440_25fps.mp4",
      title: "Fashion for Everyone",
    },
  ];

  // Slick Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative bg-gradient-to-r from-white via-gray-300 to-yellow-500 p-6 lg:p-12">
      <div className="container mx-auto flex flex-col lg:flex-row  gap-12">
        {/* Left side content - Shopping Offer */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-blue-800">
            Don't Miss Out on Our Special Offers!
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Get up to 50% off on all categories. Shop now and enjoy exclusive deals across fashion, electronics, and groceries!
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-300 text-white rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right side video carousel */}
        <div className="lg:w-1/2 w-full">
          <Slider {...settings}>
            {videos.map((video) => (
              <div key={video.id} className="relative overflow-hidden rounded-md shadow-lg">
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                {/* Title */}
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  {video.title}
                </div>
              </div>
            ))}
          </Slider>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
