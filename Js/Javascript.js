localStorage.setItem('user', JSON.stringify({
    name: 'Fabian',
    type: 'user'
}));

var usuario = JSON.parse(localStorage.getItem('user'));

document.addEventListener('DOMContentLoaded', function () {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'menu-superior.html', true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status == 200) {
            var headToLoad = "";
            if (usuario.type == "admin") {
                headToLoad = '#header-admin';
            } else if (usuario.type == "user") {
                headToLoad = '#header-user';
            } else {
                headToLoad = '#header-anon';
            }

            var temporal = document.createElement('div');
            temporal.innerHTML = xhr.responseText;
            var headers = temporal.querySelector(headToLoad);
            document.getElementById('header').innerHTML = headers.innerHTML;
        }
    }
});

$(document).ready(function () {
    $.get("http://fakestoreapi.com/products",
        function (data) {
            debugger
            $.each(data,
                function (i, item) {
                    var td1 = `<td>${item.title}</td>`;
                    var td2 = `<td><img class="ropa" src="${item.image}"></td>`;
                    var tr = `<tr>${td1}${td2}</tr>`;
                    $('#tblCategorias').append(tr);
                });
        });
});
