const mostrarProduto = ({ nome, preco }) => {
	console.log(`Produto: ${nome} - Preço: R$ ${preco}`);
};

mostrarProduto({ nome: 'Notebook', preco: 3500 });
