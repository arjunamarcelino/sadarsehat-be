import { DoneFuncWithErrOrRes, FastifyInstance, FastifyPluginOptions } from 'fastify'
import ChatbotController from './chatbot_controller.js'
import ChatbotSchema from './chatbot_schema.js'

export default function (app: FastifyInstance, _: FastifyPluginOptions, done: DoneFuncWithErrOrRes) {
  app.post('/chatbot', {
    schema: ChatbotSchema.sendMessage,
  }, ChatbotController.sendMessage)

  done()
}

