import React from "react";
import { useState } from "react";
import axios from "axios";
const SearchFood = () => {
  const [Search, SetSearch] = useState<string>("");
  const [Results, SetResults] = useState<any[]>([]);
  const url = `https://api.edamam.com/api/food-database/parser?app_id=9f259904&app_key=01b4010ecafba36b19688cf87bf0de84&ingr=${Search}`;

  const getData = () => {
    axios.get(url).then((response) => {
      console.log(response.data.hints);
      SetResults(response.data.hints);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(e.currentTarget.value);
    getData();
  };

  return (
    <div>
      <input type="text" value={Search} onChange={handleChange} />
      <button>Search foods</button>
      <div className="flex flex-wrap -mx-4">
        <div className="w-3/4 mt-5 mx-auto border rounded-md max-h-96 overflow-y-auto">
          {Results.map((result) => {
            return (
              <div key={result.food.foodId} className="p-3 border-b">
                <h2 className="font-bold">{result.food.label}</h2>
                <p className="my-2">
                  {result.food.nutrients.ENERC_KCAL} calories
                </p>
                <p className="my-2">{result.food.nutrients.CHOCDF} carbs</p>
                <p className="my-2">{result.food.nutrients.PROCNT} protein</p>
                <p className="my-2">
                  {result.food.nutrients.FAT} fat
                  <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Add to Log
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchFood;
