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

export const mockTest: Test = {
	id: 'test1',
	title: 'Тестовый пример',
	questions: [
		{
			id: 'q1',
			type: 'single',
			question: 'Какой цвет неба?',
			options: ['Синий', 'Зеленый', 'Красный'],
		},
		{
			id: 'q2',
			type: 'multiple',
			question: 'Выберите фрукты',
			options: ['Яблоко', 'Морковь', 'Банан'],
		},
		{
			id: 'q3',
			type: 'short',
			question: 'Столица Франции',
		},
		{
			id: 'q4',
			type: 'long',
			question: 'Опишите свои впечатления от путешествия',
		},
		{
			id: 'q5',
			type: 'single',
			question: 'Какой цвет неба?',
			options: ['Синий', 'Зеленый', 'Красный'],
		},
		{
			id: 'q6',
			type: 'multiple',
			question: 'Выберите фрукты',
			options: ['Яблоко', 'Морковь', 'Банан'],
		},
		{
			id: 'q7',
			type: 'short',
			question: 'Столица Франции',
		},
		{
			id: 'q8',
			type: 'long',
			question: 'Опишите свои впечатления от путешествия',
		},
	],
	timeLimit: 1200,
}
