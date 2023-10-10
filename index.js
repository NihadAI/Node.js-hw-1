import { createServer } from 'http';

const host = 'localhost';

let requestCount = 0;

const server = createServer((req, res) => {
    if (req.method === 'GET') {
        requestCount += 1;
        res.end(JSON.stringify({ message: 'Request handled successfully', requestCount }));
    } else {
        res.end('Request handled unsuccessfully');
    }
});

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

const port = process.argv.slice(2).find((arg) => arg.startsWith('--port='));
console.log(port);

const specifiedPort = port ? port.split('=')[1] : 3000;

server.listen(specifiedPort, host, () => {
    console.log(`Server is running on port http://${host}:${specifiedPort}`);
});
