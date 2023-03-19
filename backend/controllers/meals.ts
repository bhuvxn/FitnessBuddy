const mealsRouter = require('express').Router()
const Meal = require('../models/meals')


mealsRouter.get('/', async (_request: any, response: { json: (arg0: any) => void; }) => {
    const meals = await Meal.find({})
    response.json(meals.map((meal: { toJSON: () => any; }) => meal.toJSON()))
}

);

mealsRouter.post('/', async (request: { body: any; }, response: { json: (arg0: any) => void; }) => {
    const body = request.body
    const meal = new Meal({
        food: body.food,
        calories: body.calories,
        date: body.date,
        protein: body.protein,
        carbs: body.carbs,
        fat: body.fat,
    })
    const savedMeal = await meal.save()
    response.json(savedMeal.toJSON())
}
);

module.exports = mealsRouter