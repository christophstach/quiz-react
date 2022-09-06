import { useRecoilState, useRecoilValue } from 'recoil';
import { depthState } from '../state/atoms';
import {
  canNavigateNextPageState,
  canNavigatePreviousPageState,
  currentQuestionState,
  selectedAnwerIdsState,
  selectedAnwerIdState,
  summaryQuestionsState,
} from '../state/selectors';

import { QuestionType } from '../types';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Rootline from './Rootline';
import SimpleQuestion from './SimpleQuestions';
import Summary from './Summary';

export default function Quiz() {
  const [depth, setDepth] = useRecoilState(depthState);
  const [selectedAnswerId, setSelectedAnswerId] = useRecoilState(selectedAnwerIdState);
  const [selectedAnswerIds, setSelectedAnswerIds] = useRecoilState(selectedAnwerIdsState);

  const currentQuestion = useRecoilValue(currentQuestionState);
  const summaryQuestions = useRecoilValue(summaryQuestionsState);

  const canNavigatePreviousPage = useRecoilValue(canNavigatePreviousPageState);
  const canNavigateNextPage = useRecoilValue(canNavigateNextPageState);

  function handleAnswerSelected(answerId: string): void {
    setSelectedAnswerId(answerId);
    handleNext();
  }

  function handleAnswersSelected(answerIds: string[]): void {
    setSelectedAnswerIds(answerIds);
  }

  function handlePrev(): void {
    setDepth(depth - 1);
  }

  function handleNext(): void {
    setDepth(depth + 1);
  }

  return (
    <div className="tw-p-10 tw-min-h-full">
      <div className="tw-shadow-quiz tw-flex tw-flex-col tw-max-w-[960px] tw-mx-auto">
        <div className="tw-flex tw-justify-between tw-pt-3">
          <div className="tw-bg-jansen-purple tw-text-white tw-p-3 -tw-ml-3">Seite {depth + 1}</div>

          <div className="tw-bg-jansen-yellow tw-text-white tw-p-3 -tw-mr-3">Zu 100% für 0 Euro</div>
        </div>

        <div className="tw-p-10">
          <Rootline />
        </div>

        {currentQuestion ? (
          <>
            {' '}
            <div className="tw-pb-10 tw-px-10">
              {currentQuestion.type === QuestionType.Simple ? (
                <SimpleQuestion
                  question={currentQuestion}
                  selectedAnswerId={selectedAnswerId}
                  onAnswerSelected={handleAnswerSelected}
                />
              ) : (
                <MultipleChoiceQuestion
                  question={currentQuestion}
                  selectedAnswerIds={selectedAnswerIds}
                  onAnswersSelected={handleAnswersSelected}
                />
              )}
            </div>
            <div className="tw-border-t tw-border-jansen-purple tw-px-10 tw-py-5 tw-flex tw-justify-between">
              <button
                className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                onClick={handlePrev}
                disabled={!canNavigatePreviousPage}
              >
                Zurück
              </button>

              <button
                className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                onClick={handleNext}
                disabled={!canNavigateNextPage}
              >
                Weiter
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="tw-p-10">
              <h1 className="tw-text-jansen-purple tw-font-bold tw-text-2xl tw-text-center">
                Vielen Danke die Teilnahme am Quiz!
              </h1>

              <Summary questions={summaryQuestions} />
            </div>
            <div className="tw-border-t tw-border-jansen-purple tw-px-10 tw-py-5 tw-flex tw-justify-between">
              <button
                className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                onClick={handlePrev}
                disabled={!canNavigatePreviousPage}
              >
                Zurück
              </button>

              <button
                className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                onClick={handleNext}
                disabled={!canNavigateNextPage}
              >
                Weiter
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}