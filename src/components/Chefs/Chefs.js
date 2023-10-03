import React from 'react';
import ChefsData from '../MockAPI';
import './Chefs.css'; // Import your CSS file for styling

function Chefs() {
  return (
    <div className="chef-grid">
      {ChefsData.sort((a, b) => b.likes - a.likes).slice(0, 6).map((chef, index) => (
        <div key={index} className="chef-card">
          <img src={chef.chefPicture} alt={chef.chefName} />
          <div className="chef-details">
            <h2>{chef.chefName}</h2>
            <p>Years of Experience: {chef.yearsOfExperience}</p>
            <p>Number of Recipes: {chef.numRecipes}</p>
            <p>Likes: {chef.likes}</p>
            <button className="view-recipe-button">View Recipe</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chefs;
