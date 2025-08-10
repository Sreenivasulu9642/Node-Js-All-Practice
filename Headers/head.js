let file = require('fs');
let output = file.readFileSync('./index.html', 'utf-8')



let htp = require('http');
let res = htp.createServer((request, response) => {
    let path = request.url;
    if (path == '/' || path.toLowerCase() == '/home') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Custom-Head': 'DVPS'
        })

        response.end(output.replace('{{%content%}}', 'You are in Home Page'))
    }
    else if (path.toLowerCase() == '/about') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Custom-Head': 'DVPS'
        })
        response.end(output.replace('{{%content%}}', 'You are in About Page'))

    }
    else if (path.toLowerCase() == '/contact') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Custom-Head': 'DVPS'
        })
        response.end(output.replace('{{%content%}}', 'You are in Contact Page'))

    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text/html',
            'My-Custom-Head': 'DVPS'
        })
        response.end(output.replace('{{%content%}}', 'Page Not Found....!'))
    }
})
res.listen(3000, '127.0.0.1', () => {
    console.log('server started.!')
})