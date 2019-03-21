/*global $*/

/*Contante para obtener las peliculas desde OMDB*/
const urlOMDB ="http://www.omdbapi.com/?apikey=4896bf68&type=movie";

/*ApiKey TMdb*/
const apiTMdb="?api_key=48819a4f88e3d597df63bebab6723d0f";

/*Constante para obtener las peliculas desde TMDb*/
const urlTMdb ="https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_date.gte=1940-01-01&primary_release_date.lte=1960-12-31";

/*Constante para obtener el id de una pelicula*/
const urlID ="https://api.themoviedb.org/3/movie/";

/*I. FUNCIONES*/

/*1. Función indexView() que permite imprimir el contenido dinámico de la página de inicio*/
function indexView(){

    /*JQuery elementos Materialize*/ 
    $(document).ready(function(){
        //Navbar
        $('.sidenav').sidenav();

        //carousel
        $('.carousel').carousel({            
            indicators: true            
        }); 
    });

    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `
    <section id="carouselwelcome">
    <!--Carrusel con contenido de materialize-->
        <section class="carousel carousel-slider center">
            <div id="onecarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>titulo carrusel 1</h2>
                    <p>Parrafo carrusel 1</p>                    
                </div>
            </div>
            <div id="twocarousel" class="carousel-item">
                <div class="carouselcontent">
                <h2>titulo carrusel 2</h2>
                <p>Parrafo carrusel 2</p>                  
                </div>
            </div>
            <div id="threecarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>titulo carrusel 3</h2>
                    <p>Parrafo carrusel 3</p> 
                </div>
            </div>
        </section> 
    </section>
    
    <button class="btnstart">Iniciar Búsqueda</button>

    <section>
        <h3>Recomendaciones<h3>    
    </section>

    `
    /*MANEJO DOM PÁGINA INICIO*/
    /*Página Búsqueda Indicadores a partir del elemento button*/  
    Array.from(document.getElementsByClassName('btnstart')).forEach(element=>{
        element.addEventListener('click',() =>{
            searchView()
        })
    }) 
};

/*2. Función aboutView() que permite imprimir el contenido dinámico de la página ¿Qué es Onda Retro?*/
function aboutView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 

    `
    <section id="aboutview" class="row"> 
        <h3>¿Qué es Onda Retro?</h3>     
        <h4>Página en construcción</h4>
    </section>             
    `  
}

/*3. Función searchView() que permite imprimir el contenido dinámico de la página Iniciar Búsqueda*/
function searchView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 

    `
    <section id="searchview" class="row"> 
        <h3>Iniciar Búsqueda</h3>     
        <div id="searchbox">
            <!--<input type="text" id="title">-->

            <label>Año de estreno</label>
            <select id="year" class="browser-default">
                <option value="">Seleccione un año</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
            </select>

            <label>Idioma</label>
            <select id="language" class="browser-default">
                <option value="">Seleccione un idioma</option>
                <option value="en">Inglés</option>
                <option value="es">Español</option>
                <option value="pt-BR">Potugues</option>                
            </select>

            <label>Genero</label>
            <select id="genre" class="browser-default">
                <option value="">Seleccione un genero</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="35">Comedy</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="10769">Foreign</option>
                <option value="36">History</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mistery</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="10770">TV Movie</option>
                <option value="53">Thriller</option>
                <option value="10752">War</option>
                <option value="37">Western</option>
            </select>

            <button id="btnsearch">Buscar</button>

        </div>
    </section> 

    <section id="result">

    </section>

 

    `  

/*Arrow function que permite realizar la busqueda por nombre y año, cuando la persona hace click en el boton*/
document.getElementById('btnsearch').addEventListener('click',() =>{
    /*let searchTitle ="&s="+document.getElementById('title').value;*/
    let searchYear = "&primary_release_year=" + document.getElementById('year').value;
    let searchLanguage = "&language=" + document.getElementById('language').value;
    let searchGenres = "&with_genres=" + document.getElementById('genre').value;


 
    fetch(urlTMdb/*+searchTitle*/ + searchYear + searchLanguage + searchGenres )
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
        movieShow(myJson);
    });
})
}

/*Funcion para repetir la busqueda pero con la página indicada */
function showPage(pageNum){
    alert("Pagina " + pageNum);
}

//función para imprimir peliculas buscadas.
function movieShow (myJson){
    let searchLanguage = "&language=" + document.getElementById('language').value;
    let dataMovie=myJson.results;
    let boxMovie=" ";

        dataMovie.forEach(element=> {
            fetch(urlID+element.id+apiTMdb+searchLanguage)
            .then(function(response){
            return response.json();
            })
            .then(function(element){
                let poster = "https://image.tmdb.org/t/p/original"+element.poster_path;
                let genres = element.genres.map((elemGenres)=>{return elemGenres.name}).join(", ");
            boxMovie +=
            `
            <div id="${element.id}" data-target="modal${element.id}" class="modal-trigger col s6 m3 lg3">
            
                <img src="${poster}" alt="${element.title}"/>
                <p>${element.title}</p>                 
            </div>
            <div id="modal${element.id}" class="modal">
                <div class="modal-footer">
                       <a href="#!" class="modal-close waves-effect btn-flat">X</a>
                 </div>

                 <div class="modal-content row">
                    <img src="${poster}" alt="${element.title}"/>
                    <p>${element.title}</p>
                    <p>${element.release_date}</p>   
                    <p>Genre: ${genres}</p>
                    <p>Plot: ${element.overview}</p> 
                 </div>
            </div>

            `
            let paging = `Pagina ${myJson.page} de ${myJson.total_pages}`;
            let classLeft = myJson.page==1?"disabled":"waves-effect";
            let classRight = myJson.page==myJson.total_pages?"disabled":"waves-effect";
            let onclickLeft = myJson.page==1?"":`onclick="showPage(${myJson.page-1})"`;
            let onclickRight = myJson.page==myJson.total_pages?"":`onclick="showPage(${myJson.page+1})"`;

            document.getElementById('result').innerHTML=
            `   <h3>Peliculas encontradas</h3>
                    <section id="moviebox" class="row">
                        ${boxMovie}
                    </section>

                <footer>
                    <ul class="pagination">
                        <li class="${classLeft}"><a href="#!" ${onclickLeft}><i class="material-icons">chevron_left</i></a></li>
                        <li>${paging}</li>
                        <li class="${classRight}"><a href="#!" ${onclickRight}><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                </footer>
            `

            /*Funcion materiallize modal*/
            $('.modal').modal();
            
        })
    })

}

/*II.MANEJO DEL DOM */

/*a)Inicialización página de inicio*/
document.addEventListener('DOMContentLoaded', () =>{ 
    indexView(); 
})

/*b)Página de inicio a partir del logo*/
document.getElementsByTagName('a')[0].addEventListener('click', () => {
    indexView();
})

/*c)Página ¿Qué es Onda Retro? desde el elemento navbar*/
Array.from(document.getElementsByClassName('aboutshow')).forEach(element=>{
    element.addEventListener('click',()=>{
        aboutView()
    })
})

/*d)Página iniciar búsqueda desde el elemento navbar*/
Array.from(document.getElementsByClassName('searchmovieshow')).forEach(element=>{
    element.addEventListener('click',()=>{
        searchView()
    })
})
