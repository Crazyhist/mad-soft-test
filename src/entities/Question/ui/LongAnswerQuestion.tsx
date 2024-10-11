import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Question } from '../model/types'

interface LongAnswerQuestionProps {
	question: Question
	onAnswerSelect: (answer: string) => void
}

const LongAnswerQuestion = ({
	question,
	onAnswerSelect,
}: LongAnswerQuestionProps) => {
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
				<textarea
					rows={4}
					{...register('answer')}
					placeholder='Введите ответ'
				/>
			</label>
		</form>
	)
}

export default LongAnswerQuestion
