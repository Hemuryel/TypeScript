console.log("-----------classes01.ts-----------");

class Person2{
    public name: string; // variáveis são public por padrão
    constructor(name: string){
        this.name = name;
    }

    print(): void{
        console.log(`name: ${this.name}`);
    }
}

class EmployeePF extends Person2{
    // super implícito
}

class EmployeePJ extends Person2{
    private _salary: number; // _ underline = convenção private JavaScript quando não existia o modificador private

    get salary(): number{
        return this._salary;
    }

    set salary(value: number){
        this._salary = value;
    }

    constructor(name: string, salary: number){
        super(name);
        this._salary = salary;
    }

    //sobrescrita
    print():void{
        super.print();
        console.log(`salary: ${this.salary}`); 
    }
}

let p1 = new Person2("Natsu");
let emp1 = new EmployeePF("Pedro");
let emp2 = new EmployeePJ("Roberta", 1200);
emp1.print();
emp2.print();

// casting
let p2 = { name: "Fabiana" } as Person;
let p3 = <Person2>{ name: "Luan"}
let p4 = <Person2>{}
p4.name = "Delta";

let p7 = new Person2("Gabriel");
let emp3 = new EmployeePJ("ECHO", 4500);
p7.print();
emp3.salary = 3000; // usando SET
emp3.print();

let p8 = <Person2>{}
let p9: Person2 = new EmployeePJ("Lucy", 2000);
// polimorfismo
p9.print();
