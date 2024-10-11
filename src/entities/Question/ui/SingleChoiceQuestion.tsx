import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Question } from '../model/types'

interface SingleChoiceQuestionProps {
	question: Question
	onAnswerSelect: (answer: string) => void
}

const SingleChoiceQuestion = ({
	question,
	onAnswerSelect,
}: SingleChoiceQuestionProps) => {
	const { register, watch } = useForm<{ answer: string }>()
	const selectedAnswer = watch('answer')

	useEffect(() => {
		if (selectedAnswer) {
			onAnswerSelect(selectedAnswer)
		}
	}, [selectedAnswer, onAnswerSelect])

	return (
		<form>
			<p>{question.question}</p>
			{question.options?.map((option) => (
				<label key={option} style={{ display: 'block', marginBottom: '8px' }}>
					<input
						type='radio'
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

export default SingleChoiceQuestion
