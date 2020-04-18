const fs = require('fs');

const utf8 = require('utf8');

const fetch = async (msg, val) => {
    fs.readFile(`./descricao/${val}.txt`, 'utf8', function(err, data) {
  if (err) throw err;
 msg.reply( data.toString('utf8'));
});
}

responder = (msg, valor) => {
	fetch(msg, valor);
}

module.exports =  {
    responder: responder
}