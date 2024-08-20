"use client";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col bg-gradient-to-b from-red-300 to-yellow-300 justify-between items-center gap-16">
        <div className="flex flex-col  max-w-[600px] gap-10 px-16">
          <h1 className="font-bold text-4xl">LOREM IPSUM</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            est vitae dolor rhoncus tristique. Maecenas metus quam, rhoncus
            euismod lorem in, sollicitudin viverra eros. Donec dictum luctus
            quam ut tristique. Curabitur nec faucibus purus. Quisque congue sem
            nec justo mollis, in tincidunt erat pretium. Sed pulvinar, massa ac
            porta viverra
          </p>
          <button className="bg-red-500 py-2 px-8 text-white font-semibold text-lg">
            Click Me
          </button>
        </div>
        <img src="/image/one.jpg" alt="" className="md:w-1/2" />
      </div>
      <div className="flex md:flex-row flex-col bg-gradient-to-b from-red-300 to-yellow-300 justify-between items-center md:gap-16 gap-6 p-16">
        <div className="flex md:flex-row flex-col  md:px-16 gap-4 ">
          <div className="flex flex-col gap-4 md:h-[500px]"> 
            <img
              src="/image/two.jpg"
              alt=""
              className="md:h-[250px] md:w-[300px] "
            />
            <img
              src="/image/three.jpg"
              alt=""
              className="md:h-[250px] md:w-[300px]"
            />
          </div>
          <div className="md:h-[516px] ">
            <img
              src="/image/four.jpg"
              alt=""
              className="md:h-[516px] md:w-[300px] "
            />
          </div>
        </div>
        <div className="flex flex-col bg-red-500 p-16 gap-6">
          <h1 className="font-bold text-2xl">LOREM IPSUM</h1>
          <h1 className="font-bold text-4xl">LOREM IPSUM SET ADEMIR</h1>
          <div className="flex gap-4">
            <p>Click</p>
            <img src="/image/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
