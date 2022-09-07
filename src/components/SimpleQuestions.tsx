import { Question } from '../types';

import { answersAtom } from '../atoms/root';
import { findById } from '../atoms/helpers';
import { useAtomValue } from 'jotai';

export type SimpleQuestionProps = {
  question: Question;
  selectedAnswerId?: string | null;
  onAnswerSelected: (answerId: string) => void;
};

export default function SimpleQuestion(props: SimpleQuestionProps) {
  const { question, selectedAnswerId = null, onAnswerSelected } = props;
  const answers = useAtomValue(answersAtom);

  const questionsAnswers = question.answerIds.map((answerId) => findById(answers, answerId));

  function handleAnswerSelected(answerId: string): void {
    onAnswerSelected(answerId);
  }

  return (
    <>
      <div className="tw-flex tw-items-center tw-mb-10">
        {question.icon && (
          <div className="tw-pr-5">
            <img className="tw-w-8 tw-h-8" src={question.icon} alt="Question Icon" />
          </div>
        )}

        <h1 className="tw-flex-1 tw-text-jansen-purple tw-font-bold tw-text-lg tw-text-center">{question.text}</h1>
      </div>

      {questionsAnswers.map(
        (answer) =>
          answer && (
            <label
              key={answer.id}
              htmlFor={`simple-answer-${answer.id}`}
              className="tw-cursor-pointer tw-border-jansen-purple tw-border tw-my-5 tw-p-5 tw-text-jansen-purple tw-flex tw-gap-3 tw-items-center"
            >
              <div className="flex items-center">
                <input
                  name="simple-answer"
                  type="radio"
                  id={`simple-answer-${answer.id}`}
                  value={answer.id}
                  defaultChecked={answer.id === selectedAnswerId}
                  onClick={() => handleAnswerSelected(answer.id)}
                />
              </div>

              <div>{answer.text}</div>
            </label>
          )
      )}
    </>
  );
}
