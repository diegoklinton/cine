/*import { useState } from "react";
import Header from "../header";

    function fetchMovie() {
        const formSearch = document.querySelector("form")
    
        formSearch.onsubmit = (evento) => {
            evento.preventDefault();
    
            const search = evento.target.searchField.value;
            const image_path = 'https://image.tmdb.org/t/p/w500'
    
            fetch(`https://api.themoviedb.org/3/movie/${search}?api_key=6f01f7b74b82f8e9bd3602331a5db5f3`)
                .then(response => response.json())
                .then(json => console.log(json))
            /*const searchMovie = {
                id,
                title: data.title,
                sinopse: data.overview, 
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date,
                time: data.runtime,
                adult: data.adult,           
               }
            })*/
    
     