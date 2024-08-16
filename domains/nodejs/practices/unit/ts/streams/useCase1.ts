import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream('input.txt');
const writeStream = createWriteStream('output.txt');

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
    writeStream.end();
});