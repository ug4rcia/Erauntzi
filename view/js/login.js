document.addEventListener("DOMContentLoaded", function (event) {

	loggedVerify();
	document.getElementById('submit').addEventListener('click', login);
})

function loggedVerify() {
	var url = "/controller/cLoggedVerify.php";

	fetch(url, {
		method: 'GET',
	})
		.then(res => res.json()).then(result => {

			console.log(result);

		})
		.catch(error => console.error('Error status:', error));
}

function login() {	// new login

	var dni = document.getElementById("dni").value;
	var pasahitza = document.getElementById("pasahitza").value;
		
	var url = "/controller/cLogin.php";
	var data = { 'dni': dni, 'pasahitza': pasahitza };

	fetch(url, {
		method: 'POST', // or 'POST'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: { 'Content-Type': 'application/json' }  //input data

	})
		.then(res => res.json()).then(result => {

			console.log(result.error);
			console.log(result);
			alert(result.error);

			if (result.error=="password error") {
				location.href="/index.html"
			}else{
				location.href="/view/paginas/admin.html"
			}

			

		})
		.catch(error => console.error('Error status:', error));
}
