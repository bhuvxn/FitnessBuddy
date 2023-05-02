const mealsRouter = require('express').Router()
const Meal = require('../models/meals')
import User from "../models/user"


mealsRouter.get('/', async (_request: any, response: { json: (arg0: any) => void; }) => {
    const meals = await Meal.find({})
    response.json(meals.map((meal: { toJSON: () => any; }) => meal.toJSON()))
}

//get user meals by user id


);
//get user meals by user id
mealsRouter.get('/user', async (request: { body: { userId: any }; }, response: { json: (arg0: any) => void; }) => {
    const meals = await Meal.find({ user: request.body.userId });
    response.json(meals.map((meal: { toJSON: () => any; }) => meal.toJSON()));
  });
  



mealsRouter.post('/', async (request: { body: any; }, response: { json: (arg0: any) => void; }) => {
    const body = request.body
    type user_id= string | Record<string, unknown> | null; 
    //determining if user id is valid 
    try{
        const user:user_id = await User.findById(body.userId)
        if(!user){
            return response.json({error: 'invalid user id'})
        }
    } catch (error){
        return response.json({error: 'invalid user id'})
    }
    //stripping time from date
    const date = new Date().toString().substring(0, 15)
    const meal = new Meal({
        food: body.food,
        calories: body.calories,
        date: date, 
        protein: body.protein,
        carbs: body.carbs,
        fat: body.fat,
        user: body.userId
    })
    const savedMeal = await meal.save()
    response.json(savedMeal.toJSON())
}
);

module.exports = mealsRouter