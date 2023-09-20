/* const http = requiere ('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola soy mafer');

});

server.listen(8000, () => {

console.log('Server on port 8000');

}); */

const express =requiere ('express')
const app = express ();
app.listen (3000, () => {

console.log ('Server on port 8000');
});