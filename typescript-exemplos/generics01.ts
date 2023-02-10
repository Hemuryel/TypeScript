console.log("-----------generics01.ts-----------");

function reverseList<T>(list: Array<T>): Array<T>{
    let reversedList: T[] = [];

    for (let i = list.length - 1; i >= 0; i--){
        reversedList.push(list[i]);
    }

    return reversedList;
}

let names = ["Luffy", "Zoro", "Sanji"];
let numbers = [1, 2, 3, 4, 5];

console.log(reverseList(names));
console.log(reverseList<string>(names));
console.log(reverseList<number>(numbers));

let reverseListArrow = <T>(list: Array<T>): Array<T> => {
    let reversedList: T[] = [];

    for (let i = list.length - 1; i >= 0; i--){
        reversedList.push(list[i]);
    }

    return reversedList;
};

console.log(reverseListArrow(names));
console.log(reverseListArrow(numbers));

class Person3{
    public name: string; // variáveis são public por padrão
    constructor(name: string){
        this.name = name;
    }

    print(): void{
        console.log(`name: ${this.name}`);
    }
}

interface Repository<T, ID> {
    findById(id: ID): T;
    save(entity: T): T;
}

class Person3Repository implements Repository<Person3, number> {
    findById(id: number): Person3 {
        console.log(`Searching using ID: ${id}`);
        return new Person3("Nami");
    }
    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}

let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Ninja")));

interface NumberId {
    id: number;
}

interface Repository2<T, ID extends NumberId> {
    findById(id: ID): T;
    save(entity: T): T;
}

class Person3Repository2 implements Repository2<Person3, NumberId> {
    findById(numberId: NumberId): Person3 {
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person3("Nami123");
    }
    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}
let person3Repository2 = new Person3Repository2();
console.log(person3Repository2.findById({id: 1}));