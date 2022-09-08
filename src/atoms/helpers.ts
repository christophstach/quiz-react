import { Answer, Question, QuestionType, SummaryQuestion } from '../types';

export function findById<T extends { id: K }, K>(entities: T[], id: K): T | undefined {
  if (id) {
    return entities.find((entity) => entity.id === id);
  }
}

export function isQuestionAnswered(question: Question): boolean {
  if (question.type === QuestionType.Simple) {
    return question.selectedAnswerId !== null;
  } else if(question.type === QuestionType.MultipleChoice) {
    if (question.minAnswers && question.maxAnswers) {
      return (
        question.selectedAnswerIds !== null &&
        question.selectedAnswerIds.length >= question.minAnswers &&
        question.selectedAnswerIds.length <= question.maxAnswers
      );
    } else if (question.minAnswers && !question.maxAnswers) {
      return question.selectedAnswerIds !== null && question.selectedAnswerIds.length >= question.minAnswers;
    } else if (!question.minAnswers && question.maxAnswers) {
      return question.selectedAnswerIds !== null && question.selectedAnswerIds.length <= question.maxAnswers;
    } else {
      return question.selectedAnswerIds !== null;
    }
  } else {
    return false;
  }
}

export function getSummaryQuestions(questions: Question[], answers: Answer[]): SummaryQuestion[] {
  let summaryQuestions: Question[] = [];
  let nextQuestion: Question | undefined | null = questions[0]; // Achtung hier ggf ausm store holen;

  while (nextQuestion && isQuestionAnswered(nextQuestion)) {
    summaryQuestions = [...summaryQuestions, nextQuestion];

    if (nextQuestion.type === QuestionType.Simple) {
      if (nextQuestion.selectedAnswerId) {
        const selectedAnswer = findById(answers, nextQuestion.selectedAnswerId) as Answer | undefined;

        if (selectedAnswer) {
          if (selectedAnswer.followUpQuestionId) {
            nextQuestion = findById(questions, selectedAnswer.followUpQuestionId);
          } else {
            nextQuestion = null;
          }
        } else {
          nextQuestion = null;
        }
      } else {
        nextQuestion = null;
      }
    } else if (nextQuestion.type === QuestionType.MultipleChoice) {
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
          ...findById(answers, answerId)!,
          selected,
        };
      }),
    } as SummaryQuestion;
  });
}

export function getCurrentQuestion(
  questions: Question[],
  answers: Answer[],
  question: Question,
  depth: number
): Question | null {
  if (depth > 0 && isQuestionAnswered(question)) {
    let followUpQuestion: Question | undefined;

    if (question.type === QuestionType.Simple) {
      const selectedAnswer = findById(answers, question.selectedAnswerId);
      followUpQuestion = findById(questions, selectedAnswer?.followUpQuestionId);
    } else {
      followUpQuestion = findById(questions, question.followUpQuestionId);
    }

    if (followUpQuestion) {
      return getCurrentQuestion(questions, answers, followUpQuestion, depth - 1);
    } else {
      return null;
    }
  } else if (depth === 0) {
    return question;
  } else {
    return null;
  }
}

export function formDataToUrlParams(formData: FormData) {
  const data = [...formData.entries()];

  return data
    .map((entry) => {
      if (data.filter((x) => x[0] === entry[0]).length > 1) {
        // doppelt
        return `${encodeURIComponent(entry[0])}[]=${encodeURIComponent(entry[1] as string)}`;
      } else {
        return `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1] as string)}`;
      }
    })
    .join('&');
}
