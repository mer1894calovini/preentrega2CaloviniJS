/* class Prenda {
    constructor (id, nombre, precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
const calza = new Prenda(1,"calza", 2500, "img/calza.jpg");
const campera = new Prenda(2, "campera", 5000,"img/campera.jpg");
const gorra = new Prenda(3,"gorra", 1000, "img/gorra.jpg");
const short = new Prenda(4, "short", 3000, "img/short.jpg");
const zapatillas = new Prenda(5, "zapatillas", 7000, "img/zapatillas.jpg");

const prendas = [calza, campera, gorra, short, zapatillas];
console.log(prendas)   */
let ropa = [];
fetch("./js/ropa.json")
    .then(response => response.json())
    .then(data =>{
        ropa=data;
        mostrarPrendas();
    })

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}


const listaDePrendas = document.getElementById("listaDePrendas");

const mostrarPrendas = () => {
    prendas.forEach(prenda  => {
        const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
            card.innerHTML = ` 
                    <div class="card">
                        <img src = "${prenda.img}" class = "card-img-top  imgPrenda" alt= "${prenda.nombre}">
                        <div>
                            <h5> ${prenda.nombre} </h5>
                            <p> ${prenda.precio} <p>
                            <button class = "btn  colorButton" id="boton${prenda.id}">Agregar al carrito</button>
                        </div>
                    </div>
                    `
        listaDePrendas.appendChild(card);  
        const boton = document.getElementById(`boton${prenda.id}`); 
        boton.addEventListener("click", () => {
            agregarAlCarrito(prenda.id);     
        })        
    })              
} 
mostrarPrendas();



const agregarAlCarrito = (id) => {
    const prendaEnCarrito = carrito.find(prenda => prenda.id === id); 
    if(prendaEnCarrito) {
    prendaEnCarrito.cantidad++;
    }else {
        const prenda = prendas.find(prenda => prenda.id === id);
        carrito.push(prenda);
    }
    montoTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById ("verCarrito");
    verCarrito.addEventListener("click", () =>{
        mostrarCarrito();
    })
const mostrarCarrito =() => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(prenda =>{
            const card = document.createElement("div");
                card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
                card.innerHTML = ` 
                        <div class="card">
                            <img src = "${prenda.img}" class = "card-img-top  imgPrenda" alt= "${prenda.nombre}">
                            <div>
                                <h5> ${prenda.nombre} </h5>
                                <p> ${prenda.precio} </p>
                                <p> ${prenda.cantidad} </p>
                                <button class = "btn  colorButton" id="eliminar${prenda.id}" >Eliminar</button>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${prenda.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(prenda.id); 
        })
    })
    montoTotal();
}
const eliminarDelCarrito = (id)  => {
    const prenda = carrito.find(prenda => prenda.id === id);
    const indice = carrito.indexOf(prenda);
    carrito.splice(indice,1);
    mostrarCarrito();

    localStorage.setItem("carrito".JSON.stringify(carrito));
}

const total = document.getElementById("total");

const montoTotal = () => {
    let compraTotal = 0;
    carrito.forEach(prenda =>{
        compraTotal += prenda.precio * prenda.cantidad;
        total.innerHTML = `Total: $${compraTotal}`
    })
}

const vaciarCarrito = document.getElementById("vaciarCarrito");
    vaciarCarrito.addEventListener("click", () => {
        eliminarTodo();
    })

const eliminarTodo = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
}
