import React, { useState } from "react";

export default function FoodList() {
  const [newFood, setNewFood] = useState("");

  const [foods, setfoods] = useState([]);

  function handleNewFoodChange(e) {
    e.preventDefault();
    setNewFood(e.target.value);
  }

  function handleNewFood(e) {
    e.preventDefault();
    if (newFood === "") return;
    setfoods([...foods, { id: Date.now(), text: newFood }]);
    e.target.reset();
  }

  function removeFoods(id) {
    setfoods(foods.filter(food => food.id !== id));
  }

  return (
    <div>
      <h1 className="list-title">Food List</h1>
      <form onSubmit={handleNewFood}>
        <label>
          Food
          <br />
          <input placeholder="Your foods....." onChange={handleNewFoodChange} />
          <ul>
            {foods.map(food => (
              <li key={food.id}>
                {food.text}
                <a href="#" onClick={() => removeFoods(food.id)}>
                  {" "}
                  Remove
                </a>
              </li>
            ))}
          </ul>
        </label>
      </form>
    </div>
  );
}
