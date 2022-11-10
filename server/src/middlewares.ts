import cors from 'cors';

export const middlewares = [
    cors({ 
    origin: [
      'http://localhost:3000',
      'https://www.freecodecamp.org'
    ],
    credentials: true,
    optionsSuccessStatus: 200
  })
]