const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (_request: any, response: { json: (arg0: any) => void; }) => {
    const users = await User.find({}).populate('meals', {name: 1, date: 1});
    response.json(users.map((u: { toJSON: () => any; }) => u.toJSON()));
}
);

usersRouter.post('/', async (request: { body: { username: string; name: string; password: string; }; }, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) => {
    const { username, name, password } = request.body
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
  
    const user = new User({
      username,
      name,
      passwordHash,
    })
  
    const savedUser = await user.save()
  
    response.status(201).json(savedUser)
  })


module.exports = usersRouter