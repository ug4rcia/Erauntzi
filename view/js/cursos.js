document.addEventListener("DOMContentLoaded", (event) => {

    // tabla();
})


var dias = document.getElementsByTagName("td");

// Recorrer todos los elementos y agregar un evento de mouseover a cada uno
for (var i = 0; i < dias.length; i++) {
    dias[i].addEventListener("mouseover", function () {
        // Obtener el comentario del atributo de datos
        var comentario = this.getAttribute("data-comentario");
        // Mostrar el comentario en el cuadro de información emergente
        this.querySelector(".comentario").textContent = comentario;
    });
}



document.getElementById("boton").addEventListener("click", reserva);

function reserva() {

    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;
    var dia = document.getElementById("date").value;

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
