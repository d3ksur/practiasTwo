let nombre = prompt("Escribe tu nombre");
alert("hola " + nombre);

function sum(a, b){
    return a + b;
}
  
console.log(sum(2, 2))

let frutas = ["manzana", "banana", "durazno"]

console.log(frutas[0])

let persona = {
    nombre: "Matias",
    edad: 20,
    dni: 1237483
}

console.log(persona["nombre"])

// Creamos una función que retorna una promesa
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    // Hacemos una petición a la API para obtener la información del usuario
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (response.ok) {
          // Si la respuesta es exitosa, resolvemos la promesa con los datos del usuario
          resolve(response.json());
        } else {
          // Si hay un error en la respuesta, rechazamos la promesa con un mensaje de error
          reject('Error al obtener usuario');
        }
      })
      .catch(error => {
        // Si hay un error en la petición, rechazamos la promesa con un mensaje de error
        reject('Error en la petición');
      });
  });
}

// Llamamos a la función y manejamos la promesa con then y catch
obtenerUsuario(1)
  .then(usuario => {
    console.log(usuario);
  })
  .catch(error => {
    console.log(error);
  });
