let pagina = 1; // valor de paágina en el que va iniciar
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){ 
        pagina += 1;
        cargarPeliculas ();
    }
});
btnAnterior.addEventListener('click', () => {
    if(pagina > 1){ 
        pagina -= 1;
        cargarPeliculas ();
    }
});


// fetch - nos devuelve una promesa que se guarda en la variable respuesta
// await - le indica que cuando de hacer la peteción ahora si pasa a la siguiente líne (sólo se puede usar dentro de funciones asincronas"async")

const cargarPeliculas = async () => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b705276f383a208899601fbc37f8b586&language=es-MX&page=${pagina}`);

        console.log(respuesta);

        // Es importante hacer una comprobación del código de respuesta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            // console.log(datos.title); // Accediendo a titulos

            let peliculas = '';
            // pedir que por cada elemento o película realice una función
            datos.results.forEach(pelicula => {
                //console.log(pelicula.title)
                peliculas += `
                <div class="pelicula">
                      <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                     <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        } else if (respuesta === 401){
            console.log('error de llave');
        } else if (respuesta === 404){
            console.log('la película que buscas no existe');
        } else {
            console.log('hubo un error y pronto lo solucionaremos')
        }

        


    } catch(error){
        console.log(Error);
    }
    
}

cargarPeliculas()