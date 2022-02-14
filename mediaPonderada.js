const subjects = [
     { name: "Fundamentos de redes", note: 8, credit: 3 },
     { name: "Programación cliente-servidor", note: 10, credit: 5 },
     { name: "Ética profesional", note: 9, credit: 1 },
     { name: "Sistemas digitales", note: 7, credit: 2 },
     { name: "Matemáticas para ingeniería II", note: 9, credit: 4 },
];

const sumOfCredits = subjects.map(({credit}) => credit).reduce((a,b) => a+b);

const notesWithCredit = subjects.map(subject => subject.note * subject.credit);

const sumOfNotesWithCredit = notesWithCredit.reduce((a,b) => a+b);

const ponderedAvarage = sumOfNotesWithCredit / sumOfCredits;

