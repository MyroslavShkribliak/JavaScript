// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('enter the number');
if (x !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('wht time is it?');
if (time > 0 && time <= 15){
    console.log('перша чверть');
}else if (time > 15 && time <= 30){
    console.log('другий');
}else if (time >30 && time <= 45){
    console.log('третій')
}else if (time > 45 && time <=59){
    console.log('четверта чверть')
}else {
    console.log('!!!!!')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt("day");
if (day > 1 && day <= 11) {
        console.log('перша половина');
}else if(day > 11 && day <=20) {
        console.log('друга половина');
}else if(day > 20 && day <=31) {
        console.log('третя половина');
}else {
        console.log('?????????')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
        switch (prompt('enter the day')) {
                case 'Monday':
                console.log('Practice');
                break;
                case 'Tuesday':
                console.log('Lecture');
                break;
                case 'Wednesday':
                console.log('Practice');
                break;
                case 'Thursday':
                console.log('Lecture');
                break;
                case 'Friday':
                console.log('go with friends to play football');
                break;
                case 'Saturday':
                console.log('English');
                break;
                case 'Sunday':
                console.log('To visit grandmother');
                break;
                default:
                console.log('???????????????????');
            }

//       - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('enter the number');
let b = +prompt('enter the number');

if (a > b) {

    console.log('max-number');

} else if (b > a) {

    console.log('min-number');

} else if (a === b) {

    console.log('equal');

}else{

    console.log('??????????');

}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x1 = prompt(null) || "default";
console.log(x1)
