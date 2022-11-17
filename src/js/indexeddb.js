// Alamacenar el api en una variable
const indexedDb = window.indexedDB;

//Crear la variable que almacenará la instancia de la base de datos
let db

//Crear la conexión a la base de datos e indicar la versión
const conexion = indexedDb.open('listaTareas',2)

//Evento que se dispara cuando la base de datos se abré
conexion.onsuccess = () =>{
    db = conexion.result
    console.log('Base de datos abierta', db)
}

//Evento que se dispara cuando la base de datos se crea o se actualiza
conexion.onupgradeneeded = (e) =>{
    db = e.target.result
    console.log('Base de datos creada', db)
    const coleccionObjetos = db.createObjectStore('tareas',{
        keyPath: 'clave' /* Nombre del campo, dentro del registro, qué será la identificación única */
    })
}

//Evento que se dispara cuando la base de datos no se puede abrir
conexion.onerror = (error) =>{
    console.log('Error ', error)
}