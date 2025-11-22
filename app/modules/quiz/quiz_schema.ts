const QuizSchema = {
  getQuiz: {
    description: 'Get quiz questions',
    tags: ['Quiz'],
    summary: 'Retrieve all quiz questions without answers',
    response: {
      200: {
        description: 'Successfully retrieved quiz questions',
        type: 'object',
        properties: {
          status: { type: 'number', example: 200 },
          code: { type: 'string', example: null },
          message: { type: 'string', example: 'Quiz questions retrieved successfully' },
          data: {
            type: 'object',
            properties: {
              questions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    number: { type: 'number', example: 1 },
                    question: { type: 'string', example: 'Virus HIV ditularkan melalui keringat' },
                  },
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal server error',
        type: 'object',
        properties: {
          status: { type: 'number', example: 500 },
          code: { type: 'string', example: 'SYSTEM_ERROR' },
          message: { type: 'string', example: 'Failed to retrieve quiz questions' },
          data: { type: 'null' },
        },
      },
    },
  },

  submitQuiz: {
    description: 'Submit quiz answers',
    tags: ['Quiz'],
    summary: 'Submit quiz answers and get results',
    body: {
      type: 'object',
      required: ['answers'],
      properties: {
        answers: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            required: ['number', 'answer'],
            properties: {
              number: {
                type: 'number',
                description: 'Question number',
                example: 1,
              },
              answer: {
                type: 'string',
                enum: ['Fact', 'Myth'],
                description: 'User answer',
                example: 'Myth',
              },
            },
          },
        },
      },
    },
    response: {
      200: {
        description: 'Successfully submitted quiz',
        type: 'object',
        properties: {
          status: { type: 'number', example: 200 },
          code: { type: 'string', example: null },
          message: { type: 'string', example: 'Quiz submitted successfully' },
          data: {
            type: 'object',
            properties: {
              totalQuestions: { type: 'number', example: 10 },
              correctAnswers: { type: 'number', example: 7 },
              incorrectAnswers: { type: 'number', example: 3 },
              score: { type: 'number', example: 70 },
              results: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    number: { type: 'number', example: 1 },
                    question: { type: 'string', example: 'Virus HIV ditularkan melalui keringat' },
                    userAnswer: { type: 'string', enum: ['Fact', 'Myth'], example: 'Myth' },
                    correctAnswer: { type: 'string', enum: ['Fact', 'Myth'], example: 'Myth' },
                    isCorrect: { type: 'boolean', example: true },
                    briefExplanation: { type: 'string' },
                    sources: { type: 'string' },
                    longExplanation: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Validation error',
        type: 'object',
        properties: {
          status: { type: 'number', example: 400 },
          code: { type: 'string', example: 'VALIDATION_ERROR' },
          message: { type: 'string', example: 'Please answer all 10 questions' },
          data: { type: 'null' },
        },
      },
      500: {
        description: 'Internal server error',
        type: 'object',
        properties: {
          status: { type: 'number', example: 500 },
          code: { type: 'string', example: 'SYSTEM_ERROR' },
          message: { type: 'string', example: 'Failed to submit quiz' },
          data: { type: 'null' },
        },
      },
    },
  },
}

export default QuizSchema

