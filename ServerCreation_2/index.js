let file = require('fs');
let output = file.readFileSync('./index.html', 'utf-8')

let htp = require('http');
let response = htp.createServer((request, response) => {
    console.log('Welcome to Server....!')
    // response.end('welcome...!')
    // response.end(output)
    response.end(output)

});
response.listen(8000, '127.0.0.1', () => {
    console.log('Server Started...!')
})