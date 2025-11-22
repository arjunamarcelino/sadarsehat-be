export interface ChatbotMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

export interface ChatbotRequest {
  message: string
  conversationId?: string
}

export interface ChatbotResponse {
  message: string
  conversationId: string
  timestamp: string
}

