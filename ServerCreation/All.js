// let read = require('readline');
// let output = read.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// output.question('Enter the Your Name: ', (name) => {
//     console.log('Name was: ' + name)
//     output.close();
// })
// output.on('close', () => {
//     console.log('Terminal Closed.....!')
// })



//read and write file

//by using asynchronous

let file = require('fs');
// file.readFile('./fileOne.txt', 'utf-8', (error, data) => {
//     console.log(data)

// })

// file.writeFile('./Display.txt', 'Padmvathi Venkatesh', () => {
//     console.log('Data Inserted.....!')
// })




//synchronous

let data = file.readFileSync('./fileOne.txt', 'utf-8');
console.log(data)
let x = file.writeFileSync('./Display.txt', 'Amma nana......Love .....U')



//server creation

let htp = require('http');
let server = htp.createServer((request, response) => {
    console.log('one request came')
    response.end('Welcome to server')
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Server Started....!')
})
