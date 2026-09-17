const produto = {
	nome: "Notebook",
	preco: 3500,
	desconto: 350
};

const { nome, preco, desconto } = produto;

const calcularPrecoFinal = (preco, desconto) => preco - desconto;

console.log(`Produto: ${nome}`);
console.log(`Preço original: R$ ${preco}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Preço final: R$ ${calcularPrecoFinal(preco, desconto)}`);