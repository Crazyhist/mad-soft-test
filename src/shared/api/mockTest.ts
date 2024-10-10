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

export const mockTest: Test = {
	id: 'test1',
	title: 'Тестовый пример',
	questions: [
		{
			id: 'q1',
			type: QuestionType.Single,
			question: 'Какой цвет неба?',
			options: ['Синий', 'Зеленый', 'Красный'],
		},
		{
			id: 'q2',
			type: QuestionType.Multiple,
			question: 'Выберите фрукты',
			options: ['Яблоко', 'Морковь', 'Банан'],
		},
		{
			id: 'q3',
			type: QuestionType.Short,
			question: 'Столица Франции',
		},
		{
			id: 'q4',
			type: QuestionType.Long,
			question: 'Опишите свои впечатления от путешествия',
		},
		{
			id: 'q5',
			type: QuestionType.Single,
			question: 'Какой цвет неба?',
			options: ['Синий', 'Зеленый', 'Красный'],
		},
		{
			id: 'q6',
			type: QuestionType.Multiple,
			question: 'Выберите фрукты',
			options: ['Яблоко', 'Морковь', 'Банан'],
		},
		{
			id: 'q7',
			type: QuestionType.Short,
			question: 'Столица Франции',
		},
		{
			id: 'q8',
			type: QuestionType.Long,
			question: 'Опишите свои впечатления от путешествия',
		},
	],
	timeLimit: 1200,
}
