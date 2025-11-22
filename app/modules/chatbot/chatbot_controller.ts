import { FastifyReply, FastifyRequest } from 'fastify'
import ChatbotService from './chatbot_service.js'
import { ChatbotRequest } from './chatbot_types.js'

const ChatbotController = {
  sendMessage: async function (request: FastifyRequest<{ Body: ChatbotRequest }>, reply: FastifyReply) {
    try {
      const { message, conversationId } = request.body

      // Validate message
      if (!message || message.trim().length === 0) {
        reply.json(null, 400, 'VALIDATION_ERROR', 'Message cannot be empty')

        return
      }

      if (message.length > 1000) {
        reply.json(null, 400, 'VALIDATION_ERROR', 'Message is too long. Maximum 1000 characters allowed')

        return
      }

      // Process message through service
      const response = await ChatbotService.processMessage({
        message: message.trim(),
        conversationId,
      })

      reply.json(response, 200, null, 'Message processed successfully')
    } catch (error) {
      reply.json(null, 500, 'SYSTEM_ERROR', 'Failed to process message')
    }
  },
}

export default ChatbotController

