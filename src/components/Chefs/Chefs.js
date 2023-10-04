import React, { useState } from 'react';
import ChefsData from '../MockAPI';
import './Chefs.css'; // Import your CSS file for styling
import ChefDetails from '../ChefDetails/ChefDetails';

function Chefs() {
    const [isView, setIsView] = useState(false);
    const [selectedchef,setSelectedchef]=useState(null);
    const [index,setIndex]=useState(0);

    const handleViewClick = (index,chef) => {
        setIsView(true);
        setSelectedchef(chef);
        setIndex(index);
    };

    return (
        <div className="chef-container"> {/* Wrap everything in a container */}
            <h1 className="falling-text">Our Top Chefs</h1> {/* Add the falling text effect */}
            <div className="chef-grid">
                {ChefsData.sort((a, b) => b.likes - a.likes).slice(0, 6).map((chef, index) => (
                    <div key={index} className="chef-card">
                        <img src={chef.chefPicture} alt={chef.chefName} style={{ width: '100px', height: '100px' }} />
                        <div className="chef-details">
                            <h2>{chef.chefName}</h2>
                            <p>Years of Experience: {chef.yearsOfExperience}</p>
                            <p>Number of Recipes: {chef.numRecipes}</p>
                            <p>Likes: {chef.likes}</p>
                            <button className="view-recipe-button" onClick={() => handleViewClick(index,chef)}>
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
                {isView && <ChefDetails chef={selectedchef} onClose={()=>setIsView(false)}/>}
            </div>
        </div>
    );
}

export default Chefs;
