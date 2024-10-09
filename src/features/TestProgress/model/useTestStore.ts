import { Answers } from '@/entities/Question/model/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TestStore {
	currentQuestionIndex: number
	answers: Answers
	timeLeft: number
	setAnswer: (questionId: string, answer: string | string[]) => void
	getAnswer: (questionId: string) => string | string[] | null
	nextQuestion: () => void
	prevQuestion: () => void
	decrementTime: () => void
	resetTest: () => void
	setTimeLeft: (time: number) => void
}

const useTestStore = create<TestStore>()(
	persist(
		(set, get) => ({
			currentQuestionIndex: 0,
			answers: {},
			timeLeft: 1200,
			setAnswer: (questionId, answer) =>
				set((state) => ({
					answers: { ...state.answers, [questionId]: answer },
				})),
			getAnswer: (questionId) => get().answers[questionId] || null,
			nextQuestion: () =>
				set((state) => ({
					currentQuestionIndex: state.currentQuestionIndex + 1,
				})),
			prevQuestion: () =>
				set((state) => ({
					currentQuestionIndex:
						state.currentQuestionIndex > 0 ? state.currentQuestionIndex - 1 : 0,
				})),
			decrementTime: () =>
				set((state) => ({
					timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
				})),
			resetTest: () =>
				set(() => ({
					currentQuestionIndex: 0,
					answers: {},
					timeLeft: 1200,
				})),
			setTimeLeft: (time) =>
				set(() => ({
					timeLeft: time,
				})),
		}),
		{
			name: 'test-progress-storage',
		}
	)
)

export default useTestStore
