import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Question } from '../model/types'

interface ShortAnswerQuestionProps {
	question: Question
	onAnswerSelect: (answer: string) => void
}

const ShortAnswerQuestion = ({
	question,
	onAnswerSelect,
}: ShortAnswerQuestionProps) => {
	const { register, watch } = useForm<{ answer: string }>()
	const answer = watch('answer')

	useEffect(() => {
		if (answer) {
			onAnswerSelect(answer)
		}
	}, [answer, onAnswerSelect])

	return (
		<form>
			<p>{question.question}</p>
			<label>
				<input
					type='text'
					{...register('answer')}
					placeholder='Введите ответ'
				/>
			</label>
		</form>
	)
}

export default ShortAnswerQuestion
