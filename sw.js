const CACHE_NAME = 'cache-v1';
const CACHE_FILES = [
    'src/images/icons/icon-144x144.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.getmdl.io/1.3.0/material.brown-orange.min.css',
    'https://code.getmdl.io/1.3.0/material.min.js',
    'https://unpkg.com/pwacompat',
    'src/js/indexeddb.js',
    'src/css/app.css',
    'src/js/app.js',
    'index.html',
    'src/js/firebase.js',
    '/'

]; 


self.addEventListener('install', (event) => {
    //Nosotros deberiamos agregar al cache nuestros archivos
    console.info('[SW]: Adicionando nuestros archivos al cache...');

   const wu = new Promise((resolve, reject) => {
    try{
        setTimeout(() => {
            const adicionandoMisArchivos = '';
            const adicionarVariablesDinamicas = '';
            console.warn('[SW]: Se instalo correctamente...');
            resolve();
        }, 1000); //1 segundo

        self.skipWaiting();
    } catch (error){
        reject(error.message);
    }
   })
   event.waitUntil(wu);

   const guardandoCache = caches.open(CACHE_NAME)
   .then(cache => {
    return cache.addAll(CACHE_FILES);
    //console.log('---------------------------------');
    //console.log(cache);
    //console.log('----------------------------------------');
   })
   .catch(err => console.error(err.message));
   self.skipWaiting();
   event.waitUntil(guardandoCache);
});


self.addEventListener('activate', (event) => {
    //La documentacion nos indica eliminar todos los caches anteriores
    console.info('[SW]: Archivos exitosamente guardados...');
    //event.waitUntil(clients.cliam());
});


//codigo de tutorial de youtube  https://www.youtube.com/watch?v=VEIsnSZRt-Y&t=375s
//self.addEventListener('fetch', function(event) {
   // event.respondWith(
        //caches.match(event.request)
        //.then(function(response) {
            //if (response) {
                //return response;
            //}
            //return fetch(event.request);
        //})
   // );
//});

self.addEventListener('sync', (event) => {
    console.log('------------------------------------');
    console.log(event);
    console.log('---------------------------------');
});

self.addEventListener('push', (event) => {
    console.error(event);
});