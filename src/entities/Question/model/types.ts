export enum QuestionType {
	Single = 'single',
	Multiple = 'multiple',
	Short = 'short',
	Long = 'long',
}

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
