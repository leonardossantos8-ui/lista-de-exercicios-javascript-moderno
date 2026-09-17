
const produto = {
	nome: "Mouse",
	preco: 80
};

const mostrarProduto = ({ nome, preco }) =>
	`Produto: ${nome} - Preço: R$ ${preco}`;

console.log(mostrarProduto(produto));
