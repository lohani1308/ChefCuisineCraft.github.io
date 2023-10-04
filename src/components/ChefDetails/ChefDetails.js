import React, { useState } from 'react';
import './ChefDetails.css';

function ChefDetails({ chef, onClose }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(true);
  };

  return (
    <div className="chef-details-overlay">
      <div className="chef-details-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* "X" character for closing */}
        </button>
        <img src={chef.chefPicture} alt={chef.chefName} />
        <h2>{chef.chefName}</h2>
        <p>Years of Experience: {chef.yearsOfExperience}</p>
        <p>Number of Recipes: {chef.numRecipes}</p>
        <p>Likes: {chef.likes}</p>
        <button
          className={`like-button${isLiked ? ' liked' : ''}`}
          onClick={handleLikeClick}
          disabled={isLiked}
        >
          {isLiked ? '❤ Liked' : '🤍 Like'}
        </button>
        <h3>Recipes:</h3>
        <ul>
          {chef.recipes.map((recipe, index) => (
            <li key={index} className="recipe-card">
              <h4>{recipe.recipeName}</h4>
              <p>Description: {recipe.description}</p>
              <h5>Ingredients:</h5>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h5>Instructions:</h5>
              <ol>
                {recipe.instructions.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChefDetails;
