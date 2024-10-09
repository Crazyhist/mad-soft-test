export type QuestionType = 'single' | 'multiple' | 'short' | 'long'

export interface Question {
	id: string
	type: QuestionType
	question: string
	options?: string[]
}

export interface Test {
	id: string
	title: string
	questions: Question[]
	timeLimit?: number
}

export interface Answers {
	[questionId: string]: string | string[]
}
