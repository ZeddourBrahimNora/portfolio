"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

 const HeroSection = () => {
  return ( 
  <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold" >
            <span className="text-transparent bg-clip-text bg-[#FECECE]">
              Hey, I'm {" "}
            </span>
            <br></br>
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Nora',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web developer',
                  1000,
                  'Mobile developer',
                  1000,
                  'Idk yet',
                  1000
                ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempore! Veniam magnam iure natus quod possimus maxime sit suscipit ratione rem excepturi? Dignissimos alias cumque natus id asperiores labore voluptate.
        </p>
        <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#FECECE] hover:bg-slate-200 text-black">
            Hire me
          </button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border  mt-3 ">
           <span className="block bg-[#121212] hover:bg_slate-800 rounded-full px-5 py-2">Download CV </span> 
          </button>
        </div>
       </div>
       <div className="col-span-5 place-self-center mt-4 lg:mt-0" >
         <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative">
          <Image
            src="/images/white-cat-wave-hand-illustration-png.png"
            alt="cat image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            width={300}
            height={300}
          />
         </div>
       </div>
    </div>
  </section>
  );
};

export default HeroSection;