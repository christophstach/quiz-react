import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';

import { depthAtom, mailFormAtom, questionsAtom } from '../atoms/root';
import { currentQuestionAtom, selectedAnwerIdsAtom, selectedAnwerIdState } from '../atoms/features/questions';
import { canNavigateNextPageAtom, canNavigatePreviousPageAtom } from '../atoms/features/pages';

import { formDataToUrlParams } from '../atoms/helpers';

import { QuestionType } from '../types';
import { MailForm } from './MailForm';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Rootline from './Rootline';
import SimpleQuestion from './SimpleQuestions';
import { formDataAtom, payloadAtom } from '../atoms/features/utils';
import { RESET } from 'jotai/utils';
import { config } from '../config';

export default function Quiz() {
  const setQuestions = useSetAtom(questionsAtom);
  const setMailForm = useSetAtom(mailFormAtom);

  const [depth, setDepth] = useAtom(depthAtom);
  const [selectedAnswerId, setSelectedAnswerId] = useAtom(selectedAnwerIdState);
  const [selectedAnswerIds, setSelectedAnswerIds] = useAtom(selectedAnwerIdsAtom);

  const currentQuestion = useAtomValue(currentQuestionAtom);
  const payload = useAtomValue(payloadAtom);
  const formData = useAtomValue(formDataAtom);

  const canNavigatePreviousPage = useAtomValue(canNavigatePreviousPageAtom);
  const canNavigateNextPage = useAtomValue(canNavigateNextPageAtom);

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

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

  function handleResetQuiz(): void {
    if (confirm('Willst du wirklich von vorne beginnen?')) {
      setDepth(RESET);
      setQuestions(RESET);
      setMailForm(RESET);
    }
  }

  function handleMailFormSubmit(firstName: string, email: string): void {
    setLoading(true);

    formData.append('firstName', firstName);

    const recommendationsLink = `${config.recommendationsLinkPrefix}${formDataToUrlParams(formData)}`;
    const json = JSON.stringify({
      ...payload,
      firstName,
      email,
      recommendationsLink
    });

    fetch(config.subscribeUrl, {
      method: 'POST',
      body: json,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setError(false);
        setLoading(false);
        setEmailSent(true);

        setDepth(RESET);
        setQuestions(RESET);
        setMailForm(RESET);

        window.location.replace(recommendationsLink);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  return (
    <div className="tw-p-10 tw-min-h-full">
      <div className="tw-shadow-quiz tw-flex tw-flex-col tw-max-w-[960px] tw-mx-auto">
        <div className="tw-flex tw-justify-between tw-pt-3">
          <div className="tw-bg-jansen-purple tw-text-white tw-p-3 -tw-ml-3">Seite {depth + 1}</div>

          <div className="tw-bg-jansen-yellow tw-text-white tw-p-3 -tw-mr-3">Zu 100% f??r 0 Euro</div>
        </div>

        {emailSent ? (
          <div className="tw-p-10">
            <h1 className="tw-text-jansen-purple tw-font-bold tw-text-2xl tw-text-center">
              Deine Auswertung ist auf dem Weg du wirst weitergeleitet...
            </h1>
          </div>
        ) : (
          <>
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
                <div className="tw-border-t tw-border-jansen-purple tw-px-10 tw-py-5 tw-flex tw-gap-3 tw-justify-between">
                  <div>
                    <button
                      className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                      onClick={handlePrev}
                      disabled={!canNavigatePreviousPage}
                    >
                      Zur??ck
                    </button>
                  </div>

                  <div>
                    <button className="tw-text-white tw-p-2 tw-bg-gray-500" onClick={handleResetQuiz}>
                      Neu beginnen
                    </button>
                  </div>

                  <div className="tw-flex-1 tw-text-right">
                    <button
                      className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                      onClick={handleNext}
                      disabled={!canNavigateNextPage}
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <MailForm onSubmit={handleMailFormSubmit} loading={loading} error={error} />

                <div className="tw-border-t tw-border-jansen-purple tw-px-10 tw-py-5 tw-flex tw-gap-3 tw-justify-between">
                  <div>
                    <button
                      className="tw-text-white tw-bg-jansen-yellow tw-p-2 disabled:tw-bg-gray-500"
                      onClick={handlePrev}
                      disabled={!canNavigatePreviousPage}
                    >
                      Zur??ck
                    </button>
                  </div>

                  <div className="tw-flex-1">
                    <button className="tw-text-white tw-p-2 tw-bg-gray-500" onClick={handleResetQuiz}>
                      Neu beginnen
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
