// src/mocks/handlers.js
import { rest } from 'msw'
import { launches } from './launches';

export const handlers = [
  // Handles a GET /user request
  rest.get('https://api.spacexdata.com/v2/launches', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(launches),
    )
  })
]
