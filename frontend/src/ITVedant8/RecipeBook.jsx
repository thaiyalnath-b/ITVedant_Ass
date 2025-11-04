import React, { useState } from "react";
import "./RecipeBook.css";

function RecipeBook() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Idly",
      description: "Soft steamed rice cakes served with chutney and sambar.",
      image: "/public/idly.jpg"
    },
    {
      id: 2,
      title: "Dosa",
      description: "Crispy rice crepe paired with chutney and spicy potato masala.",
      image: "/public/dosa.jpg"
    },
    {
      id: 3,
      title: "Poori",
      description: "Deep-fried puffed bread served with potato curry or chana masala.",
      image: "/public/Poori.jpg"
    },
    {
      id: 4,
      title: "Parotta",
      description: "Flaky layered flatbread popular in South Indian cuisine.",
      image: "/public/Parotta.jpg"
    }
  ]);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewRecipe({...newRecipe, image: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if(!newRecipe.title || !newRecipe.description || !newRecipe.image) {
      alert("Please fill in all fields and upload an image");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: newRecipe.title,
      description: newRecipe.description,
      image: newRecipe.image,
  };

  setRecipes([...recipes, newItem]);
  setNewRecipe({title: "", description: "", image: ""});
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe">
      <h1>Flash Recipe Book</h1>

      <form className="form" onSubmit={handleAdd}>
        <input type="text" name="title" placeholder="Recipe Title" value={newRecipe.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Recipe Description" value={newRecipe.description} onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {newRecipe.image && (
          <img src={newRecipe.image} alt="preview" className="image" />
        )}
        <button type="submit">Add Recipe</button>
      </form>

      <div className="list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeBook