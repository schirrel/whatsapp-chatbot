const regexSacolao = /(sacol)|(cesta)/gm;
const regexPreco = /(prec|valor|quant|press|qnt)/gm;
const regexValor = /(50|100|150|200|300)/gm;
const regexTroca = /(troca)/gm;


const {
    responder
} = require('./routines/sacolao')

let client = null;


const getChat = async (msg) => {
	let chat = await msg.getChat();
	return await chat;
}

async function mensagemInicial(msg) {
	let chat = await getChat(msg)
    msg.reply(`Olá, ${chat.name}, seja bem vindo(a) ao Canal de Atendimento do Mercado Alencar!`);
}

async function mensagemTroca(msg) {
	let chat = await getChat(msg)
    msg.reply(`${chat.name}, trocamos sim, o que você gostaria de trocar?`);
}



async function sacolao(msg, arrMsg) {
    msg.reply(`${chat.name}, temos os sacolões mais completos." +
        "\nVoce gostaria de infomação sobre: " +
        "\n *50*" +
        "\n *100*" +
        "\n *150*" +
        "\n *200*" +
        "\n *300*" +
        "\n Responda com o valor da cesta!`);
}

const validateMessageFromFlow = async (msg) => {
	
	let chat = await msg.getChat();
	let messages = await chat.fetchMessages({limit:10});
	let fromMe = messages.filter(message => message.fromMe);
	console.log(fromMe  );
	
}




const start = async (_client) =>{
	client = _client;
	client.on('message',async msg => {
		validateMessageFromFlow(msg);
    var body = msg.body.toString().toLowerCase();
    if (regexSacolao.test(body) || regexPreco.test(body)) {
	    func = sacolao(msg, body, client)
    } else if (regexValor.test(body)) {
	    func = responder(msg, body, client)
    }  else if (regexTroca.test(body)) {
	    func = mensagemTroca(msg, body, client)
    } else {
        func = mensagemInicial(msg)
    }
});
}

module.exports =  {
    start: start
}