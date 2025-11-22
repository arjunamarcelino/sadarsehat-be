export interface QuizQuestion {
  number: number
  question: string
  answer: 'Fact' | 'Myth'
  briefExplanation: string
  sources: string
  longExplanation: string
}

export interface QuizQuestionResponse {
  number: number
  question: string
}

export interface QuizResponse {
  questions: QuizQuestionResponse[]
}

export interface QuizSubmission {
  answers: {
    number: number
    answer: 'Fact' | 'Myth'
  }[]
}

export interface QuizResult {
  number: number
  question: string
  userAnswer: 'Fact' | 'Myth'
  correctAnswer: 'Fact' | 'Myth'
  isCorrect: boolean
  briefExplanation: string
  sources: string
  longExplanation: string
}

export interface QuizSubmissionResponse {
  totalQuestions: number
  correctAnswers: number
  incorrectAnswers: number
  score: number
  results: QuizResult[]
}

