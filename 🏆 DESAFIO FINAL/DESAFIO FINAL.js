const notebook = {
	marca: "Dell",
	modelo: "Inspiron",
	preco: 3500,
	desconto: 500
};

const { marca, modelo, preco, desconto } = notebook;

const calcularPrecoFinal = (preco, desconto) => preco - desconto;

const precoFinal = calcularPrecoFinal(preco, desconto);

console.log(`Notebook ${marca} ${modelo}

Preço original: R$ ${preco}

Desconto: R$ ${desconto}

Preço final: R$ ${precoFinal}`);
