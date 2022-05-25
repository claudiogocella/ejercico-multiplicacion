//MULTIPLICACION
/*+arreglo1
arreglo2
arreglo3 new array (3)
function multiplicararreglo(arreglo1, arreglo2, arreglo3) {
  for {
    arreglo3[indice] = arreglo1[indice] * arreglo2[indice] 
  }
}
multiplicararreglo(arreglo1, arreglo2, arreglo3)
multiplicararreglo(arreglo4, arreglo5, arreglo3)+*/

let dimensionArreglo: number = Number(prompt ("Ingrese la dimensión del arreglo"))
let arreglo1:number [] = new Array (dimensionArreglo); 
let arreglo2:number [] = new Array (dimensionArreglo); 
// arreglo1:number [0] = 1); 

let cargarArreglo = (vector : number [],cantidad:number): number[] => {
  for (let indice: number =0; indice < cantidad; indice ++) {
    vector[indice]=Number (prompt ("Ingrese valor para la posición" +indice))
  } 
  return vector
} 

let multiplicararreglo = (vector1: number [], vector2: number[] , cantidad: number) : number[] => {
  let multiplicacion:number[] = new Array (cantidad): 
  for (let indice: number =0; indice < cantidad; indice ++) {
    multiplicacion[indice]= vector1 [indice] * vector2 [indice]
  }
return multiplicacion
}
cargarArreglo(arreglo1, dimensionArreglo);
cargarArreglo(arreglo2, dimensionArreglo);

console.log ("El resultado de la multiplicacion es "+ multiplicararreglo (arreglo1, arreglo2, dimensionArreglo))
