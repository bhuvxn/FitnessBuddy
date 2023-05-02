//get settings based on user id
const settingsRouter = require('express').Router();
const Settings = require('../models/settings');
const User = require('../models/user');


settingsRouter.get('/', async (request: { body: { userId: any }; }, response: { json: (arg0: any) => void; }) => {
    const meals = await Settings.find({ user: request.body.userId });
    response.json(meals.map((settings: { toJSON: () => any; }) => settings.toJSON()));
  });

export {}
module.exports = settingsRouter;