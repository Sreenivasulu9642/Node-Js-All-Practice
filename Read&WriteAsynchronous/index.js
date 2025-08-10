let file = require('fs');
file.readFile('./FileOne.txt', 'utf-8', (error1, data1) => {
    console.log(data1)
    file.readFile(`./${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2)
        file.writeFile(`./${data2}.txt`, `These is a Call Back Hell in Node Js \n\n Dasari Venkatesh Dasari Padmavathi Sreenivasulu \n\n The File Created on ${new Date().toLocaleTimeString()}........!\n\nThank.......U..........!`, () => {
            console.log('Data Successfully Inserted into the file.....!')
        })
    })

})