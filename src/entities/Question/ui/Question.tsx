import {
	LongAnswerQuestion,
	MultipleChoiceQuestion,
	ShortAnswerQuestion,
	SingleChoiceQuestion,
} from '../index'
import {
	QuestionType as QuestionEnum,
	Question as QuestionType,
} from '../model/types'

interface QuestionProps {
	question: QuestionType
	onAnswerSelect: (answer: string | string[]) => void
	savedAnswer?: string | string[] | null
}

const QuestionComponents = {
	[QuestionEnum.Single]: SingleChoiceQuestion,
	[QuestionEnum.Multiple]: MultipleChoiceQuestion,
	[QuestionEnum.Short]: ShortAnswerQuestion,
	[QuestionEnum.Long]: LongAnswerQuestion,
}

function Question({ question, onAnswerSelect }: QuestionProps) {
	const SpecificQuestionComponent = QuestionComponents[question.type]

	return SpecificQuestionComponent ? (
		<SpecificQuestionComponent
			question={question}
			onAnswerSelect={onAnswerSelect}
		/>
	) : (
		<div>Неизвестный тип вопроса</div>
	)
}

export default Question
