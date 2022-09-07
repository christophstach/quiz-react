import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';

import { depthState } from '../state/atoms';
import {
  canNavigateNextPageState,
  canNavigatePreviousPageState,
  currentQuestionState,
  formDataState,
  payloadState,
  selectedAnwerIdsState,
  selectedAnwerIdState,
} from '../state/selectors';
import { formDataToUrlParams } from '../state/utils';

import { QuestionType } from '../types';
import { MailForm } from './MailForm';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Rootline from './Rootline';
import SimpleQuestion from './SimpleQuestions';

export default function Quiz() {
  const [depth, setDepth] = useAtom(depthState);
  const [selectedAnswerId, setSelectedAnswerId] = useAtom(selectedAnwerIdState);
  const [selectedAnswerIds, setSelectedAnswerIds] = useAtom(selectedAnwerIdsState);

  const currentQuestion = useAtomValue(currentQuestionState);
  const payload = useAtomValue(payloadState);
  const formData = useAtomValue(formDataState);

  const canNavigatePreviousPage = useAtomValue(canNavigatePreviousPageState);
  const canNavigateNextPage = useAtomValue(canNavigateNextPageState);

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

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

  function handleMailFormSubmit(firstName: string, email: string): void {
    setLoading(false);

    const json = JSON.stringify({
      ...payload,
      firstName: firstName,
      email: email,
    });

    formData.append('firstName', firstName);
    formData.append('email', email);
    console.log(json);

    // 'https://andreasjansen.com/backend/subscribe.php'
    fetch('http://localhost:5003', {
      method: 'POST',
      body: json,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      setLoading(false);
      setEmailSent(true);

      const link = `https://andreasjansen.com/ergebnis/${formDataToUrlParams(formData)}`;
      // alert(link);
      //window.location.replace(link);
    });
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
              {emailSent && false ? (
                <h1 className="tw-text-jansen-purple tw-font-bold tw-text-2xl tw-text-center">
                  Ihre Auswertung ist auf dem Weg sie werden weitergeleitet...
                </h1>
              ) : (
                <>
                  {loading ? (
                    <div className="tw-flex tw-justify-center">
                      <img
                        src="https://andreasjansen.com/wp-content/uploads/2022/03/Ladezeichen.gif"
                        alt="Loading..."
                      />
                    </div>
                  ) : (
                    <MailForm onSubmit={handleMailFormSubmit} />
                  )}
                </>
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}
