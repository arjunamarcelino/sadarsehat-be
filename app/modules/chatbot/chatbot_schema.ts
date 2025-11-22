const ChatbotSchema = {
  sendMessage: {
    description: 'Send a message to the chatbot',
    tags: ['Chatbot'],
    summary: 'Send a message and receive a response from the health chatbot',
    body: {
      type: 'object',
      required: ['message'],
      properties: {
        message: {
          type: 'string',
          description: 'User message to the chatbot',
          example: 'Halo, apa itu COVID-19?',
          minLength: 1,
          maxLength: 1000,
        },
        conversationId: {
          type: 'string',
          description: 'Optional conversation ID to maintain context across messages',
          example: 'conv_1234567890_abc123',
        },
      },
    },
    response: {
      200: {
        description: 'Successfully processed message',
        type: 'object',
        properties: {
          status: { type: 'number', example: 200 },
          code: { type: 'string', example: null },
          message: { type: 'string', example: 'Message processed successfully' },
          data: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'COVID-19 adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2...',
              },
              conversationId: {
                type: 'string',
                example: 'conv_1234567890_abc123',
              },
              timestamp: {
                type: 'string',
                format: 'date-time',
                example: '2025-01-15T10:30:00.000Z',
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
          message: { type: 'string', example: 'Message cannot be empty' },
          data: { type: 'null' },
        },
      },
      500: {
        description: 'Internal server error',
        type: 'object',
        properties: {
          status: { type: 'number', example: 500 },
          code: { type: 'string', example: 'SYSTEM_ERROR' },
          message: { type: 'string', example: 'Failed to process message' },
          data: { type: 'null' },
        },
      },
    },
  },
}

export default ChatbotSchema

