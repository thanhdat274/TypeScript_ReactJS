// function sum(a:number, b:number){
//     return a + b;
// }
// const tong = sum(4,5);
// console.log(tong);

// let number: number = 5;
// let number1: number = 2.8;
// let phrase: string = "Result is";
// let permit: boolean = true;

// const result = number1 +number;
// if(permit){
//     console.log(phrase + result);
// }else{
//     console.log('not show result');
    
// }

// type TPerson = {
//     id: number;
//     name: string;
//     age: number;
//     status?: boolean
// }

// const person: TPerson = {
//     id: 1,
//     name: "Dat",
//     age: 20
// }

// const persons: TPerson[] = [
//     { id: 1, name: "Dat", age: 20, status: true},
//     { id: 2, name: "Kien", age: 22, status: false},
// ]
// console.log(person.name);

// type AppProps = {
//     message: string
// }

// const DemoApp = (props: AppProps) => {
//     console.log(props)
// }

// DemoApp({message: "Hello"})

export type User = {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);