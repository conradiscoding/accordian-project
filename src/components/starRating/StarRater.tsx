import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import style from './StarRater.module.css';

const StarRater = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (i: number) => {
    setRating(i);
  };

  const handleStarHover = (i: number) => {
    setHover(i);
  };

  const handleStarLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((star, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            className={
              i <= (hover || rating) ? style.starActive : style.starInactive
            }
            onClick={() => handleStarClick(i)}
            onMouseMove={() => handleStarHover(i)}
            onMouseLeave={() => handleStarLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRater;
