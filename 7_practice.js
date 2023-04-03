const objA = {
    a: 10,
    b: true
};

const copyOfA = objA;

copyOfA.a = 20;
// 20

copyOfA.c = 20;


console.log(objA);
// { a: 20, b: true, c: 20 }

let g = 10;

g = true;

g = 'Bogdan';

g = undefined;

function greetWorld() {
    console.log("Hello World!");
};

a(); // Hello World!

a = 10;

a(); // Error: a is not a function

const j = () => {
    console.log("qwe");
};

j(); // qwe

j = 10; // Type Error: assignment to const variable

j();