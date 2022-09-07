import { depthAtom } from '../root';
import { QuestionType } from '../../types';
import { atom } from 'jotai';
import { currentQuestionAtom, selectedAnwerIdState, selectedAnwerIdsAtom } from './questions';

export const canNavigatePreviousPageAtom = atom((get) => {
  const depth = get(depthAtom);

  return depth > 0;
});

export const canNavigateNextPageAtom = atom((get) => {
  const currentQuestion = get(currentQuestionAtom);
  const selectedAnswerId = get(selectedAnwerIdState);
  const selectedAnswerIds = get(selectedAnwerIdsAtom);

  if (currentQuestion) {
    if (currentQuestion.type === QuestionType.Simple) {
      return selectedAnswerId;
    } else {
      if (currentQuestion.minAnswers && currentQuestion.maxAnswers) {
        return (
          selectedAnswerIds &&
          selectedAnswerIds.length >= currentQuestion.minAnswers &&
          selectedAnswerIds.length <= currentQuestion.maxAnswers
        );
      } else if (currentQuestion.minAnswers && currentQuestion.maxAnswers) {
        return selectedAnswerIds && selectedAnswerIds.length >= currentQuestion.minAnswers;
      } else if (currentQuestion.minAnswers && currentQuestion.maxAnswers) {
        return selectedAnswerIds && selectedAnswerIds.length <= currentQuestion.maxAnswers;
      } else {
        return true;
      }
    }
  }

  return false;
});

export const pagesState = atom((get) => {
  const depth = get(depthAtom);

  const pages: number[] = [];

  for (let i = 0; i <= depth; i++) {
    pages.push(i);
  }

  return pages;
});
