import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeimage from "../assests/images/before.png";
import afterimage from "../assests/images/after.png";
import shade from "../assests/images/shade.png";

const Virtual = () => {
  return (
    <div className="container  bg-gradient-to-r from-yellow-500 via-gray-300 to-white  shadow-xl">
      <div className="grid md:grid-cols-2 gap-2 mt-5">
        <div className="md:grid-cols-6  p-10">
          <h1 className=" font-extrabold sm:text-5xl text-3xl ">VIRTUAL TRY-ON</h1>
          <h3 className="text-sm  mt-9">NEVER BUY THE WRONG SHADE AGAIN</h3>
          <h1 className="font-extrabold text-xl mt-10  ">Try Now!</h1>

          <img src={shade} className=" " />
        </div>
        <div className="md:grid-cols-6 ">
          <ReactCompareImage leftImage={beforeimage} rightImage={afterimage} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
