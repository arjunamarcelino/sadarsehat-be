import { ChatbotRequest, ChatbotResponse } from './chatbot_types.js'

class ChatbotService {
  private generateConversationId(): string {
    return `conv_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  }

  private getDummyResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase()

    // Health-related responses
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('halo')) {
      return 'Halo! Saya adalah asisten kesehatan Sadar Sehat. Saya di sini untuk membantu menjawab pertanyaan Anda tentang kesehatan. Ada yang bisa saya bantu?'
    }

    if (lowerMessage.includes('covid') || lowerMessage.includes('corona')) {
      return 'COVID-19 adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2. Gejala umum termasuk demam, batuk, dan sesak napas. Untuk mencegah penularan, lakukan vaksinasi, cuci tangan secara teratur, dan gunakan masker di tempat ramai. Jika mengalami gejala, segera konsultasikan dengan tenaga kesehatan.'
    }

    if (lowerMessage.includes('demam') || lowerMessage.includes('fever')) {
      return 'Demam adalah peningkatan suhu tubuh di atas normal (37.5°C). Demam ringan biasanya dapat diatasi dengan istirahat dan minum air putih yang cukup. Jika demam tinggi (>38.5°C) atau berlangsung lebih dari 3 hari, segera konsultasikan dengan dokter.'
    }

    if (lowerMessage.includes('batuk') || lowerMessage.includes('cough')) {
      return 'Batuk adalah refleks alami tubuh untuk membersihkan saluran pernapasan. Batuk ringan biasanya sembuh sendiri dalam beberapa hari. Minum air putih hangat dan istirahat yang cukup dapat membantu. Jika batuk berlangsung lebih dari 2 minggu atau disertai darah, segera periksakan ke dokter.'
    }

    if (lowerMessage.includes('vaksin') || lowerMessage.includes('vaccine')) {
      return 'Vaksinasi adalah cara efektif untuk mencegah penyakit menular. Vaksin bekerja dengan melatih sistem kekebalan tubuh untuk mengenali dan melawan patogen tertentu. Pastikan Anda mengikuti jadwal vaksinasi yang direkomendasikan oleh Kementerian Kesehatan.'
    }

    if (lowerMessage.includes('nutrisi') || lowerMessage.includes('makanan sehat') || lowerMessage.includes('diet')) {
      return 'Nutrisi yang baik sangat penting untuk kesehatan. Konsumsilah makanan seimbang yang mencakup karbohidrat, protein, lemak sehat, vitamin, dan mineral. Perbanyak konsumsi buah, sayuran, dan biji-bijian. Batasi makanan olahan, gula, dan garam berlebihan.'
    }

    if (lowerMessage.includes('olahraga') || lowerMessage.includes('exercise') || lowerMessage.includes('fitness')) {
      return 'Olahraga teratur memiliki banyak manfaat untuk kesehatan, termasuk meningkatkan kebugaran kardiovaskular, memperkuat otot, dan meningkatkan kesehatan mental. Disarankan untuk melakukan aktivitas fisik minimal 150 menit per minggu dengan intensitas sedang.'
    }

    if (lowerMessage.includes('stres') || lowerMessage.includes('stress') || lowerMessage.includes('cemas')) {
      return 'Stres adalah respons alami tubuh terhadap tekanan. Untuk mengelola stres, coba teknik relaksasi seperti pernapasan dalam, meditasi, atau olahraga ringan. Pastikan juga untuk tidur yang cukup dan menjaga keseimbangan antara kerja dan istirahat. Jika stres mengganggu aktivitas sehari-hari, pertimbangkan untuk berkonsultasi dengan profesional kesehatan mental.'
    }

    if (lowerMessage.includes('terima kasih') || lowerMessage.includes('thanks') || lowerMessage.includes('makasih')) {
      return 'Sama-sama! Senang bisa membantu. Jika ada pertanyaan lain tentang kesehatan, jangan ragu untuk bertanya. Tetap jaga kesehatan Anda!'
    }

    // Default response
    return 'Terima kasih atas pertanyaan Anda. Saya adalah asisten kesehatan yang dapat membantu menjawab pertanyaan umum tentang kesehatan, gejala penyakit, pencegahan, dan gaya hidup sehat. Silakan ajukan pertanyaan yang lebih spesifik, atau coba kata kunci seperti: COVID-19, demam, batuk, vaksin, nutrisi, olahraga, atau stres.'
  }

  processMessage(request: ChatbotRequest): Promise<ChatbotResponse> {
    // Generate or use existing conversation ID
    const conversationId = request.conversationId || this.generateConversationId()

    // Get dummy response based on user message
    const responseMessage = this.getDummyResponse(request.message)

    return Promise.resolve({
      message: responseMessage,
      conversationId,
      timestamp: new Date().toISOString(),
    })
  }
}

export default new ChatbotService()

