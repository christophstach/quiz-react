import { atom } from 'jotai';
import { answers } from '../data/answers';
import { questions } from '../data/questions';

export const depthState = atom(0);
export const questionsState = atom(questions);
export const answersState = atom(answers);
