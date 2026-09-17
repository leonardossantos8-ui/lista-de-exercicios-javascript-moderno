const jogo = {
	titulo: "Minecraft",
	genero: "Sandbox",
	preco: 99,
};

const exibirJogo = ({ titulo, genero, preco }) => {
	console.log(`${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}.`);
};

exibirJogo(jogo);
