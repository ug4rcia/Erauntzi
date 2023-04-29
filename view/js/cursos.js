document.addEventListener("DOMContentLoaded", (event) => {

    // tabla();
})


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
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// const monthNames = [
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Septiembre",
// ];

const calendar = document.getElementById("calendar");
const monthSelector = document.getElementById("month");

monthSelector.addEventListener("change", () => {
    const selectedMonth = parseInt(monthSelector.value);
    const selectedDate = new Date();
    selectedDate.setMonth(selectedMonth);
    selectedDate.setDate(1);

    const currentYear = selectedDate.getFullYear();
    const currentMonth = selectedDate.getMonth();

    // const monthName = monthNames[currentMonth];

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    calendar.innerHTML = "";

    for (let i = 1; i < startingDay; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        calendar.appendChild(dayElement);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerHTML = `<div class='comentario'><div>`;
        if (i === new Date().getDate() && currentMonth === new Date().getMonth()) {
            dayElement.classList.add("today");
        }
        dayElement.textContent = i;
        calendar.appendChild(dayElement);
    }
});




var dias = document.getElementsByTagName("td");

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