const {
    Client
} = require('whatsapp-web.js');

const fs = require('fs');

const qrcode = require('qrcode-terminal');

const text = require('./text.js');

const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}


const client =  new Client({ puppeteer: { headless: false }, session: sessionCfg })


client.initialize();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {
        small: true
    });
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg=session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessfull
    console.error('AUTHENTICATION FAILURE', msg);
});



client.on('ready', () => {
    console.log('Client is ready!');
});

text.start(client);