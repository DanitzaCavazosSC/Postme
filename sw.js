self.addEventListener('install', (event) => {
    //Nosotros deberiamos agregar al cache nuestros archivos
    console.info('[SW]: Adicionando nuestros archivos al cache...');
    
    const wu = new Promise((resolve, reject) => {
        try {
            setTimeout(() =>{
            const adicionandoMisrchivo = '';
            const adicioandoVariabesDonaamicas = '';
            console.warn('[SW]: Se Instalo Correctmente...');
            resolve();
        }, 1000); //1 segundo
            self.skipWaiting();
            } catch (error){
                reject(error.message);
            }
        })
    event.waitUntil(wu);
    });


self.addEventListener('activate', (event) => {
//la ddocumentecion nos indica elimiar todoss los cache anteriores
    console.info('[SW]: Archivos exitosamente guardados...');
    //event.waitUntil(clients.cliam());
});

self.addEventListener('fetch', (event) => {
    console.info('[SW]: Instalando...');
});

self.addEventListener('sync', (event) => {
    console.log('--------------------------------');
    console.log(event);
    console.log('----------------------------------');

});