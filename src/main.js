/*global $*/

/*Contante para obtener las peliculas*/
const url ="http://www.omdbapi.com/?apikey=4896bf68&type=movie"


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
            <input type="text" id="title">

            <label>Año de estreno</label>
            <select id="year" class="browser-default">
                <option value="all">Seleccione un año</option>
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
            </select>
            <button id="btnsearch">Buscar</button>

        </div>
    </section> 

    <section id="result">

    </section>
    `  

/*Arrow function que permite realizar la busqueda por nombre y año, cuando la persona hace click en el boton*/
document.getElementById('btnsearch').addEventListener('click',() =>{
    let searchTitle ="&s="+document.getElementById('title').value;
    let searchYear = "&y=" + document.getElementById('year').value;
 
    fetch(url+searchTitle + searchYear)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
        movieShow(myJson);
    });
})
}

//función para imprimir peliculas buscadas.
function movieShow (myJson){
    let dataMovie=myJson.Search;
    let boxMovie=" ";

        dataMovie.forEach(element=> {
            fetch(url+"&i="+element.imdbID)
            .then(function(response){
            return response.json();
            })
            .then(function(element){
            boxMovie +=
            `
            <div id="${element.imdbID}" data-target="modal${element.imdbID}" class="modal-trigger col s12 m6 lg3">
            
                <img src="${element.Poster}" alt="${element.Title}"/>
                <p>${element.Title}</p>
                <p>${element.Year}</p>   
            </div>
            <div id="modal${element.imdbID}" class="modal">
                <div class="modal-footer">
                       <a href="#!" class="modal-close waves-effect btn-flat">X</a>
                 </div>

                 <div class="modal-content row">
                    <img src="${element.Poster}" alt="${element.Title}"/>
                    <p>${element.Title}</p>
                    <p>${element.Year}</p>   
                    <p>Genre: ${element.Genre}</p>
                    <p>Plot: ${element.Plot}</p> 
                 </div>
            </div>
            `


            document.getElementById('result').innerHTML=
            `   <h3>Peliculas encontradas</h3>
                    <section id="moviebox" class="row">
                        ${boxMovie}
                    </section>
            `


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
