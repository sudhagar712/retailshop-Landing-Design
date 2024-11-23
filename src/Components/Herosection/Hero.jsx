import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {

 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,   
    });
  }, []);

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


const images = [
    "https://images.meesho.com/images/products/270975442/dhrpz_512.webp", // Image 1
    "https://www.foreverkidz.in/cdn/shop/files/SparklingStardustDressWithTrail_3.webp?crop=center&height=4386&v=1682749689&width=3133", // Image 2
    "https://5.imimg.com/data5/SELLER/Default/2023/11/359002497/SH/TU/UI/132511052/kids-clothes.jpg", // Image 3
    "https://baccabucci.com/cdn/shop/products/MG_5242.jpg?v=1633514122", // Image 4
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/iphone-16-in-10-minutes-205245733-16x9_2.jpg?VersionId=K4ta74rPSz1xfAj5HLxe0Kw8OqMwlZH7&size=690:388", // Image 5
  ];




  return (
    <>
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-yellow-500">
      <div className="pt-7 p-5 text-center">
        <span data-aos="zoom-in-up" className="text-3xl   mx-3 font-extrabold text-white ">
              Trending <span className="text-yellow-500">Collection</span>
            </span>
      </div>

     <div className="marquee-container mt-5">
      <div className="marquee">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} className="marquee-image" />
        ))}
        {/* Duplicate images for smooth loop */}
        {images.map((img, index) => (
          <img key={index + images.length} src={img} alt={`Image Duplicate ${index + 1}`} className="marquee-image" />
        ))}
      </div>
    </div>
      
     <div className="pt-7 p-5 text-center">
        <span data-aos="zoom-in-up" className="text-3xl   mx-3 font-extrabold text-white ">
              Happy <span className="text-yellow-500">Shopping</span>
            </span>
      </div>
       <video
          src="https://videos.pexels.com/video-files/5889074/5889074-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          className="w-full h-70 sm:h-72 lg:h-[600px] shadow  lg:object-fit"
        />
    </div>
     <section className="relative bg-gradient-to-r from-gray-200 via-gray-300 to-yellow-500 p-6 lg:p-12">
      <div className="container mx-auto flex flex-col items-center lg:flex-row  gap-12">
        {/* Left side content - Shopping Offer */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-blue-800">
            Don't Miss Out on Our Special Offers!
          </h1>
          <p className="text-xl text-gray-600 mt-5">
           <em> Get up to 50% off on all categories. Shop now and enjoy exclusive deals across fashion, electronics, and groceries!</em>
          </p>
          <button data-aos="fade-right" className="mt-12 px-8 py-3 bg-yellow-300 font-extrabold text-black shadow-md hover:border-2 hover:border-white transition duration-200">
            Shop Now
          </button>
        </div>

        {/* Right side video carousel */}
        <div className="lg:w-1/2 w-full">
        <img src="https://i.pinimg.com/736x/5a/65/61/5a6561119db533beb718347ff9c8b81d.jpg" data-aos="fade-left" />
          
          
        </div>
      </div>
    </section>

    <div className="bg-gradient-to-r from-white via-gray-300 to-yellow-500 px-3 sm:px-6 lg:px-12 py-4">
  <Slider {...settings}>
    {videos.map((video) => (
      <div
        key={video.id}
        className="relative overflow-hidden rounded-md shadow-lg bg-yellow-300"
      >
        <video
          src={video.src}
          autoPlay
          loop
          muted
          className="w-full h-70 sm:h-72 lg:h-[500px] shadow p-5 lg:object-fit"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        {/* Title */}
        <div className="absolute bottom-4 left-4 text-white font-semibold text-base sm:text-lg lg:text-xl p-6">
          {video.title}
        </div>
      </div>
    ))}
  </Slider>
</div>

    </>
   
  );
};

export default Hero;
