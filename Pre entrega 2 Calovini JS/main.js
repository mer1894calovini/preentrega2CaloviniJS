

function solicitarDatos(){ 
    let nombre=prompt("ingrese su nombre")
    let apellido=prompt("ingrese su apellido: (para continuar: continuar)");
    while (apellido != "continuar"){
        apellido = prompt("Ingrese su apellido: (para continuar ingrese: continuar)");
    }
}   
solicitarDatos()

class Vehiculo{ 
    constructor(nombre,modelo, año,km, precio){ 
    this.nombre=nombre;    
    this.modelo= modelo;
    this.año= año;
    this.km= km;
    this.precio=precio;
    }
        Financiacion() {
            return (this.precio*40)/100;
        }
}

const peogeot = new Vehiculo( "peogeot",208, 2022, 100000, 6000000);
const citroen = new Vehiculo( "citroen", 2011, 500000, 500000,2000000); 
const fiat = new Vehiculo("fiat","uno", 2013, 30000, 2500000);    
const chevrolet = new Vehiculo("chevrolet","prisma", 2017, 50000, 4000000);
const renault = new Vehiculo("renault","sandero", 2020, 19000, 4500000);

console.log(peogeot,citroen,fiat,chevrolet,renault);

const vehiculos=["peogeot", "citroen", "fiat", "chevrolet", "renault"];
console.log( vehiculos);



let auto=prompt("ingrese el nombre del auto que quiere adquirir: ")

const busqueda=vehiculos.find(Vehiculo => Vehiculo.nombre === auto);
alert( "el auto que quiere adquirir se encuentra en nuestro de stock de vehiculos");

/*auto= vehiculos.includes();
console.log(auto);
while (auto == true){
    let medioDePago= prompt("ingrese su forma de pago: efectivo/ financiado");
        switch(medioDePago) {
//         // vehiculos.forEach(auto => alert ("el pecio es de " auto.precio) 

//         // }*/
/*  case "efectivo":
            alert( "El valor es: " auto.precio );
            break; 
    case "financiado":
            alert("El valor es: " (auto + (this.precio + Financiacion)));
            break;
    }
} */
