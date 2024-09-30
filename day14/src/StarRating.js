import React, { useState } from 'react'; 
// Imports React and the `useState` hook. `useState` is used to handle the component's state, like the current rating.

function Star({ isFilled, onClick, onMouseOver }) { 
  // The Star component represents a single star. It receives three props: 
  // 1. `isFilled`: a boolean that decides if the star is gold (filled) or gray (unfilled).
  // 2. `onClick`: a function triggered when a star is clicked.
  // 3. `onMouseOver`: a function triggered when the mouse hovers over a star.

  return (
    <span
      onClick={onClick} 
      // When the user clicks on the star, the `onClick` event will trigger the function passed as a prop.

      onMouseOver={onMouseOver} 
      // When the user hovers over the star, the `onMouseOver` event triggers the function passed as a prop.

      style={{
        cursor: 'pointer', 
        // Makes the cursor look like a pointer (indicating it's clickable).

        fontSize: '30px', 
        // Sets the font size of the star to 30px.

        color: isFilled ? 'gold' : 'gray', 
        // If `isFilled` is true, the star is gold (filled); otherwise, it's gray (unfilled).
      }}
    >
      {isFilled ? '★' : '☆'} 
      // If `isFilled` is true, display the filled star symbol (`★`), otherwise display the empty star symbol (`☆`).
    </span>
  );
}

function StarRating({ totalStars = 5 }) { 
  // The StarRating component is responsible for rendering multiple stars and handling the rating logic.
  // `totalStars` is passed as a prop, with a default value of 5 if not provided.

  const [rating, setRating] = useState(0); 
  // `rating` holds the current rating (number of stars selected), initialized to 0.
  // `setRating` is the function to update the `rating`.

  const [hoverRating, setHoverRating] = useState(0); 
  // `hoverRating` holds the temporary rating when hovering over the stars, initialized to 0.
  // `setHoverRating` is the function to update the `hoverRating`.

  const handleClick = (index) => { 
    // This function handles the click event on a star.
    setRating(index + 1); 
    // When a star is clicked, it sets the `rating` to `index + 1` because `index` starts at 0.
  };

  const handleMouseOver = (index) => { 
    // This function handles the mouse hover event on a star.
    setHoverRating(index + 1); 
    // When hovering over a star, set the `hoverRating` to `index + 1` to visually fill the stars temporarily.
  };

  const handleMouseOut = () => { 
    // This function handles the mouse leaving the stars area.
    setHoverRating(0); 
    // When the mouse leaves, reset the `hoverRating` to 0, so the stars revert back to the actual `rating`.
  };

  return (
    <div> 
      {/* The main container for the StarRating component. */}
      <h2>Rate the Item</h2> 
      {/* A heading that tells the user to rate the item. */}

      <div onMouseOut={handleMouseOut}> 
        {/* A div that contains the stars. The `onMouseOut` event resets the hover state when the mouse leaves the stars. */}
        
        {[...Array(totalStars)].map((_, index) => ( 
          // Creates an array with `totalStars` length and maps over it to create individual stars. The `index` represents the position of each star.

          <Star
            key={index} 
            // The `key` is necessary for React to keep track of which elements have changed.

            isFilled={index < (hoverRating || rating)} 
            // If the `index` is less than the `hoverRating`, the star is filled. Otherwise, it checks if `index` is less than the `rating`.

            onClick={() => handleClick(index)} 
            // When the star is clicked, the `handleClick` function is called with the `index` of the clicked star.

            onMouseOver={() => handleMouseOver(index)} 
            // When hovering over the star, the `handleMouseOver` function is called with the `index` of the star.
          />
        ))}
      </div>

      <p>Your Rating: {rating}</p> 
      {/* Displays the current rating below the stars. */}
    </div>
  );
}

export default StarRating; 
// Exports the StarRating component so it can be imported and used in other components like `App.js`.
