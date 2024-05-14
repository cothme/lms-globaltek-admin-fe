import React from "react";
import HeroImage from "../assets/hero-img2.jpg";
import ViewCourseImage from "../assets/view-courses-img.jpg";
import LearnMoreImage from "../assets/learn-more-img.jpg";

const Hero = () => {
  return (
    <>
      <div>
        <div className="absolute">
          <img src={HeroImage} alt="" className="w-full min-h-screen" />
          <div className="absolute inset-0 object-none bg-black bg-opacity-50"></div>
        </div>
        <div className="relative text-white text-center">
          <h2 className="p-8 text-5xl font-bold drop-shadow-[0_1.2px_10.2px_rgba(0,0,0,0.8)] flex justify-center items-center">
            Unlock Your Potential: Empowering Education with LinkedLearn
          </h2>
          <button className="bg-theme-maroon hover:bg-white hover:text-theme-4 active:scale-90 duration-500 rounded-lg w-40 h-10">
            Enroll Now
          </button>
        </div>
      </div>
      <div className="mt-12 flex flex-row justify-center">
        <div className="ml-4 card w-96 glass">
          <figure>
            <img src={ViewCourseImage} alt="car!" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center text-white items-center font-bold">
              <a href="/about" className="hover:text-theme-maroon duration-200">
                View Available Courses
              </a>
            </div>
          </div>
        </div>
        <div className="ml-4 card w-96 glass">
          <figure>
            <img src={LearnMoreImage} alt="car!" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center items-center">
              <h2 className="card-title text-white text-center font-bold">
                <a
                  href="/about"
                  className="hover:text-theme-maroon duration-200"
                >
                  Learn More
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
