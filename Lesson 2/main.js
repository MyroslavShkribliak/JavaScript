// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let massif = ['art', 'tranquillity', 'paradise', 'hope', 'honey', 'fabulous', 'glory', 135 , 232, 321];
console.log(massif[0]);
console.log(massif[1]);
console.log(massif[2]);
console.log(massif[3]);
console.log(massif[4]);
console.log(massif[5]);
console.log(massif[6]);
console.log(massif[7]);
console.log(massif[8]);
console.log(massif[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Енеїда',
    pageCount: 440,
    genre:'бурлеск, травестія, поема'

};
console.log(book1);
let book2 = {
    title: 'Камінний хрест',
    pageCount: 572,
    genre: 'Драма'
};
console.log(book2);
let book3 = {
    title:'Тіні забутих предків',
    pageCount: 192,
    genre:'Фікшн'
};
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Енеїда',
    pageCount: 440,
    genre: 'бурлеск, травестія, поема',
    authors: [
        {
            name:'Іван Котляревський',
            age: 69
        }

    ]
};
console.log(book4);
let book5 = {
    title: 'Камінний хрест',
    pageCount: 572,
    genre: 'Драма',
    authors: [
        {
            name:'Василь Стефаник',
            age: 65
        }
    ]
};
console.log(book5);
let book6 = {
    title: 'Тіні забутих предків',
    pageCount: 192,
    genre:'Фікшн',
    authors: [
        {
            name:'Михайло Коцюбинський',
            age: 49
        }
    ]
};
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача\
let massif2 = [
    {
        name: 'Василь',
        username: 'user1',
        password: 112233445
    },
    {
        name: 'Коля',
        username: 'user2',
        password: 544332211
    },
    {
        name: 'Іван',
        username: 'user3',
        password: 986589532
    },
    {
        name: 'Влад',
        username: 'user4',
        password: 345678654
    },
    {
        name: 'Артем',
        username: 'user5',
        password: 323456743
    },
    {       name: 'Юля',
        username: 'user6',
        password: 876567890
    },
    {   name: 'Катя',
        username: 'user7',
        password: 987656789
    },
    {   name: 'Ліана',
        username: 'user8',
        password: 456765432
    },
    {   name: 'Ольга',
        username: 'user9',
        password: 125784631
    },
    {   name: 'Інеса',
        username: 'user10',
        password: 765432356
    }
];
console.log(massif2[0].password);
console.log(massif2[1].password);
console.log(massif2[2].password);
console.log(massif2[3].password);
console.log(massif2[4].password);
console.log(massif2[5].password);
console.log(massif2[6].password);
console.log(massif2[7].password);
console.log(massif2[8].password);
console.log(massif2[9].password);

