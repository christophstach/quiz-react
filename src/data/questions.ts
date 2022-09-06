import { QuestionType, type Question } from '../types';

export const questions: Question[] = [
  {
    id: '2',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Target.png',
    text: 'Welches dieser Ziele steht bei dir im Fokus?',
    answerIds: ['21', '22', '23', '24'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '100',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/MoneyChart.png',
    text: 'Möchtest du auch einen Blick auf deine Investitionspotenziale werfen?',
    answerIds: ['1001', '1002'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '101',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/SparenPig.png',
    text: 'Möchtest du auch einen Blick auf deine Sparpotenziale werfen?',
    answerIds: ['1011', '1012'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '102',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Shield.png',
    text: 'Möchtest du auch einen Blick auf deine Absicherungslücken werfen?',
    answerIds: ['1021', '1022'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '3',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Verteilung.png',
    text: 'Hast du einen Überblick über deine monatlichen Einnahmen und Ausgaben?',
    answerIds: ['31', '32', '33'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '4',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Versicherung.png',
    text: 'Hast du in den letzten 12 Monaten einen dieser Verträge gewechselt ',
    answerIds: ['41', '42', '43'],
    followUpQuestionId: '5',
    selectedAnswerIds: null,
    type: QuestionType.MultipleChoice,
    minAnswers: null,
    maxAnswers: null,
  },

  {
    id: '5',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/House.png',
    text: 'Wie ist deine Wohnsituation?',
    answerIds: ['51', '52', '53'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '6',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Ordner.png',
    text: 'Wie beschäftigst du dich mit deiner Steuererklärung?',
    answerIds: ['61', '62', '63', '64'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '7',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Banking2.png',
    text: 'Bei welcher der folgenden Banken hast du dein Hauptkonto?',
    answerIds: ['71', '72', '73', '74'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '8',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Abos.png',
    text: 'Hast du einen Überblick über deine aktuellen Abos und Verträge?',
    answerIds: ['81', '82', '83'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '9',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/AppsHandy.png',
    text: 'Könntest du dir vorstellen eine App zu nutzen, um deine Finanzen besser zu sortieren?',
    answerIds: ['91', '92'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '10',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Kreditkarte.png',
    text: 'Wie viele kostenlose Kreditkarten besitzt du?',
    answerIds: ['101', '102', '103', '104', '105'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '11',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Flugzeug.png',
    text: 'Wie oft reist du ins Ausland?',
    answerIds: ['111', '112', '113'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '12',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Auto.png',
    text: 'Hast du ein privates Auto?',
    answerIds: ['121', '122'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '13',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Doktor.png',
    text: 'Bei welcher gesetzlichen Krankenkasse bist du?',
    answerIds: ['131', '132', '133', '134'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '14',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Schulden.png',
    text: 'Hast du Konsumschulden oder andere Kredite?',
    answerIds: ['141', '142', '143'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '15',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Stock.png',
    text: 'Besitzt du ein Aktiendepot?',
    answerIds: ['151', '152'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '16',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Verteilung.png',
    text: 'Hast du einen akutell eingen guten Überblick über deine Vermögenshöhe?',
    answerIds: ['161', '162', '163'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '17',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Notgroschen-1.png',
    text: 'Hast du bereit eine Notfallreserve von mehr als 3 Monatsgehälter aufgebaut?',
    answerIds: ['171', '172', '173'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '18',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Danger.png',
    text: 'Wie schätzt du deine Risikotoleranz ein?',
    answerIds: ['181', '182', '183'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '19',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Nachhaltigkeit-Icon.png',
    text: 'Inwiefern spielt Nachhaltigkeit für dich eine Rolle?',
    answerIds: ['191', '192', '193'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '20',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Stock.png',
    text: 'In welchen Anlageformen hast du zur Zeit dein Vermögen angelegt?',
    answerIds: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    selectedAnswerIds: null,
    followUpQuestionId: '21',
    type: QuestionType.MultipleChoice,
    minAnswers: null,
    maxAnswers: null,
  },

  {
    id: '21',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Lernen.png',
    text: 'Über welches Thema würdest du gerne mehr erfahren?',
    answerIds: ['2110', '2111', '2112', '2113', '2114', '2115', '2116', '2117', '2118', '2119', '2120', '2120'],
    selectedAnswerIds: null,
    followUpQuestionId: '22',
    type: QuestionType.MultipleChoice,
    minAnswers: null,
    maxAnswers: null,
  },

  {
    id: '22',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/baby.png',
    text: 'Hast du bereits Kinder oder diese in Planung?',
    answerIds: ['221', '222'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '23',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Altersvorsorge.png',
    text: 'Möchtest du deinen Vermögensaufbau komplett selbstständig angehen oder Dinge abgeben?',
    answerIds: ['231', '232'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '24',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Notfallmappebild.png',
    text: 'Hast du einen Notfallordner, um für Notfälle abgesichert zu sein?',
    answerIds: ['241', '242'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '25',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Versicherung.png',
    text: 'Welche dieser Versicherungen besitzt du?',
    answerIds: ['251', '252', '253', '254', '255', '256'],
    selectedAnswerIds: null,
    followUpQuestionId: '26',
    type: QuestionType.MultipleChoice,
    minAnswers: null,
    maxAnswers: null,
  },

  {
    id: '26',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/03/Bank.png',
    text: 'Besitzt du eine Patientenverfügung und ein Testament?',
    answerIds: ['261', '262', '263', '264', '265'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '27',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/App.png',
    text: 'Hättest du Lust dir bei deinen Versicherungen helfen zu lassen?',
    answerIds: ['271', '272', '273'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '28',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Glaubenssatz.png',
    text: 'Hast du dich schon einmal mit deinen Glaubensätzen, die dich an erfolgreichen Finanzen hindern können auseinander gesetzt?',
    answerIds: ['281', '282', '283'],
    selectedAnswerId: null,
    type: QuestionType.Simple,
  },

  {
    id: '29',
    icon: 'https://andreasjansen.com/wp-content/uploads/2022/09/Lernen.png',
    text: 'Wie würdest du am liebsten weiter dein Finanzwissen aufbauen?',
    answerIds: ['291', '292', '293', '294', '295', '296', '297'],
    selectedAnswerIds: null,
    followUpQuestionId: '30',
    type: QuestionType.MultipleChoice,
    minAnswers: null,
    maxAnswers: null,
  },
];
