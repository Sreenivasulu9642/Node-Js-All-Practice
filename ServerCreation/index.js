let htp = require('http')
let server = htp.createServer((request, response) => {
    console.log('Successfully Logged....!')
    response.end('Welcome to the server.....!')
 console.log(request)


});
server.listen(5000, '127.0.0.1', () => {
    console.log('server started just now......!')
})  