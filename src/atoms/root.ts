import { atom } from 'jotai';
import { answers } from '../data/answers';
import { questions } from '../data/questions';
import { atomWithStorage } from 'jotai/utils';

export const depthAtom = atomWithStorage('depthAtom', 0);
export const questionsAtom = atomWithStorage('questionsAtom', questions);
export const mailFormAtom = atomWithStorage('mailFormAtom', { firstName: '', email: '' });
export const answersAtom = atom(answers);
