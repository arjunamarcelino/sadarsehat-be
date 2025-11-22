import { FastifyReply, FastifyRequest } from 'fastify'
import { quizQuestions } from './quiz_data.js'
import { QuizQuestionResponse, QuizResponse, QuizSubmission, QuizSubmissionResponse, QuizResult } from './quiz_types.js'

const QuizController = {
  getQuiz: function (request: FastifyRequest, reply: FastifyReply) {
    try {
      // Return questions without answers
      const questions: QuizQuestionResponse[] = quizQuestions.map((q) => ({
        number: q.number,
        question: q.question,
      }))

      const response: QuizResponse = {
        questions,
      }

      reply.json(response, 200, null, 'Quiz questions retrieved successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to retrieve quiz questions')
    }
  },

  submitQuiz: function (request: FastifyRequest<{ Body: QuizSubmission }>, reply: FastifyReply) {
    try {
      const { answers } = request.body

      // Validate that all questions are answered
      if (!answers || answers.length !== quizQuestions.length) {
        reply.json(null, 400, 'VALIDATION_ERROR', `Please answer all ${quizQuestions.length} questions`)

        return
      }

      // Validate answer format and check for duplicates
      const validAnswers = ['Fact', 'Myth']
      const answeredQuestionNumbers = new Set<number>()

      for (const answer of answers) {
        // Validate answer format
        if (!validAnswers.includes(answer.answer)) {
          reply.json(null, 400, 'VALIDATION_ERROR', 'Invalid answer format. Must be "Fact" or "Myth"')

          return
        }

        // Check for duplicate question numbers
        if (answeredQuestionNumbers.has(answer.number)) {
          reply.json(null, 400, 'VALIDATION_ERROR', `Duplicate answer for question number ${answer.number}`)

          return
        }
        answeredQuestionNumbers.add(answer.number)
      }

      // Validate that all question numbers are present
      const expectedQuestionNumbers = new Set(quizQuestions.map((q) => q.number))
      const missingQuestions = Array.from(expectedQuestionNumbers).filter((num) => !answeredQuestionNumbers.has(num))

      if (missingQuestions.length > 0) {
        reply.json(null, 400, 'VALIDATION_ERROR', `Missing answers for question numbers: ${missingQuestions.join(', ')}`)

        return
      }

      // Create a map of correct answers for quick lookup
      const correctAnswersMap = new Map(
        quizQuestions.map((q) => [q.number, q.answer])
      )

      // Process results
      const results: QuizResult[] = []
      let correctCount = 0
      let incorrectCount = 0

      for (const userAnswer of answers) {
        const question = quizQuestions.find((q) => q.number === userAnswer.number)
        if (!question) {
          reply.json(null, 400, 'VALIDATION_ERROR', `Question number ${userAnswer.number} not found`)

          return
        }

        const correctAnswer = correctAnswersMap.get(userAnswer.number)
        const isCorrect = userAnswer.answer === correctAnswer

        if (isCorrect) {
          correctCount++
        } else {
          incorrectCount++
        }

        results.push({
          number: question.number,
          question: question.question,
          userAnswer: userAnswer.answer,
          correctAnswer: correctAnswer!,
          isCorrect,
          briefExplanation: question.briefExplanation,
          sources: question.sources,
          longExplanation: question.longExplanation,
        })
      }

      // Calculate score as percentage
      const score = Math.round((correctCount / quizQuestions.length) * 100)

      const response: QuizSubmissionResponse = {
        totalQuestions: quizQuestions.length,
        correctAnswers: correctCount,
        incorrectAnswers: incorrectCount,
        score,
        results,
      }

      reply.json(response, 200, null, 'Quiz submitted successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to submit quiz')
    }
  },
}

export default QuizController

