import { DoneFuncWithErrOrRes, FastifyInstance, FastifyPluginOptions } from 'fastify'
import QuizController from './quiz_controller.js'
import QuizSchema from './quiz_schema.js'

export default function (app: FastifyInstance, _: FastifyPluginOptions, done: DoneFuncWithErrOrRes) {
  app.get('/quiz', {
    schema: QuizSchema.getQuiz,
  }, QuizController.getQuiz)

  app.post('/quiz/submit', {
    schema: QuizSchema.submitQuiz,
  }, QuizController.submitQuiz)

  done()
}

