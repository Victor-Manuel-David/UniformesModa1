// Array de productos
const productos = [
    {
        id: 1,
        nombre: "Uniforme HGM",
        descripcion: "Uniforme antifluido de alta calidad",
        precio: 99000,
        imagen: "Imagenes/Uniforme HGM.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
            

        ],
        categoria: "uniformes",
        nuevo: true,
    },
    {
        id: 2,
        nombre: "Uniforme Cruzado",
        descripcion: "Set completo para profesionales de cirugía",
        precio: 99000,
        imagen: "Imagenes/Uniforme Cruzado.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "uniformes",
        destacado: false,
        reviews: 18
    },
    {
        id: 3,
        nombre: "Uniforme 029",
        descripcion: "Calzado ergonómico para largas jornadas",
        precio: 99000,
        imagen: "Imagenes/Uniforme 029.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "zapatos",
        destacado: true,
        reviews: 32
    },
    {
        id: 4,
        nombre: "Uniforme Rut",
        descripcion: "Bata ligera con protección antimicrobiana",
        precio: 110000,
        imagen: "Imagenes/uniforme Rut.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "uniformes",
        destacado: false,
        reviews: 41
    },
    {
        id: 5,
        nombre: "Uniforme  Cuello V con cierre",
        descripcion: "Set de fonendoscopio y accesorios",
        precioOriginal: 110000,
        precio: 95000,
        imagen: "Imagenes/Uniforme Cuello V con cierre.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "accesorios",
        destacado: true,
        oferta: true,
        reviews: 19
    },
    {
        id: 6,
        nombre: "Uniforme Polo",
        descripcion: "Calzado esterilizable para entornos clínicos",
        precio: 99000,
        imagen: "Imagenes/Uniforme Polo.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "zapatos",
        destacado: false,
        reviews: 15
    },
    {
        id: 7,
        nombre: "Uniforme Cuello V Caballero",
        descripcion: "Camisa médica para hombre en tono rojo",
        precio: 80000,
        imagen: "Imagenes/Uniforme Cuello V Caballero.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "uniformes",
        destacado: false,
        reviews: 13
    },
    {
        id: 8,
        nombre: "Uniforme Deportivo",
        descripcion: "Camisa médica para mujer con diseño exclusivo",
        precio: 110000,
        imagen: "Imagenes/Uniforme Deportivo.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "uniformes",
        destacado: true,
        nuevo: true,
        reviews: 27
    },
    {
        id: 9,
        nombre: "Uniforme Cuello Redondo",
        descripcion: "Camisa médica de manga corta para mujer",
        precio: 99000,
        imagen: "Imagenes/Uniforme Cuello Redondo.png",
        colores: [
            { nombre: "Azul Oscuro", codigo: "#010147" },
            { nombre: "Azul Rey", codigo: "#031bb1" },
            { nombre: "Azul Claro", codigo: "#0395e0" },
            { nombre: "Gris ratón", codigo: "#567d78" },
            { nombre: "Verde militar", codigo: "#567d78" },
            { nombre: "Rojo", codigo: "#9b0205" },
            { nombre: "Rosado", codigo: "#d07390" },
            { nombre: "Negro", codigo: "#000000" },
            { nombre: "Blanco", codigo: "#fffff" }
        ],
        categoria: "uniformes",
        destacado: false,
        reviews: 21
    }
];

// Función para generar las estrellas de calificación
function generarEstrellas(calificacion) {
    let estrellas = '';
    const calificacionRedondeada = Math.floor(calificacion);
    const tieneMedia = calificacion % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= calificacionRedondeada) {
            estrellas += '<i class="fas fa-star"></i>';
        } else if (i === calificacionRedondeada + 1 && tieneMedia) {
            estrellas += '<i class="fas fa-star-half-alt"></i>';
        } else {
            estrellas += '<i class="far fa-star"></i>';
        }
    }
    
    return estrellas;
}

