import { answersAtom, depthAtom, questionsAtom } from '../root';
import { Answer, IMultipleChoiceQuestion, ISimpleQuestion, Question, QuestionType, SummaryQuestion } from '../../types';
import produce from 'immer';
import { atom } from 'jotai';
import { findById, getCurrentQuestion, isQuestionAnswered } from '../helpers';

export const currentQuestionAtom = atom((get) => {
  const questions = get(questionsAtom);
  const answers = get(answersAtom);
  const depth = get(depthAtom);

  return getCurrentQuestion(questions, answers, questions[0], depth);
});

export const answeredQuestionsAtom = atom((get) => {
  const questions = get(questionsAtom);

  return questions.filter(isQuestionAnswered);
});

export const selectedAnwerIdState = atom(
  (get) => {
    const currentQuestion = get(currentQuestionAtom);

    if (currentQuestion?.type === QuestionType.Simple) {
      return currentQuestion.selectedAnswerId;
    } else {
      return undefined;
    }
  },
  (get, set, value) => {
    const questions = get(questionsAtom);
    const currentQuestion = get(currentQuestionAtom);

    if (currentQuestion && currentQuestion.type === QuestionType.Simple) {
      const nextState = produce(questions, (draft) => {
        const idx = draft.findIndex((question) => question.id === currentQuestion.id);
        (draft[idx] as ISimpleQuestion).selectedAnswerId = value as string;
      });

      set(questionsAtom, nextState);
    }
  }
);

export const selectedAnwerIdsAtom = atom(
  (get) => {
    const currentQuestion = get(currentQuestionAtom);

    if (currentQuestion?.type === QuestionType.MultipleChoice) {
      return currentQuestion.selectedAnswerIds;
    } else {
      return undefined;
    }
  },
  (get, set, value) => {
    const questions = get(questionsAtom);
    const currentQuestion = get(currentQuestionAtom);

    if (currentQuestion && currentQuestion.type === QuestionType.MultipleChoice) {
      const nextState = produce(questions, (draft) => {
        const idx = draft.findIndex((question) => question.id === currentQuestion.id);
        (draft[idx] as IMultipleChoiceQuestion).selectedAnswerIds = value as string[];
      });

      set(questionsAtom, nextState);
    }
  }
);

export const summaryQuestionsAtom = atom((get) => {
  const questions = get(questionsAtom);
  const answers = get(answersAtom);

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
    } else if(nextQuestion.type === QuestionType.MultipleChoice) {
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
});
