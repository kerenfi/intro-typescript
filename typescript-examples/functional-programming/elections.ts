interface Person {
    birthCountry: string;
    naturalizationDate: Date | null;
    age: number;
}

const either = <T1>(
   f: (a: T1) => boolean,
   g: (a: T1) => boolean
) => (arg: T1) => f(arg) || g(arg);

const both = <T1>(
   f: (a: T1) => boolean,
   g: (a: T1) => boolean
) => (arg: T1) => f(arg) && g(arg);

const OUR_COUNTRY = "Ireland";
const wasBornInCountry = (person: Person) => person.birthCountry === OUR_COUNTRY;
const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
const isOver18 = (person: Person) => person.age >= 18;
const isCitizen = either(wasBornInCountry, wasNaturalized);
export const isEligibleToVote = both(isOver18, isCitizen);