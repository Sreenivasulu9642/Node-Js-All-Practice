let file = require('fs');
let output = file.readFileSync('./filename.txt', 'utf-8')
console.log(output)


file.writeFileSync('./write.txt', `${output} and entered on ${new Date().toLocaleTimeString()}`)
