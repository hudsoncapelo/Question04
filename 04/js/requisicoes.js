window.onload = function(e) {
	fetch(
		'https://jsonplaceholder.typicode.com/comments', {		
		}).then(response => response.json())				
	.then(data => { 
		data.forEach(post => {  
			var table = document.getElementById("tabeladedados");
            var row = table.insertRow(-1);            
			var idPostColuna = row.insertCell(0);
			var nameColuna = row.insertCell(1); 
			var emailColuna = row.insertCell(2); 
			var bodyColuna = row.insertCell(3); 
			idPostColuna.innerHTML = post.postId;
			nameColuna.innerHTML = post.name;
			emailColuna.innerHTML = post.email;
			bodyColuna.innerHTML = post.body;
		})
	}).catch(error => console.error(error))
}

function adicionaPost(){
	document.getElementById('formPessoa').style.display="block"
}

function enviarForm() {
	var form = document.getElementById('adicionaPost');
	var data = {};
	data['name'] = form.name.value 
	data['email'] = form.email.value;
	data['body'] = form.body.value;
	fetch('https://jsonplaceholder.typicode.com/comments', {
		method: 'POST',       
		body: JSON.stringify(data)
	})
        .then((response) => {   
		if (response.ok) {
			return response.json() 
		} else {
			return Promise.reject({ status: res.status, statusText: res.statusText });
		}   

	})
	.then((data) => console.log("Sucess", data))
	.catch(err => console.log('Error message:', err.statusText));
}