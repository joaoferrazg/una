function imprime(objeto) {
	var mensagem = `
<br>
{
<br>
"<span class='campo'>id</span>": ${objeto.id},
<br>
"<span class='campo'>userId</span>": ${objeto.userId},
<br>
"<span class='campo'>title</span>": ${objeto.title},
<br>
"<span class='campo'>body</span>": ${objeto.body}
<br>
}
<br>`;
	return mensagem;
}

function imprimeDelete() {
	var mensagem = ``;
	return mensagem;
}

function imprimeFiltrar(objeto) {
	var mensagem;
	objeto.forEach(function (obj) {
		mensagem += `
<br>
{
<br>
"<span class='campo'>id</span>": ${obj.id},
<br>
"<span class='campo'>userId</span>": ${obj.userId},
<br>
"<span class='campo'>title</span>": ${obj.title},
<br>
"<span class='campo'>body</span>": ${obj.body}
<br>
},
<br>`;
	});
	return mensagem;
}

function imprimePost(objeto) {
	var mensagem;
	objeto.forEach(function (obj) {
		mensagem += `
<br>
{
<br>
"<span class='campo'>id</span>": ${obj.id},
<br>
"<span class='campo'>userId</span>": ${obj.userId},
<br>
"<span class='campo'>title</span>": ${obj.title},
<br>
"<span class='campo'>body</span>": ${obj.body}
<br>
},
<br>`;
	});
	return mensagem;
}

function imprimeCep(obj) {
	var mensagem = `
<br>
{
    <br>
    "<span class='campo'>logradouro</span>": ${obj.logradouro},
    <br>
    "<span class='campo'>complemento</span>": ${obj.complemento},
    <br>
    "<span class='campo'>bairro</span>": ${obj.bairro},
    <br>
    "<span class='campo'>localidade</span>": ${obj.localidade}
    <br>
    "<span class='campo'>uf</span>": ${obj.uf}
    <br>
    "<span class='campo'>ibge</span>": ${obj.ibge}
    <br>
    "<span class='campo'>gia</span>": ${obj.gia}
    <br>
    "<span class='campo'>ddd</span>": ${obj.ddd}
    <br>
    "<span class='campo'>siafi</span>": ${obj.siafi}
    <br>
}
<br>`;
	return mensagem;
}

async function getPostagem(id) {
	await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprime(json);
		});
}

async function getPostagens() {
	await fetch(`https://jsonplaceholder.typicode.com/posts`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprimePost(json);
		});
}

async function postPostagens(titulo, corpo) {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			title: titulo,
			body: corpo,
			userId: 1,
		}),
	})
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprime(json);
		});
}

async function modificarPostagens(id) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			title: 'Essa é a modificação da minha mais nova postagem! :D',
		}),
	})
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprime(json);
		});
}

async function removerPostagem(id) {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			title: 'Essa é a modificação da minha mais nova postagem! :D',
		}),
	})
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprimeDelete(json);
		});
}

async function filtrarPostagens(id) {
	fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprimePost(json);
		});
}

async function getCep(cep) {
	await fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			respjson.innerHTML = imprimeCep(json);
		});
}
