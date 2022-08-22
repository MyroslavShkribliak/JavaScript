// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let area = (a, b) => a * b;
//
// console.log(area(11,11));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let f = (r) => {
//     return Math.PI * r * r;
// };
// console.log(f(133));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function f1(r, h) {
//     return 2 * Math.PI * r * (h + r);
// }
// let x = f1( 11, 9);
// console.log(x);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let users1 = [
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'max', age: 31, status: true}
// ];
//
// function arrayElements(users1) {
//     return users1;
// }
// console.log(arrayElements(users1));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function fool(text) {
        document.write(`<p>${text}</p>${text}<p></p><p>${text}</p>`);
}
fool(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let array = 'Java';
// function arrayLoop (array){
//         document.write(`<ul>
//         <li>${array}</li>
//         <li>${array}</li>
//         <li>${array}</li>
//         </ul>`);
// }
// arrayLoop(array);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let cocos = 123;
// let arrayLoop1 = (block) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(
//             `<li>${cocos}</li>`);
//     }
//     document.write(`</ul>`);
//     return block;
// }
// arrayLoop1();

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'petya', age: 30},
//     {id: 2, name: 'kolya', age: 29},
//     {id: 3, name: 'olha', age: 28},
//     {id: 4, name: 'max', age: 30},
//     {id: 5, name: 'anya', age: 31},
// ];
// function user() {
//     for (let i = 0; i < users.length; i++) {
//         document.write(`
//             <div>id - ${users[i].id}</div>
//             <div>name - ${users[i].name}</div>
//             <div>age - ${users[i].age}</div>
//             `);
//         document.write('_ _ _ _ _ _ _ _');
//     }
//     return user;
// }
//user();

// - створити функцію яка повертає найменьше число з масиву
// let are = [1, 5, 2, -12, 45,]
//
// let Min = (array) => {
//     let min = array[0];
//     for (let item of array) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min;
// };
// console.log(Min(are));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const Element = (array) => {
//     let num = 0;
//     for (const arrayElement of array) {
//         num += arrayElement;
//     }
//     return num;
// };
//
// const cocos1 = Element([1,2,3,10]);
// console.log(cocos1);
//
//

