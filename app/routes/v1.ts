import { FastifyInstance } from 'fastify'

import MainRoute from '#app/modules/main_route'

export default function (app: FastifyInstance) {
  app.register(MainRoute)
}
