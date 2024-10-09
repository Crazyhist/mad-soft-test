import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Question as QuestionType } from '../model/types'

interface MultipleChoiceQuestionProps {
	question: QuestionType
	onAnswerSelect: (answer: string[]) => void
}

const MultipleChoiceQuestion = ({
	question,
	onAnswerSelect,
}: MultipleChoiceQuestionProps) => {
	const { register, watch } = useForm<{ answer: string[] }>()

	// Отслеживаем изменения ответов
	const selectedAnswers = watch('answer') || []

	useEffect(() => {
		onAnswerSelect(selectedAnswers)
	}, [selectedAnswers, onAnswerSelect])

	return (
		<form>
			<p>{question.question}</p>
			{question.options?.map((option) => (
				<label key={option} style={{ display: 'block', marginBottom: '8px' }}>
					<input
						type='checkbox'
						value={option}
						{...register('answer')}
						style={{ marginRight: '8px' }}
					/>
					{option}
				</label>
			))}
		</form>
	)
}

export default MultipleChoiceQuestion
