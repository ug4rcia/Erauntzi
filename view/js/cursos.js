document.addEventListener("DOMContentLoaded", (event) => {

    // tabla();
})


document.getElementById("boton").addEventListener("click", reserva);

function reserva() {

    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;
    var dia = document.getElementById("dia").value;

    console.log(nombre, apellido, email, telefono, dia);

}

function tabla() {


    var url = "/controller/cVerReservas.php";
    fetch(url, {
        method: 'GET',
    })
        .then(res => res.json()).then(result => {

            console.log(result.list);
            var lista = result.list;

            var newRow = "<br/><h2>PANEL DE AMINISTRADOR</h2><br/>";
            newRow += "<table> ";
            newRow += "<tr><th>nombre</th><th>apellido</th><th>telefono</th><th>email</th><th>dia1</th><th>dia2</th><th>dia3</th><th>dia4</th></tr>";

            for (let i = 0; i < lista.length; i++) {

                newRow += "<tr>" + "<td>" + lista[i].nombre + "</td>"
                    + "<td > " + lista[i].apellido + "</td>"
                    + "<td>" + lista[i].telefono + "</td>"
                    + "<td>" + lista[i].email + " </td>"
                    + "<td>" + lista[i].dia + "</td>"
                    + "</tr>"
            }
            newRow += "</table>";

            document.getElementById("tabla").innerHTML = newRow;

        })
        .catch(error => console.error('Error status:', error));



}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

var dias = document.querySelectorAll("td");

// Recorrer todos los elementos y agregar un evento de mouseover a cada uno
for (var i = 0; i < dias.length; i++) {
    dias[i].addEventListener("mouseover", function () {
        // Obtener el comentario del atributo de datos
        var comentario = this.getAttribute("data-comentario");
        console.log(comentario)

        var url = "/controller/verDias.php";
        var data = { 'dia': comentario };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                document.querySelector(".comentario").textContent = data;


            })
            .catch(function (error) {
                console.error(error);
            });
    });
}


document.getElementById("month").addEventListener("change", ensenarMes)

function ensenarMes() {
    var mes = document.getElementById("month").value;
    console.log(mes);

    if (mes == 1) {
        document.getElementById("mayo").style.display = "block";

        document.getElementById("junio").style.display = "none";

        document.getElementById("julio").style.display = "none";

        document.getElementById("septiembre").style.display = "none";

    } else if (mes == 2) {

        document.getElementById("mayo").style.display = "none";

        document.getElementById("junio").style.display = "block";

        document.getElementById("julio").style.display = "none";

        document.getElementById("septiembre").style.display = "none";

    } else if (mes == 3) {

        document.getElementById("mayo").style.display = "none";

        document.getElementById("junio").style.display = "none";

        document.getElementById("julio").style.display = "block";

        document.getElementById("septiembre").style.display = "none";

    } else {

        document.getElementById("mayo").style.display = "none";

        document.getElementById("junio").style.display = "none";

        document.getElementById("julio").style.display = "none";

        document.getElementById("septiembre").style.display = "block";
    }
}