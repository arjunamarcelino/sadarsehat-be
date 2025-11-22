import { FastifyInstance } from 'fastify'

import MainRoute from '#app/modules/main_route'
import QuizRoute from '#app/modules/quiz/quiz_route'

export default function (app: FastifyInstance) {
  app.register(MainRoute)
  app.register(QuizRoute)
}
