//Solución a problema () desde rama de prueba
//archivo creado desde rama "prueba"

/*1:
Entrada: un número pedido con un prompt. 
Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
Utiliza document.write para producir la salida
2:
Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
3:
Función: contador. Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
4:
Función: promedios. Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
5:
Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.
6:
Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, 
    alguna problemática que hayas identificado en algún ámbito, 
    un problema de programación que hayas resuelto en otro lenguaje, 
    un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, 
    y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, 
    el objeto además de su constructor deben tener al menos 2 métodos. 
    Muestra los resultados en el documento HTML.*/

    //ejercicio 6
class problema {
    constructor() {
        //constructor para armar un cachorro
        function cachorrito(raza_cachorrito, nombre_cachorrito, color_cachorrito) {
            this.cachorrito = nuevo_cachorrito;
            this.nombre = nuevo_nombre;
            this.raza = nueva_raza;
            this.color = nuevo_color;
            this.crear = crear_cachorrito();
            }

        //método
        function crear_cachorrito() {
            document.write("Tu cachorrito nuevo ", this.nombre, " ", this.raza, " con color ", this.color, ".<br />");
            }
            
        //llamar al método
        mi_cachorrito = new cachorrito("Schnauzer", "Moka", "negro");
        mi_cachorrito.crear_cachorrito();

    }
}

//ejercicio 1
function tabla() {
    var numero = prompt("Ingresa un número: ")

    for (let i = 0; i < numero.length(); i++){
        var resultado = document.write('Resultado: ' + i**2, i**3)
        return resultado;
    }

}
tabla();

//ejercicio 3 

function contador(arreglo) {

    var arreglo = new Array[1, 2, 6, 7, 9, 20, 30];

    for (var i = 0; i < arreglo.length; i++) {

        if (i < 0 || i > 0 || i === 0) {
            return i;
        }
    }
}

//ejercicio 4

/*4:
Función: promedios. Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.*/

function promedio(arreglo2) {

    var arreglo2 = new Array[1, 30, 10, 20, 30, 50];

    for (i = 0; i < arreglo2.length; i++) {
        
        for (j = 0; j < arreglo2[j]; j++){

            n = Math.random(round(1, 40));

            arreglo2.push(n);

            return promedio;
        }
    }
}

//Automatizar las pruebas
console.assert()