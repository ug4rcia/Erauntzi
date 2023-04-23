document.addEventListener("DOMContentLoaded", (event) => {

    tabla();
})

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
                    + "<td>" + lista[i].dia1 + "</td>"
                    + "<td>" + lista[i].dia2 + "</td>"
                    + "<td>" + lista[i].dia3 + "</td>"
                    + "<td>" + lista[i].dia4 + "</td>"
                    + "</tr>"
            }
            newRow += "</table>";

            document.getElementById("tabla").innerHTML = newRow;

        })
        .catch(error => console.error('Error status:', error));



}
