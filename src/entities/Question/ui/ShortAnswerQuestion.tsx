import React from 'react'
import { useForm } from 'react-hook-form'
import { Question as QuestionType } from '../model/types'

interface ShortAnswerQuestionProps {
	question: QuestionType
	onAnswerSelect: (answer: string) => void
}

const ShortAnswerQuestion = ({
	question,
	onAnswerSelect,
}: ShortAnswerQuestionProps) => {
	const { register, watch } = useForm<{ answer: string }>()

	// Отслеживаем изменения ответа
	const answer = watch('answer')
	React.useEffect(() => {
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
