// var num_1 = document.getElementById("num-1");
// var num_2 = document.getElementById("num-2");
// var num_but = 0;
// var convert = document.getElementById("convert");
// var second_input = document.getElementById("second_input");
// var usd = 61.84;

// // convert.onclick = function () {
// //     var first_input = document.getElementById("first_input").value;
// //     console.log(first_input * usd);
// //     second_input.innerHTML = first_input / usd;

// // }

// function converted(valueNum) {
//     document.getElementById("second_input").innerHTML = valueNum / usd;
// }

// num_1.onclick = function () {
//     num_but = 1;
//     read();
// }

// num_2.onclick = function () {
//     num_but = 2;
//     read();
// }

// function read() {
//     if (num_but == 1) {
//         value_convert.innerHTML = "1";
//         console.log(1);
//     }
//     else if (num_but == 2) {
//         value_convert.innerHTML = "2";
//         console.log(2);
//     }
// }



// PARSER 2
const request = require('request');
const cheerio = require('cheerio');

//Парсер
request('https://www.kursvaliut.ru/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const table = $('table');
        const output = table.find('.last-exchange-rate').text().replace(/\s\s+/, '');
        const outArr = output.split(' ', 100);

        const positiveArr = outArr.filter(function (stroke) {
            return stroke !== '' && stroke !== '\n';
        });
        const usd = positiveArr[1].replace(/,/, '.');
        console.log(Number(usd) * 100);

    }
});


//База данных 
const mysql = require('mysql');

const options = {
    user: 'root',
    password: '',
    database: 'converter'
}
const connection = mysql.createConnection(options);

connection.connect(err => {
    if (err) {
        console.error('An error occurred while connecting to the DB');
        throw err;
    }
})

connection.query('SELECT * FROM todos', (error, todos, fields) => {
    if (error) {
        console.error('An error occurred while executing the query')
        throw error
    }
    console.log(todos)
})


