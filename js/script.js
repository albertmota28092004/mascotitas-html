

function validarUsuario() {
    let u = document.getElementById("usuario").value;
    let c = document.getElementById("contraseña").value;
    if (u == "admin") {
        if (c == "admin12345") {
            window.open("../html/inicioAdmin.html")
        }
        else {
            alert("Contraseña incorrecta. Ingrésala nuevamente.");
            event.preventDefault();
        }
    }
    else if (u == "empleado") {
        if (c == "empleado12345") {
            window.open("../html/inicioEmpleado.html")
        }
        else {
            alert("Contraseña incorrecta. Ingrésala nuevamente.");
            event.preventDefault();
        }
    }
    else {
        alert("Por favor, ingresa un dato válido.");
        event.preventDefault();
    }
}

function registrarUsuario() {
    let c = document.getElementById("contraseña_registro").value;
    let cc = document.getElementById("confirmar_contraseña_registro").value;
    if (c == cc) {
        window.open()
    }
    else {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
    }
}

function customAlert() {
    var overlay = document.createElement('div');
    overlay.classList.add('alert-overlay');

    var box = document.createElement('div');
    box.classList.add('alert-box');

    var message = document.createElement('div');
    message.classList.add('alert-message');
    message.textContent = 'Este es un mensaje de alerta personalizada.';

    var button = document.createElement('button');
    button.classList.add('alert-button');
    button.textContent = 'Aceptar';
    button.addEventListener('click', function() {
    overlay.remove();
    });

    box.appendChild(message);
    box.appendChild(button);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
}

        
fetch('base.html')
.then(response => response.text())
.then(data => {
    document.getElementById('base-container').innerHTML = data;
});

fetch('base_admin.html')
.then(response => response.text())
.then(data => {
    document.getElementById('base-container_admin').innerHTML = data;
});

document.addEventListener("DOMContentLoaded", function () {
    const especieSelect = document.getElementById("especie");
    const tamañoSelect = document.getElementById("tamaño");
    const productos = document.querySelectorAll(".producto");

    function filtrarProductos() {
        const especieFiltro = especieSelect.value;
        const tamañoFiltro = tamañoSelect.value;

        productos.forEach(producto => {
            const especieProducto = producto.classList.contains(especieFiltro);
            const tamañoProducto = producto.classList.contains(tamañoFiltro);

            if ((especieFiltro === "todos" || especieProducto) &&
                (tamañoFiltro === "todos" || tamañoProducto)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    }

    especieSelect.addEventListener("change", filtrarProductos);
    tamañoSelect.addEventListener("change", filtrarProductos);

    // Filtrar productos al cargar la página
    filtrarProductos();
});
