import React, { useState } from 'react';
function Star({ isFilled, onClick, onMouseOver }) {
  return (
    <span onClick={onClick} onMouseOver={onMouseOver} style={{ cursor: 'pointer', fontSize: '30px', color: isFilled ? 'gold' : 'gray' }}>
      {isFilled ? '★' : '☆'}
    </span>
  );
}

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseOver = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div>
      <h2>Rate the Item</h2>
      <div onMouseOut={handleMouseOut}>
        {[...Array(totalStars)].map((_, index) => (
          <Star key={index}
            isFilled={index < (hoverRating || rating)}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseOver(index)}
          />
        ))}
      </div>

      <p>Your Rating: {rating}</p>
    </div>
  );
}

export default StarRating;

