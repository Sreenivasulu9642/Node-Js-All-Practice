let file = require('fs');
let html = file.readFileSync('./first.html', 'utf-8');
let Api = JSON.parse(file.readFileSync('./data.json', 'utf-8'));
let ShowHtml = file.readFileSync('./Second.html', 'utf-8');

// Api.map((e) => {
//     let output = ShowHtml.replace('{{%image%}}', e.image)
// })

let display = Api.data.map((e) => {
    return (ShowHtml
        .replace('{{%image%}}', e.image)
        .replace('{{%PRICE%}}', e.price)
        .replace('{{%TITLE%}}', e.title.slice(0, 20))
    )


})

let htp = require('http');
let server = htp.createServer((request, response) => {
    // console.log('Served Opened')
    let path = request.url;
    if (path.toLocaleLowerCase() == '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html.replace('{{%content%}}', 'Home Page'))
        // console.log(ShowHtml)
    }
    else if (path.toLowerCase() == '/about') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })

        response.end(html.replace('{{%content%}}', 'About Page'))

    }
    else if (path.toLowerCase() == '/contact') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })

        response.end(html.replace('{{%content%}}', 'You are in Contact Page'))

    }
    else if (path.toLocaleLowerCase() == '/product') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })

        response.end(html.replace('{{%content%}}', display.join('')))


    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text/html'
        })

        response.end(html.replace('{{%content%}}', 'Page Not Found....!'))
    }

})
server.listen(8000, '127.0.0.1', () => {
    console.log("Server Running")
});