// Función para crear la card de producto
function crearCardProducto(producto) {
    let colorDots = '';
    producto.colores.forEach(color => {
        colorDots += `<span class="color-dot" title="${color.nombre}" style="background: ${color.codigo};"></span>`;
    });
    
    let precioHTML = '';
    if (producto.oferta) {
        precioHTML = `<p class="product-price"><span class="original-price">$${producto.precioOriginal.toLocaleString('es-CO')}</span> $${producto.precio.toLocaleString('es-CO')}</p>`;
    } else {
        precioHTML = `<p class="product-price">$${producto.precio.toLocaleString('es-CO')}</p>`;
    }
    
    let badge = '';
    if (producto.nuevo) {
        badge = '<div class="product-badge">Nuevo</div>';
    } else if (producto.oferta) {
        badge = '<div class="product-badge">Oferta</div>';
    }
    
    return `
        <div class="product-card" data-id="${producto.id}" data-categoria="${producto.categoria}" data-precio="${producto.precio}">
            ${badge}
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            
            <p>${producto.descripcion}</p>
            ${precioHTML}
            <div class="colors">
                ${colorDots}
            </div>
        </div>
    `;
}

// Función para mostrar los productos
function mostrarProductos(productosArray = productos) {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';
    
    if (productosArray.length === 0) {
        contenedor.innerHTML = '<div class="no-products">No se encontraron productos que coincidan con los filtros.</div>';
        return;
    }
    
    productosArray.forEach(producto => {
        contenedor.innerHTML += crearCardProducto(producto);
    });
    
    // Inicializar efectos después de crear los productos
    inicializarEfectos();
}

// Función para inicializar los efectos
function inicializarEfectos() {
    // Efecto hover en botones
    const buttons = document.querySelectorAll('.add-to-cart-btn, .apply-filters');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(139, 17, 85, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
        });
    });

    // Animación para las cards de productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
    });

    // Funcionalidad del carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            alert(`Producto agregado: ${productName} - ${productPrice}`);
            
            // Actualizar contador del carrito
            const cartCount = document.querySelector('.header-cart span');
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = `${currentCount + 1} ELEMENTOS`;
        });
    });
}

// Función para filtrar productos
function filtrarProductos() {
    // Obtener filtros seleccionados
    const categoriasFiltradas = [];
    document.querySelectorAll('.category-filter:checked').forEach(checkbox => {
        categoriasFiltradas.push(checkbox.value);
    });
    
    const precioMin = parseInt(document.getElementById('min-price').value) || 0;
    const precioMax = parseInt(document.getElementById('max-price').value) || 1000000;
    
    // Filtrar productos
    let productosFiltrados = productos;
    
    // Filtrar por categoría si hay categorías seleccionadas
    if (categoriasFiltradas.length > 0) {
        productosFiltrados = productosFiltrados.filter(producto => 
            categoriasFiltradas.includes(producto.categoria)
        );
    }
    
    // Filtrar por precio
    productosFiltrados = productosFiltrados.filter(producto => 
        producto.precio >= precioMin && producto.precio <= precioMax
    );
    
    // Mostrar productos filtrados
    mostrarProductos(productosFiltrados);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar productos al cargar la página
    mostrarProductos();
    
    // Preloader
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('hidden');
    }, 800);
    
    // Eventos para filtros
    document.querySelector('.apply-filters').addEventListener('click', filtrarProductos);
    
    // Sincronizar rango de precios con inputs
    document.getElementById('price-slider').addEventListener('input', function() {
        document.getElementById('max-price').value = this.value;
        filtrarProductos();
    });
    
    document.getElementById('min-price').addEventListener('input', function() {
        filtrarProductos();
    });
    
    document.getElementById('max-price').addEventListener('input', function() {
        document.getElementById('price-slider').value = this.value;
        filtrarProductos();
    });
    
    // Animación carrito
    const cart = document.querySelector('.header-cart');
    cart.addEventListener('click', function() {
        this.classList.add('animate__animated', 'animate__heartBeat');
        setTimeout(() => {
            this.classList.remove('animate__animated', 'animate__heartBeat');
        }, 1000);
    });
});