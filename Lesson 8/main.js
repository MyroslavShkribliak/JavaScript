// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const user = []
// user.push(new User(1, 'user1', 'user_1', 'user1@gmail.com', 111));
// user.push(new User(2, 'user2', 'user_2', 'user2@gmail.com', 222));
// user.push(new User(3, 'user3', 'user_3', 'user3@gmail.com', 333));
// user.push(new User(4, 'user4', 'user_4', 'user4@gmail.com', 444));
// user.push(new User(5, 'user5', 'user_5', 'user5@gmail.com', 555));
// user.push(new User(6, 'user6', 'user_6', 'user6@gmail.com', 686));
// user.push(new User(7, 'user7', 'user_7', 'user7@gmail.com', 777));
// user.push(new User(8, 'user8', 'user_8', 'user8@gmail.com', 888));
// user.push(new User(9, 'user9', 'user_9', 'user9@gmail.com', 999));
// user.push(new User(10, 'user10', 'user_10', 'user10@gmail.com', 1010));
// console.log(user)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let users5 = [
//     {id: 1, name: 'petya', age: 30},
//     {id: 2, name: 'kolya', age: 29},
//     {id: 3, name: 'olha', age: 28},
//     {id: 4, name: 'max', age: 30},
//     {id: 5, name: 'anya', age: 31},
//     {id: 6, name: 'Jak', age: 32},
// ];
// let filter = users5.filter(value => !(value.id % 2));
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let users = [
//     {id: 3, name: 'petya', age: 30},
//     {id: 2, name: 'kolya', age: 29},
//     {id: 1, name: 'olha', age: 28},
//     {id: 4, name: 'max', age: 30},
//     {id: 5, name: 'anya', age: 31},
//     {id: 6, name: 'Jak', age: 32},
// ];
//
// let sort6 = users.sort((a ,b) => {
//     if (a.id > b.id){
//         return 1;
//     }
//     if (a.id < b.id ){
//         return -1;
//     }
//     if (a.id === a.id){
//         return 1
//     }
// });
// console.log(sort6);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами
// class Client{
//
//
//     constructor(id, name, surname, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const Client1 = []
// const construct = Client1.push(new Client(1,'Petya','Pupkin','06653325978', ['battery','candle','envelopes','needle', 'pen', 'toothpaste','pencil', 'glue','soap', 'fuse']))
// Client1.push(new Client(2,'Viktoria','Koloskin','06657778963', ['battery','candle','envelopes','needle', 'pen']))
// Client1.push(new Client(3,'Vitia','fdgdfgdgdfdf','0556332878',['battery','candle','envelopes', 'needle']))
// Client1.push(new Client(4,'Serhij','Jurawlew','055632478',['battery','candle']))
// Client1.push(new Client(5,'Oleksandr','Petrov','6445332879',['battery','candle','envelopes','needle']))
// Client1.push(new Client(6,'Sviatoslav','Neznaju','522364780',['battery','candle','envelopes','needle', 'pen', 'toothpaste']))
// Client1.push(new Client(7,'Volodya','Voloshin','066332487',['battery','candle','envelopes']))
// Client1.push(new Client(8,'Vasya','dsfsdf','0554112368',['battery','candle','envelopes','needle', 'pen', 'toothpaste','pencil']))
// Client1.push(new Client(9,'Kokos','koks','0445887213',['battery','soap']))
// Client1.push(new Client(10,'Anya','dfdkss','077896452', ['battery']))
// console.log(Client1)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const Client1 = []
// Client1.push(new Client(1,'Petya','Pupkin','06653325978', ['battery','candle','envelopes','needle', 'pen', 'toothpaste','pencil', 'glue','soap', 'fuse']))
// Client1.push(new Client(2,'Viktoria','Koloskin','06657778963', ['battery','candle','envelopes','needle', 'pen']))
// Client1.push(new Client(3,'Vitia','fdgdfgdgdfdf','0556332878',['battery','candle','envelopes', 'needle']))
// Client1.push(new Client(4,'Serhij','Jurawlew','055632478',['battery','candle']))
// Client1.push(new Client(5,'Oleksandr','Petrov','6445332879',['battery','candle','envelopes','needle']))
// Client1.push(new Client(6,'Sviatoslav','Neznaju','522364780',['battery','candle','envelopes','needle', 'pen', 'toothpaste']))
// Client1.push(new Client(7,'Volodya','Voloshin','066332487',['battery','candle','envelopes']))
// Client1.push(new Client(8,'Vasya','dsfsdf','0554112368',['battery','candle','envelopes','needle', 'pen', 'toothpaste','pencil']))
// Client1.push(new Client(9,'Vasya','dsfsdf','0554112368',['battery','candle','envelopes','needle', 'pen', 'toothpaste',]))
// Client1.push(new Client(10,'Anya','dfdkss','077896452', ['battery']))
// let sort = Client1.sort((a ,b) => {
//     if (a.order> b.order){
//         return 1;
//     }
//     if (a.order < b.order){
//         return -1;
//     }
//     if (a.order === a.order){
//         return 0
//     }
// })
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Construct (model, manufacturer, year, maxSpeed,volumeEngine) {
	this.model = model;
	this.manufacturer = manufacturer;
	this.year = year;
	this.maxSpeed = maxSpeed;
	this.volumeEngine = volumeEngine;
	this.drive = function (){
		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
	};
	this.info = function ()
	{
		console.log(`
			model : ${this.model}
			manufacturer : ${this.manufacturer}
			year : ${this.year}
			maxSpeed : ${this.maxSpeed}
			volumeEngine : ${this.volumeEngine}`);
	};
	this.increaseMaxSpeed = function (newSpeed){
		this.maxSpeed = newSpeed;
	};
	this.changeYear = function (newValue){
		this.year = newValue;
	};
	this.addDriver = function (driver){
		this.drive = driver;
	};
}
const construct1 = new Construct('m5 f90 competition', 'BMW', 2018, '250 км', '4.4 V8')
console.log(construct1)
construct1.drive()
construct1.info()
construct1.increaseMaxSpeed('160 км/г')
construct1.changeYear(2019)
construct1.addDriver('max')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class car{
    constructor(model, manufacturer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
    }

    driver(){
        console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
    };
    info()
    {
        console.log(`
			model : ${this.model}
			manufacturer : ${this.manufacturer}
			year : ${this.year}
			maxSpeed : ${this.maxSpeed}
            volumeEngine : ${this.volumeEngine}
		`);
    };
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
    };
    changeYear(newValue){
        this.year = newValue;
    };
    addDriver(driver){
        this.driver = driver;
    };
}
let car1 = new car('m5 f90 competition', 'BMW', 2018, '250 км', '4.4 V8');
console.log(car1);
car1.driver();
car1.info();
car1.increaseMaxSpeed('160 км/г');
car1.changeYear(2019);
car1.addDriver('max');

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;

    }
}
class Prince extends Popelushka{
    constructor(name, age, size) {
        super(name, age, size);
    }
}
const prince1 = new Prince('MС KFC', 24, 37);
console.log(prince1)
let arr = [
    new Popelushka('Vika',21,38),
    new Popelushka('Tanya',20,40),
    new Popelushka('Ira',21,37),
    new Popelushka('Katya',19,38),
    new Popelushka('Zosia',22,40),
    new Popelushka('Nastya',23,41),
    new Popelushka('Oksana',21,39),
    new Popelushka('Olya',24,40),
    new Popelushka('Anya',22,42),
    new Popelushka('Masha',21,36)
]

for (const Popelushka of arr) {
    if (prince1.size === Popelushka.size) {
        console.log(`${Popelushka.name} розмір туфельки ${Popelushka.size}`)
    }
}
const para = arr.find((value) => {
    if (value.name === prince1.size){
    }
    return value;
})
console.log(para)