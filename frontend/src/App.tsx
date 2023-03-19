
import axios from 'axios'
import Login from './pages/Login'
import { useState } from 'react'
const App= () => {
  const [Results, SetResults] = useState<any[]>([])
  const click = () => {
    const url = `https://api.edamam.com/api/food-database/parser?app_id=9f259904&app_key=01b4010ecafba36b19688cf87bf0de84&ingr=$apple`
    axios.get(url)
    .then(response => {
      console.log(response.data.hints)
      SetResults(response.data.hints)
    }
    )
  }
  //render results in rows and columns, featuring the food name, calories, macros
  
  

  return (
    <div>
      <h1>Fitness Buddy</h1>
      <button onClick={click}>Click</button>
      {Results.map((result ) =>{
        return (
          <li key={result.food.foodId}>
            <h2>{result.food.label}</h2>
            {result.food.nutrients.ENERC_KCAL} calories
            <p>{result.food.nutrients.CHOCDF} carbs</p>
            <p>{result.food.nutrients.PROCNT} protein</p>
            <p>{result.food.nutrients.FAT} fat </p>
            </li>
        )
      })
      }
    </div>
  )

}

export default App
