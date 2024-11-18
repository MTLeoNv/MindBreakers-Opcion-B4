let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let menuLinks = document.querySelectorAll('.navlist a');

// Toggle the menu on menu icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Close the menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// Close the menu when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});

// Referencias
let userIcon = document.querySelector('.ri-user-line');
let authModal = document.getElementById('auth-modal');
let authClose = document.getElementById('auth-close');
let registerLink = document.getElementById('register-link');
let loginLink = document.getElementById('login-link');
let loginForm = document.getElementById('login-form');
let registerForm = document.getElementById('register-form');

// Función para reiniciar el formulario al estado inicial (mostrar inicio de sesión)
function resetAuthModal() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}

// Mostrar el modal y reiniciar al hacer clic en el icono de usuario
userIcon.onclick = () => {
    resetAuthModal(); // Reinicia el formulario antes de mostrarlo
    authModal.style.display = 'flex';
};

// Cerrar el modal al hacer clic en la 'x'
authClose.onclick = () => {
    authModal.style.display = 'none';
};

// Cambiar a formulario de registro
registerLink.onclick = (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
};

// Cambiar a formulario de inicio de sesión
loginLink.onclick = (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
};

// Ocultar modal al hacer clic fuera del contenido
window.onclick = (event) => {
    if (event.target == authModal) {
        authModal.style.display = 'none';
    }
};

// Listado de productos para búsqueda
const productos = [
    { id: 1, nombre: "ROMPECABEZAS ARCOIRIS", imagen: "img/r1.png" },
    { id: 2, nombre: "ROMPECABEZAS GATO", imagen: "img/r2.png" },
    { id: 3, nombre: "ROMPECABEZAS ARTE", imagen: "img/r3.png" },
    { id: 4, nombre: "ROMPECABEZAS ARTE", imagen: "img/r4.png" },
    { id: 5, nombre: "ROMPECABEZAS PINTURA", imagen: "img/r5.png" },
    { id: 6, nombre: "ROMPECABEZAS VISTA", imagen: "img/r6.png" },
    { id: 7, nombre: "ROMPECABEZAS FLORES", imagen: "img/r7.png" },
    { id: 8, nombre: "ROMPECABEZAS TORRE", imagen: "img/r8.png" },
    { id: 9, nombre: "ROMPECABEZAS JUGUETE", imagen: "img/r9.png" },
    { id: 10, nombre: "ROMPECABEZAS DALI", imagen: "img/r10.png" },
    { id: 12, nombre: "ROMPECABEZAS NUM", imagen: "img/r12.png" },
    { id: 13, nombre: "ROMPECABEZAS ANIME", imagen: "img/r13.png" },
    { id: 14, nombre: "ROMPECABEZAS ARTE", imagen: "img/r14.png" },
    { id: 15, nombre: "ROMPECABEZAS LORD", imagen: "img/r15.png" },
    { id: 16, nombre: "ROMPECABEZAS DISNEY", imagen: "img/r16.png" },
    { id: 17, nombre: "ROMPECABEZAS SIRENITA", imagen: "img/r17.png" },
    { id: 18, nombre: "ROMPECABEZAS LEON", imagen: "img/r18.png" },
    { id: 19, nombre: "ROMPECABEZAS FROZEN", imagen: "img/r19.png" },
    { id: 20, nombre: "ROMPECABEZAS BARBIE", imagen: "img/r20.png" },
    { id: 21, nombre: "ROMPECABEZAS MARVEL", imagen: "img/r21.png" },
    // Añade todos los productos necesarios aquí
];

// Elementos del DOM
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const resultsContainer = document.getElementById('results-container');

// Mostrar el campo de búsqueda al hacer clic en el icono
searchIcon.onclick = (e) => {
    e.preventDefault();
    searchInput.style.display = searchInput.style.display === 'none' ? 'inline-block' : 'none';
    searchInput.focus();
    searchResults.style.display = 'none'; // Oculta los resultados cuando se abre
};

// Filtrar productos según el texto ingresado
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    resultsContainer.innerHTML = ''; // Limpia los resultados previos

    if (query === '') {
        searchResults.style.display = 'none'; // Oculta los resultados si no hay texto
        return;
    }

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(query)
    );

    if (resultados.length > 0) {
        searchResults.style.display = 'block'; // Muestra el contenedor de resultados
        resultados.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('result-item');
            productoElemento.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50">
                <span>${producto.nombre}</span>
            `;
            resultsContainer.appendChild(productoElemento);
        });
    } else {
        searchResults.style.display = 'block';
        resultsContainer.innerHTML = '<p>No se encontraron productos.</p>';
    }
});
