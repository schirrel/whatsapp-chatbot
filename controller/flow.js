const regexSacolao = /(sacol)|(cesta)/gm;
const regexPreco = /(prec|valor|quant|press|qnt)/gm;
const regexValor = /(50|100|150|200|300)/gm;


const {
    responder
} = require('./routines/sacolao')

let client = null;


const getChat = async (msg) => {
	let chat = await msg.getChat();
	return await chat;
}

async function mensagemInicial(msg) {
    msg.reply(`Olá, seja bem vindo(a) ao Canal de Atendimento do Mercado Alencar!`);
}


async function sacolao(msg, arrMsg) {
    msg.reply("Temos os sacolões mais completos." +
        "\nVoce gostaria de infomação sobre: " +
        "\n *50*" +
        "\n *100*" +
        "\n *150*" +
        "\n *200*" +
        "\n *300*" +
        "\n Responda com o valor da cesta!");
}






const start = async (_client) =>{
	client = _client;
	client.on('message',async msg => {
	console.log('nova mensagem');
	let chat = await getChat(msg)
	console.log('chat' ,chat.id);
	
    //msg.getContact().then(contact=>console.log(contact.name));
    var body = msg.body.toString().toLowerCase();
    if (regexSacolao.test(body) || regexPreco.test(body)) {
	    func = sacolao(msg, body, client)
    } else if (regexValor.test(body)) {
	    func = responder(msg, body, client)
    } else {
        func = mensagemInicial(msg)
    }
});
}

module.exports =  {
    start: start
}