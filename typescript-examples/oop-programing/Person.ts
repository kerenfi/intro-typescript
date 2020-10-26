const OUR_COUNTRY = "Israel";

export default class Person {

    private readonly birthCountry: string;
    private readonly naturalizationDate?: Date;
    private readonly age: number;

    public constructor(
        birthCountry: string,
        age: number,
        naturalizationDate?: Date
    ) {
        this.birthCountry = birthCountry;
        this.age = age;
        this.naturalizationDate = naturalizationDate;
    }

    private wasBornInCountry() {
        return this.birthCountry === OUR_COUNTRY;
    }

    private wasNaturalized() {
        return Boolean(this.naturalizationDate);
    }

    private isOver18() {
        return this.age >= 18;
    }

    private isCitizen() {
        return this.wasBornInCountry() || this.wasNaturalized();
    }

    public isEligibleToVote() {
        return this.isOver18() && this.isCitizen();
    }

}