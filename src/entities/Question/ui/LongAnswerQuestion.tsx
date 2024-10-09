import React from 'react';
import { useForm } from 'react-hook-form';
import { Question as QuestionType } from '../model/types';

interface LongAnswerQuestionProps {
  question: QuestionType;
  onAnswerSelect: (answer: string) => void;
}

const LongAnswerQuestion = ({ question, onAnswerSelect }: LongAnswerQuestionProps) => {
  const { register, watch } = useForm<{ answer: string }>();

  // Отслеживаем изменения ответа
  const answer = watch('answer');
  React.useEffect(() => {
    if (answer) {
      onAnswerSelect(answer);
    }
  }, [answer, onAnswerSelect]);

  return (
    <form>
      <p>{question.question}</p>
      <label>
        <textarea
          rows={4}
          {...register('answer')}
          placeholder="Введите ответ"
        />
      </label>
    </form>
  );
};

export default LongAnswerQuestion;
