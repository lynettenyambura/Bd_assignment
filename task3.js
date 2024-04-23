const os = require('os');
const fs = require('fs');

const arch = os.arch();
const uptime = os.uptime();
const homedir = os.homedir();

const uptimeFormatted = `${Math.floor(uptime / (3600 * 24))} days ${Math.floor((uptime % (3600 * 24)) / 3600)} hours ${Math.floor((uptime % 3600) / 60)} minutes ${Math.floor(uptime % 60)} seconds`;

const content = `# OS Information
## Architecture
${arch}

## Uptime
${uptimeFormatted}

## Home Directory
${homedir}`;

fs.writeFile('./public/os_info.md', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('OS information written to file successfully.');
});
