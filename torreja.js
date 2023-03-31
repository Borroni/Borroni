class Producto { //definimos una clase pero sin valor
    constructor(nombre, peso, valor, direccion){
        this.nombre = nombre;
        this.peso = peso;
        this.valor = valor;
        this.direccion = direccion;
    }
}
let ingresados = []; //lista vacia 
let cantidadProductos = parseInt(prompt ("¿Cuantos perdidos quiere comprar?"));
let impuesto = 0;
let eleccion  ;
let productoEliminado ;
let ciclo = true;
  
for (let i  = 0; i < cantidadProductos; i++){  
    //el primer dato antes de push es donde se guardan la info nueva
    ingresados.push (cargarProductos())//se cargan lo productos haciendo uso de la función y del push para creando el Procuto 

} //carga los primero productos 
while (ciclo) {  

    impuesto = calcularImpuestos(ingresados, cantidadProductos);
    alert("Impuestos a pagar: " + impuesto)
    eleccion = parseInt(prompt("¿Que accion queres hacer?\n 1:agregar producto\n 2:eliminar producto\n 3:terminar y pagar"));

    switch(eleccion){
        case 1:
            ingresados.push (cargarProductos());
            cantidadProductos++;
            break
        case 2:
            productoEliminado= parseInt(prompt("¿Que producto queres elimnar? (1 - " + cantidadProductos + ")"));
            productoEliminado--; 
            ingresados.splice(productoEliminado,1);//esto elimina un solo producto 
            cantidadProductos--; 
            break 
        case 3:
            alert("El monto de impuesto a pagar es " + impuesto);
            ciclo = false;
            break
            
    }
        
}

function cargarProductos () {//genera los  valores para la class Producto 
    let producto = new Producto ( prompt("Nombre"),
                                prompt("Peso"),
                                parseInt(prompt("Valor")),
                                prompt("Direccion")) 

    return (producto) //muestra los datos de la función 
} 

function calcularImpuestos(productos, cantidadProductos) {
    const impuestoPais = 0.3;
    const valorExedido = 50; 
    const impuestoExceso = 0.5; 
    let impuestos = 0;
    let valorTotal = 0;
    for (let i = 0; i < cantidadProductos; i++){
        impuestos+= impuestoPais * productos[i].valor 
        valorTotal+= productos[i].valor 
    }
    if (valorExedido < valorTotal){
        impuestos+= impuestoExceso * valorTotal 
        
    }

    return (impuestos) 
}  

