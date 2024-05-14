import React from "react";
import placeholder from "./assets/R.png";

const CourseCard = () => {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src={
              "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sample Course</h2>
          <p>Sample Description</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
