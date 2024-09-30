
import React from 'react'; 
// Imports the React library to use JSX and React components.

import StarRating from './StarRating'; 
// Imports the StarRating component from the file named 'StarRating.js', assuming it's in the same folder.

function App() { 
  // Defines the App component, which will return JSX (the UI layout).

  return (
    <div> 
      {/* The main container for the App component. */}

      <h1>Product Rating</h1> 
      {/* A heading that displays the title "Product Rating" on the screen. */}

      <StarRating totalStars={5} /> 
      {/* This renders the StarRating component and passes a prop `totalStars` set to 5. This controls the number of stars. */}

    </div>
  );
}

export default App; 
// Exports the App component so that it can be used in other parts of the application, like in `index.js` to render it on the screen.
