// all 3 topics in one

// let readline = require('readline');
// let output = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// output.question('Enter your name: ', (e) => {
//     console.log('Your Entered Name Was: ' + e);
//     output.close()

// })
// output.on('close', () => {
//     console.log('Terminal was Closed....Thank u......! ')
//     process.exit(0)
// })


//reading text from file

let file = require('fs');
let fileoutput = file.readFileSync('./filename.txt', 'utf-8')
console.log(fileoutput)



//sending text to file

file.writeFileSync('./secondFile.txt', `These File created on ${new Date().toLocaleTimeString()} and your entered text was
${fileoutput} .......Thank u......!`)