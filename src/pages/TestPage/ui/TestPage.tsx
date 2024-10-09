import Question from '@/entities/Question/ui/Question'
import useTestStore from '@/features/TestProgress/model/useTestStore'
import { mockTest } from '@/shared/api/mockTest'
import { formatTime } from '@/shared/utils/timeUtils'
import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TestPage: React.FC = () => {
	const {
		currentQuestionIndex,
		timeLeft,
		setAnswer,
		nextQuestion,
		decrementTime,
		resetTest,
		setTimeLeft,
	} = useTestStore()

	const currentQuestion = mockTest.questions[currentQuestionIndex]
	const [currentAnswer, setCurrentAnswer] = useState<string | string[] | null>(
		null
	)

	const handleAnswerSelect = (answer: string | string[]) => {
		setCurrentAnswer(answer)
	}

	const confirmAnswer = () => {
		if (currentAnswer !== null) {
			setAnswer(currentQuestion.id, currentAnswer)
			setCurrentAnswer(null)
			nextQuestion()
		}
	}

	const restartTest = () => {
		resetTest()
		setTimeLeft(mockTest.timeLimit || 1200)
		setCurrentAnswer(null)
	}

	useEffect(() => {
		if (mockTest.timeLimit && timeLeft === mockTest.timeLimit) {
			setTimeLeft(mockTest.timeLimit)
		}

		if (timeLeft > 0) {
			const timer = setInterval(() => decrementTime(), 1000)
			return () => clearInterval(timer)
		} else if (timeLeft === 0) {
			resetTest()
		}
	}, [timeLeft, decrementTime, resetTest, setTimeLeft])

	return (
		<Container
			maxWidth='sm'
			sx={{
				mt: 4,
				p: 3,
				borderRadius: 2,
				boxShadow: 3,
				bgcolor: 'background.paper',
			}}
		>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				mb={2}
			>
				<Typography variant='h4' component='h1'>
					{mockTest.title}
				</Typography>
				<Typography variant='subtitle1' color='textSecondary'>
					{formatTime(timeLeft)}
				</Typography>
			</Box>

			{/* Навигационная шкала */}
			<Box display='flex' justifyContent='center' alignItems='center' mb={4}>
				{mockTest.questions.map((_, index) => (
					<Box
						key={index}
						sx={{
							width: 30,
							height: 10,
							bgcolor:
								index <= currentQuestionIndex ? 'primary.main' : 'grey.300',
							mx: 0.5,
							borderRadius: 1,
						}}
					/>
				))}
			</Box>

			{currentQuestion ? (
				<Box>
					<Question
						question={currentQuestion}
						onAnswerSelect={handleAnswerSelect}
					/>
					<Button
						variant='contained'
						color='primary'
						onClick={confirmAnswer}
						disabled={
							currentAnswer === null ||
							(Array.isArray(currentAnswer) && currentAnswer.length === 0) ||
							(typeof currentAnswer === 'string' && currentAnswer.trim() === '')
						}
						sx={{ mt: 2 }}
					>
						Ответить
					</Button>
				</Box>
			) : (
				<Box textAlign='center'>
					<Typography variant='h5' color='success.main' gutterBottom>
						Тест завершен!
					</Typography>
					<Button variant='contained' color='primary' onClick={restartTest}>
						Пройти тест заново
					</Button>
				</Box>
			)}
		</Container>
	)
}

export default TestPage
