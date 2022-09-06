import { selector } from 'recoil';
import { findById, getCurrentQuestion, isQuestionAnswered } from './utils';
import { answersState, depthState, questionsState } from './atoms';
import { Answer, IMultipleChoiceQuestion, ISimpleQuestion, Question, QuestionType, SummaryQuestion } from '../types';
import produce from 'immer';

export const currentQuestionState = selector({
  key: 'currentQuestionState',
  get: ({ get }) => {
    const questions = get(questionsState);
    const answers = get(answersState);
    const depth = get(depthState);

    return getCurrentQuestion(questions, answers, questions[0], depth);
  },
});

export const answeredQuestionsState = selector({
  key: 'answeredQuestionsState',
  get: ({ get }) => {
    const questions = get(questionsState);

    return questions.filter(isQuestionAnswered);
  },
});

export const selectedAnwerIdState = selector({
  key: 'selectedAnwerIdState',
  get: ({ get }) => {
    const currentQuestion = get(currentQuestionState);

    if (currentQuestion?.type === QuestionType.Simple) {
      return currentQuestion.selectedAnswerId;
    } else {
      return undefined;
    }
  },
  set: ({ set, get }, value) => {
    const questions = get(questionsState);
    const currentQuestion = get(currentQuestionState);

    if (currentQuestion && currentQuestion.type === QuestionType.Simple) {
      const nextState = produce(questions, (draft) => {
        const idx = draft.findIndex((question) => question.id === currentQuestion.id);
        (draft[idx] as ISimpleQuestion).selectedAnswerId = value as string;
      });

      set(questionsState, nextState);
    }
  },
});

export const selectedAnwerIdsState = selector({
  key: 'selectedAnwerIdsState',
  get: ({ get }) => {
    const currentQuestion = get(currentQuestionState);

    if (currentQuestion?.type === QuestionType.MultipleChoice) {
      return currentQuestion.selectedAnswerIds;
    } else {
      return undefined;
    }
  },
  set: ({ set, get }, value) => {
    const questions = get(questionsState);
    const currentQuestion = get(currentQuestionState);

    if (currentQuestion && currentQuestion.type === QuestionType.MultipleChoice) {
      const nextState = produce(questions, (draft) => {
        const idx = draft.findIndex((question) => question.id === currentQuestion.id);
        (draft[idx] as IMultipleChoiceQuestion).selectedAnswerIds = value as string[];
      });

      set(questionsState, nextState);
    }
  },
});

export const summaryQuestionsState = selector({
  key: 'summaryQuestionsState',
  get: ({ get }) => {
    const questions = get(questionsState);
    const answers = get(answersState);

    let summaryQuestions: Question[] = [];
    let nextQuestion: Question | undefined | null = questions[0]; // Achtung hier ggf ausm store holen;

    while (nextQuestion && isQuestionAnswered(nextQuestion)) {
      summaryQuestions = [...summaryQuestions, nextQuestion];

      if (nextQuestion.type === QuestionType.Simple) {
        const selectedAnswer = findById(answers, nextQuestion.selectedAnswerId) as Answer | undefined;

        if (selectedAnswer && selectedAnswer.followUpQuestionId) {
          nextQuestion = findById(questions, selectedAnswer.followUpQuestionId);
        } else {
          nextQuestion = null;
        }
      } else {
        if (nextQuestion.followUpQuestionId) {
          nextQuestion = findById(questions, nextQuestion.followUpQuestionId);
        } else {
          nextQuestion = null;
        }
      }
    }

    return summaryQuestions.map((summaryQuestion) => {
      return {
        ...summaryQuestion,
        answers: summaryQuestion.answerIds.map((answerId) => {
          const selected =
            summaryQuestion.type === QuestionType.Simple
              ? summaryQuestion.selectedAnswerId === answerId
              : summaryQuestion.selectedAnswerIds?.includes(answerId);

          return {
            ...findById(answers, answerId),
            selected,
          };
        }),
      } as SummaryQuestion;
    });
  },
});

export const canNavigatePreviousPageState = selector({
  key: 'canNavigatePreviousPageState',
  get: ({ get }) => {
    const depth = get(depthState);

    return depth > 0;
  },
});

export const canNavigateNextPageState = selector({
  key: 'canNavigateNextPageState',
  get: ({ get }) => {
    const currentQuestion = get(currentQuestionState);
    const selectedAnswerId = get(selectedAnwerIdState);
    const selectedAnswerIds = get(selectedAnwerIdsState);

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
  },
});

export const pagesState = selector({
  key: 'pagesState',
  get: ({ get }) => {
    const depth = get(depthState);

    const pages: number[] = [];

    for (let i = 0; i <= depth; i++) {
      pages.push(i);
    }

    return pages;
  },
});
