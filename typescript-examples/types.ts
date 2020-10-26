// boolean
let isDone: boolean = false

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let fullName: string = `Joe Doh`;
let sentence: string = `Hello, my name is ${ fullName }.`
// Array
let list1: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];
list2.push('4');
let list: any[] = [1, true, "free"];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

//Add return type to a function
function add(num1: number, num2: number): number {
    const res = num1+num2;
}

// Function returning never must have unreachable end point
function bigUserMistake(): never {
   throw new Error('you have a big mistake');
}

interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type WorkingStudent = IStudent & IWorker;

let workingStudent1: WorkingStudent = {
    age: 5,
    companyId: 'CID5241',
    id: 'ID3241'
};

type UnionWorkingStudent = IStudent | IWorker;

let workingStudent2: UnionWorkingStudent = {
    age: 5,
    id: 'ID3241'
};

workingStudent2.companyId = 'CID5241';

let apples = "apples";