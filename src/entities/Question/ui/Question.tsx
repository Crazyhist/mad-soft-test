import { Question as QuestionType } from '../model/types'
import LongAnswerQuestion from './LongAnswerQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import ShortAnswerQuestion from './ShortAnswerQuestion'
import SingleChoiceQuestion from './SingleChoiceQuestion'

interface QuestionProps {
	question: QuestionType
	onAnswerSelect: (answer: string | string[]) => void
	savedAnswer?: string | string[] | null
}

function Question({ question, onAnswerSelect }: QuestionProps) {
	switch (question.type) {
		case 'single':
			return (
				<SingleChoiceQuestion
					question={question}
					onAnswerSelect={onAnswerSelect}
				/>
			)
		case 'multiple':
			return (
				<MultipleChoiceQuestion
					question={question}
					onAnswerSelect={onAnswerSelect}
				/>
			)
		case 'short':
			return (
				<ShortAnswerQuestion
					question={question}
					onAnswerSelect={onAnswerSelect}
				/>
			)
		case 'long':
			return (
				<LongAnswerQuestion
					question={question}
					onAnswerSelect={onAnswerSelect}
				/>
			)
		default:
			return <div>Неизвестный тип вопроса</div>
	}
}

export default Question
