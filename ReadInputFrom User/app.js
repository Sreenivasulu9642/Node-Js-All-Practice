// let name = 'venkatesh padmavathi'
// console.log(name)


//taking input from user

// let read = require('readline');
// let rl = read.createInterface({
//     input: process.stdin,
//     output: process.stdin
// });

// rl.question('Enter your name', (name) => {
//     console.log(name)
// })



let read = require('readline');
let display = read.createInterface({
    input: process.stdin,
    output: process.stdout
})

display.question('Enter your name: ', (e) => {
    console.log('Your name was: ' + e);
    display.close()
})
display.on('close', () => {
    console.log('Terminal was closed......Thank u');
    process.exit(0);
})