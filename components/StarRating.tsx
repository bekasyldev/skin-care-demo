"use client";
import { useState } from "react";

interface StarRatingProps {
  rating: number;
  starSize?: number; // New prop for star size
}

const StarRating: React.FC<StarRatingProps> = ({ rating, starSize = 24 }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    // You can handle click events here if needed
    // For instance, to submit a rating to the backend
    console.log(`Clicked on star ${index}`);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        const isFilled = hoverRating >= starNumber || rating >= starNumber;

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-${starSize} w-${starSize} ${
              isFilled ? "text-yellow-500" : "text-gray-400"
            }`}
            viewBox="0 0 20 20"
            fill={"#141718"}
            onMouseOver={() => handleMouseOver(starNumber)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starNumber)}
          >
            <path
              fillRule="evenodd"
              d="M10 2l2.45 5.192 5.512.803-3.987 3.86.941 5.49L10 15.132l-4.916 2.213.941-5.49-3.987-3.86 5.512-.803L10 2z"
              clipRule="evenodd"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
