import SimpleQuestion from './components/SimpleQuestions';

export enum QuestionType {
  Simple = 'SIMPLE',
  MultipleChoice = 'MULTIPLE_CHOICE',
}

export type Question = ISimpleQuestion | IMultipleChoiceQuestion;

export interface ISimpleQuestion {
  id: string;
  icon: string | null;
  text: string;
  answerIds: string[];
  selectedAnswerId: string | null;
  type: QuestionType.Simple;
}

export interface IMultipleChoiceQuestion {
  id: string;
  icon: string | null;
  text: string;
  answerIds: string[];
  selectedAnswerIds: string[] | null;
  type: QuestionType.MultipleChoice;
  followUpQuestionId: string | null;
  minAnswers: number | null;
  maxAnswers: number | null;
}

export type SummaryQuestion = Question & {
  answers: SummaryAnswer[];
};

export type Answer = {
  id: string;
  text: string;
  followUpQuestionId: string | null;
};

export type SummaryAnswer = Answer & {
  selected: boolean;
};
