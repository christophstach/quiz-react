import { atom } from 'recoil';
import { answers } from '../data/answers';
import { questions } from '../data/questions';
import { Answer, Question } from '../types';

export const depthState = atom<number>({
  key: 'depthState',
  default: 0,
});

export const questionsState = atom<Question[]>({
  key: 'questionsState',
  default: questions,
});

export const answersState = atom<Answer[]>({
  key: 'answersState',
  default: answers,
});
