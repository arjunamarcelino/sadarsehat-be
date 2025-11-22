import { FastifyInstance } from 'fastify'

import MainRoute from '#app/modules/main_route'
import QuizRoute from '#app/modules/quiz/quiz_route'
import ChatbotRoute from '#app/modules/chatbot/chatbot_route'
import DashboardRoute from '#app/modules/dashboard/dashboard_route'

export default function (app: FastifyInstance) {
  app.register(MainRoute)
  app.register(QuizRoute)
  app.register(ChatbotRoute)
  app.register(DashboardRoute)
}
