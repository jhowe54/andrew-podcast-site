import React, { useState, useEffect, useRef } from "react";

const Carriage = ({ images, imageWidth, imageHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);



  return (
    <div className="flex flex-row p-4  justify-center content-center items-center relative w-full text-black text-lg text-center ">
        <div className="w-[90%] rounded-lg aspect-square border bg bg-white" >
            carriage 
        </div>

    </div>
  );
};

export default Carriage;
