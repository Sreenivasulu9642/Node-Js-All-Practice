let file = require('fs');
let output = file.readFileSync('./index.html', 'utf-8')



let htp = require('http');
let res = htp.createServer((request, response) => {
    let path = request.url;
    if (path == '/' || path.toLowerCase() == '/home') {
        response.end(output.replace('{{%content%}}', 'You are in Home Page'))
    }
    else if (path.toLowerCase() == '/about') {
        response.end(output.replace('{{%content%}}', 'You are in About Page'))

    }
    else if (path.toLowerCase() == '/contact') {
        response.end(output.replace('{{%content%}}', 'You are in Contact Page'))

    }
    else {
        response.end(output.replace('{{%content%}}', 'Page Not Found....!'))
    }
})
res.listen(3000, '127.0.0.1', () => {
    console.log('server started.!')
})