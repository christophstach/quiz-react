import { useRecoilValue } from 'recoil';
import { answersState } from '../state/atoms';
import { findById } from '../state/utils';
import { Question } from '../types';

export type MultipleChoiceQuestionProps = {
  question: Question;
  selectedAnswerIds?: string[] | null;
  onAnswersSelected: (answerIds: string[]) => void;
};

export default function MultipleChoiceQuestion(props: MultipleChoiceQuestionProps) {
  const { question, selectedAnswerIds = [], onAnswersSelected } = props;
  const answers = useRecoilValue(answersState);

  const questionsAnswers = question.answerIds.map((answerId) => findById(answers, answerId));

  let checkBoxValues: string[] = selectedAnswerIds ? [...selectedAnswerIds] : [];

  function handleCheckBoxClick(value: string) {
    if (!checkBoxValues.includes(value)) {
      checkBoxValues = [...checkBoxValues, value];
    } else {
      checkBoxValues = checkBoxValues.filter((checkBoxValue) => checkBoxValue !== value);
    }

    onAnswersSelected(checkBoxValues);
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
              htmlFor={`multiple-choice-answer-${answer.id}`}
              className="tw-cursor-pointer tw-border-jansen-purple tw-border tw-my-5 tw-p-5 tw-text-jansen-purple tw-flex tw-gap-3 tw-items-center"
            >
              <div className="tw-flex tw-items-center">
                <input
                  name="multiple-choice-answer"
                  type="checkbox"
                  id={`multiple-choice-answer-${answer.id}`}
                  value={answer.id}
                  defaultChecked={selectedAnswerIds?.includes(answer.id)}
                  onClick={() => handleCheckBoxClick(answer.id)}
                />
              </div>

              <div>{answer.text}</div>
            </label>
          )
      )}
    </>
  );
}
