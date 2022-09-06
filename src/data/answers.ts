import type { Answer } from '../types';

export const answers: Answer[] = [
  {
    id: '22',
    text: 'Meine Ausgaben senken',
    followUpQuestionId: '3',
  },

  {
    id: '23',
    text: 'Mein Vermögen oder Altersvorsorge aufbauen',
    followUpQuestionId: '16',
  },

  {
    id: '24',
    text: 'Absicherung für mich und meine Familie',
    followUpQuestionId: '24',
  },

  {
    id: '1001',
    text: 'Ja',
    followUpQuestionId: '16',
  },

  {
    id: '1002',
    text: 'Nein',
    followUpQuestionId: '102',
  },

  {
    id: '1011',
    text: 'Ja',
    followUpQuestionId: '0',
  },

  { id: '1012', text: 'Nein', followUpQuestionId: '0' },

  { id: '1021', text: 'Ja', followUpQuestionId: '24' },

  { id: '1022', text: 'Nein', followUpQuestionId: '29' },

  { id: '31', text: 'Ja', followUpQuestionId: '4' },

  { id: '32', text: 'Nein', followUpQuestionId: '4' },

  { id: '33', text: 'Ungefähr, aber die exakte Zahl kenne ich nicht', followUpQuestionId: '4' },

  { id: '41', text: 'Strom', followUpQuestionId: '5' },

  { id: '42', text: 'Internet', followUpQuestionId: '5' },

  { id: '43', text: 'Handy', followUpQuestionId: '5' },

  { id: '51', text: 'Ich wohne zur Untermiete in einer WG oder Wohung', followUpQuestionId: '6' },

  { id: '52', text: 'Ich bin Hauptmieter einer Mietwohnung oder WG', followUpQuestionId: '6' },

  { id: '53', text: 'Ich wohne im meiner eigenen Immobilie', followUpQuestionId: '6' },

  { id: '61', text: 'Ich habe noch nie eine Steuererklärung gemacht', followUpQuestionId: '7' },

  {
    id: '62',
    text: 'Ich mache meine Steuererklärung selber, habe aber kein gutes Gefühl dabei',
    followUpQuestionId: '7',
  },

  {
    id: '63',
    text: 'Ich habe ein gutes Gefühl meine Steuererklärung selbstständig auszufüllen',
    followUpQuestionId: '7',
  },

  { id: '64', text: 'Ich mache meine Steuer über einen Steuerberater', followUpQuestionId: '7' },

  { id: '71', text: 'Deutsche Bank, Postbank, Sparkasse oder Commerzbank', followUpQuestionId: '8' },

  { id: '72', text: 'Comdirect, DKB, Norisbank, ING oder N26', followUpQuestionId: '8' },

  { id: '73', text: 'Will ich nicht sagen', followUpQuestionId: '8' },

  { id: '74', text: 'Andere', followUpQuestionId: '8' },

  { id: '81', text: 'Ja', followUpQuestionId: '9' },

  { id: '82', text: 'Nein', followUpQuestionId: '9' },

  { id: '83', text: 'Ein bisschen, aber sortiert und strukturiert ist nichts ', followUpQuestionId: '9' },

  { id: '91', text: 'Ja', followUpQuestionId: '10' },

  { id: '92', text: 'Nein', followUpQuestionId: '10' },

  { id: '101', text: '0', followUpQuestionId: '11' },

  { id: '102', text: '1', followUpQuestionId: '11' },

  { id: '103', text: '2', followUpQuestionId: '11' },

  { id: '104', text: '3', followUpQuestionId: '11' },

  { id: '105', text: 'Mehr als 3', followUpQuestionId: '11' },

  { id: '111', text: 'Ich reise privat und beruflich viel ins Ausland', followUpQuestionId: '12' },

  { id: '112', text: 'Ich reise öfters mal, aber nur privat ins Ausland', followUpQuestionId: '12' },

  { id: '113', text: 'Ich reise seltener bis nie ins Ausland', followUpQuestionId: '12' },

  { id: '121', text: 'Ja', followUpQuestionId: '13' },

  { id: '122', text: 'Nein', followUpQuestionId: '13' },

  { id: '123', text: '', followUpQuestionId: '13' },

  { id: '131', text: 'HKK, BKK, IKK, Techniker', followUpQuestionId: '14' },

  { id: '132', text: 'AOK, Barmer, KKH, Actimondo, DAK, Knappschaft, SBK, VIACTIV, HEK', followUpQuestionId: '14' },

  { id: '133', text: 'Andere gesetzliche Krankenkasse', followUpQuestionId: '14' },

  { id: '134', text: 'Ich bin privat versichert', followUpQuestionId: '14' },

  { id: '141', text: 'Ja', followUpQuestionId: '15' },

  { id: '142', text: 'Nein', followUpQuestionId: '15' },

  { id: '143', text: 'Ja, aber nur für Investitionen (Wohnung, etc.)', followUpQuestionId: '15' },

  { id: '151', text: 'Ja, bei meiner Hausbank', followUpQuestionId: '100' },

  {
    id: '152',
    text: 'Ja, ich handel über Flatex, comdirect, onvista, DKB, Consors oder ING',
    followUpQuestionId: '100',
  },

  { id: '161', text: 'Ja, ich kenne die Höhe genau ', followUpQuestionId: '17' },

  { id: '162', text: 'Nein', followUpQuestionId: '17' },

  { id: '163', text: 'Ungefähr, aber die exakte Zahl kenne ich nicht', followUpQuestionId: '17' },

  { id: '171', text: 'Ja', followUpQuestionId: '18' },

  { id: '172', text: 'Nein', followUpQuestionId: '18' },

  { id: '173', text: 'Ich probiere mir gerade einen Notfallgroschen aufzubauen', followUpQuestionId: '18' },

  { id: '181', text: 'Ich gehe selten ein Risiko ein und sichere mich stehts ab', followUpQuestionId: '19' },

  { id: '182', text: 'Ich mag es gelegentlich etwas Risiko einzugehen', followUpQuestionId: '19' },

  { id: '183', text: 'Ich gehe gerne mal Risiko ein', followUpQuestionId: '19' },

  { id: '191', text: 'Ich interessiere mich nicht wirklich für Nachhaltigkeit', followUpQuestionId: '20' },

  { id: '192', text: 'Nachhaltigkeit interessiert mich, steht aber für mich nicht im Fokus', followUpQuestionId: '20' },

  { id: '193', text: 'Ich interessiere mich sehr für Nachhaltigkeit', followUpQuestionId: '20' },

  { id: '2011', text: 'Ich habe noch kein Geld investiert', followUpQuestionId: '0' },

  { id: '2012', text: 'Tagesgeld', followUpQuestionId: '0' },

  { id: '2013', text: 'Festgeld', followUpQuestionId: '0' },

  { id: '2014', text: 'Immobilien', followUpQuestionId: '0' },

  { id: '2015', text: 'Einzelaktien', followUpQuestionId: '0' },

  { id: '2016', text: 'Rohstoffe', followUpQuestionId: '0' },

  { id: '2017', text: 'ETFs', followUpQuestionId: '0' },

  { id: '2018', text: 'P2P-Kredite', followUpQuestionId: '0' },

  { id: '2019', text: 'Kryptowährungen', followUpQuestionId: '0' },

  { id: '2020', text: 'Optionen oder Hebelprodukte', followUpQuestionId: '0' },

  { id: '2021', text: 'Weiteres', followUpQuestionId: '0' },

  { id: '2022', text: 'Will ich nicht sagen', followUpQuestionId: '0' },

  { id: '2110', text: 'Ich habe noch keine Idee oder Interesse', followUpQuestionId: '0' },

  { id: '2111', text: 'Tagesgeld', followUpQuestionId: '0' },

  { id: '2112', text: 'Festgeld', followUpQuestionId: '0' },

  { id: '2113', text: 'Immobilien', followUpQuestionId: '0' },

  { id: '2114', text: 'Einzelaktien', followUpQuestionId: '0' },

  { id: '2115', text: 'ETFs', followUpQuestionId: '0' },

  { id: '2116', text: 'P2P-Kredite', followUpQuestionId: '0' },

  { id: '2117', text: 'Kryptowährungen', followUpQuestionId: '0' },

  { id: '2118', text: 'Rohstoffe', followUpQuestionId: '0' },

  { id: '2119', text: 'Optionen oder Hebelprodukte', followUpQuestionId: '0' },

  { id: '2120', text: 'Will ich nicht sagen', followUpQuestionId: '0' },

  { id: '221', text: 'Ja', followUpQuestionId: '23' },

  { id: '222', text: 'Nein', followUpQuestionId: '23' },

  { id: '231', text: 'Komplett selbstständig', followUpQuestionId: '102' },

  { id: '232', text: 'Könnte mir auch vorstellen Dinge abzugeben', followUpQuestionId: '102' },

  { id: '241', text: 'Ja', followUpQuestionId: '25' },

  { id: '242', text: 'Nein', followUpQuestionId: '25' },

  { id: '251', text: 'Private Krankenversicherung', followUpQuestionId: '0' },

  { id: '252', text: 'Hausratversicherung', followUpQuestionId: '0' },

  { id: '253', text: 'Privathaftpflichtversicherung', followUpQuestionId: '0' },

  { id: '254', text: 'Berufsunfähigkeitsversicherung', followUpQuestionId: '0' },

  { id: '255', text: 'Lebens- oder Rentenversicherung', followUpQuestionId: '0' },

  { id: '256', text: 'Risikolebensversicherung', followUpQuestionId: '0' },

  { id: '261', text: 'Nein', followUpQuestionId: '27' },

  { id: '262', text: 'Ich mache mir derzeit Gedanken, aber habe beides nicht', followUpQuestionId: '27' },

  { id: '263', text: 'Ja, beides', followUpQuestionId: '27' },

  { id: '264', text: 'Ich habe nur eine Patientenverfügung', followUpQuestionId: '27' },

  { id: '265', text: 'Ich habe nur ein Testament', followUpQuestionId: '27' },

  { id: '271', text: 'Ja', followUpQuestionId: '28' },

  { id: '272', text: 'Nein', followUpQuestionId: '28' },

  { id: '273', text: 'Ich könnte mir vorstellen digitale Versicherungstools zu nutzen', followUpQuestionId: '28' },

  { id: '281', text: 'Ja', followUpQuestionId: '29' },

  { id: '282', text: 'Nein', followUpQuestionId: '29' },

  { id: '283', text: 'Nein, aber habe ich auch keine Lust drauf!', followUpQuestionId: '29' },

  { id: '291', text: 'Newsletter', followUpQuestionId: '0' },

  { id: '292', text: 'Blog', followUpQuestionId: '0' },

  { id: '293', text: 'Persönliches Coaching', followUpQuestionId: '0' },

  { id: '294', text: 'Online-Kurs', followUpQuestionId: '0' },

  { id: '295', text: 'Video', followUpQuestionId: '0' },

  { id: '296', text: 'Bücher', followUpQuestionId: '0' },

  { id: '297', text: 'Podcast', followUpQuestionId: '0' },
];
