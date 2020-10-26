import  { isEligibleToVote } from  './elections';

const result = isEligibleToVote({
    age: 28,
    birthCountry: "Israel",
    naturalizationDate: null
});

console.log(result);
