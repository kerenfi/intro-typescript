interface KeyPair {
    key: any;
    value: any;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK
let kv2: KeyPair = { key:1, value:12345 }; // OK

class List<T> {
    private items: T[] = [];
 
    public add(value: T): this {
        this.items.push(value);
        return this;
    }
 
    public remove(value: T): this {
        let index = -1;
        while (this.items 
            && this.items.length > 0
            && (index = this.items.indexOf(value)) > -1) {
            this.items.splice(index, 1);
        }
        return this;
    }
 
    public toString(): string {
        return this.items.toString();
    }
}

const numbersList = new List<number>();
numbersList.add(1);
numbersList.add(2);
numbersList.add(3);
numbersList.remove(2);

const stringList = new List<string>();
stringList.add('hello');
stringList.add('world');
console.log(stringList.toString());
