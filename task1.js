const https = require('https');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'output.html');
const fileStream = fs.createWriteStream(filePath);

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (data) => {
        fileStream.write(data);
    });

    response.on('end', () => {
        console.log('Data written to file successfully.');
        fileStream.end();
    });
}).on('error', (error) => {
    console.error(error);
});

fileStream.on('error', (error) => {
    console.error('Error writing to file:', error);
});
