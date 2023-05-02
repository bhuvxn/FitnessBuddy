const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');
const Settings = require('../models/settings');


usersRouter.get('/', async (_request: any, response: { json: (arg0: any) => void; }) => {
    const users = await User.find({})
    response.json(users.map((u: { toJSON: () => any; }) => u.toJSON()))
}
);

usersRouter.post('/', async (request: { body: { username: string; password: string; }; }, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) => {
    try {const { username,  password } = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
  
    const user = new User({
      username,
      passwordHash,
    })
  
    const savedUser = await user.save()
    const settings = new Settings({
        user: savedUser._id,
        calories: 2000,
        protein: 200,
        carbs: 200,
        fat: 200
    })
    await settings.save()
    response.status(201).json(savedUser)
} catch (exception) {
    console.log(exception)
    response.status(500).json({error: 'something went wrong...'})
}

  })
  export {}

module.exports = usersRouter