const pessoa = {
	 nome: "Mariana",
	 idade: 25,
	 profissao: "Desenvolvedora"
};

const apresentarPessoa = ({ nome, idade, profissao }) =>
	`${nome} tem ${idade} anos e trabalha como ${profissao}.`;