const either = (f, g) => arg => f(arg) || g(arg);
const both = (f, g) => arg => f(arg) && g(arg);
const OUR_COUNTRY = "Israel";
const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY;
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;
const isCitizen = either(wasBornInCountry, wasNaturalized);

//const isEligibleToVote = arg => isOver18(arg) && isCitizen(arg);
export const isEligibleToVote = both(isOver18, isCitizen);
