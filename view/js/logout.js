document.getElementById("logout").addEventListener("click", logout);

function logout() {
    var url = "/controller/cLogout.php";
    
    fetch(url, {
        method: 'GET',
    })
        .then(res => res.text()).then(result => {
           
            location.href = "/view/index.html";
        })
        .catch(error => console.error('Error status:', error));
}


