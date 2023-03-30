import React from 'react'
import {useState} from 'react'
import axios from 'axios'
const Search = () => {


    const [Search, SetSearch] = useState<string>('')
    const [Results, SetResults] = useState<any[]>([])
    const url = `https://api.edamam.com/api/food-database/parser?app_id=9f259904&app_key=01b4010ecafba36b19688cf87bf0de84&ingr=${Search}`

    const getData = () => {
        axios.get(url)
        .then(response => {
          console.log(response.data.hints)
          SetResults(
            response.data.hints);
        }
        )
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        SetSearch(e.currentTarget.value)
        getData()
    }

  return (
    <div>
      <input type="text" value={Search} onChange={handleChange} />
      <button>Search foods</button>
      {Results.map((result ) =>{
        return (
          <li key={result.food.foodId}>
            <h2>{result.food.label}</h2>
            {result.food.nutrients.ENERC_KCAL} calories
            <p>{result.food.nutrients.CHOCDF} carbs</p>
            <p>{result.food.nutrients.PROCNT} protein</p>
            <p>{result.food.nutrients.FAT} fat  <button>Add to Log</button> </p>
            </li>
        )
      })
      }
      </div>
  )
}

export default Search