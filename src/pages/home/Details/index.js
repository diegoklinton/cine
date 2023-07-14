
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details (){
    const {id} = useParams();
    console.log(id);
    
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect (() => {       
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=6f01f7b74b82f8e9bd3602331a5db5f3`)
        .then(response =>response.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview, 
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date,
                time: data.runtime,
                adult: data.adult,
               
                if (adult = false){
                    adult = "Classificação -18"
                }
            }
            
            setMovie(movie)
            console.log(movie)
            console.log(data)           
        })
    },[id])
   
    return(       
        <div className="movie">
            <img id= "imagem" src={movie.image} alt="imagem do filme"></img>
            <div className="details">
                <h1>{movie.title}</h1>
                <span id="spanPag2">Sinopse: {movie.sinopse}</span>
                <span id="spanPag2">Tempo de duração: {movie.time } minutos</span>
                <span id="spanPag2">Gêneros: </span>
                <span id="spanPag2">Classificação: </span>
                <span className="release-date">Data de lançamento: { movie.releaseDate} </span>
                <Link to="/"><button>Voltar</button></Link>
            </div>
        </div>
    )
}

export default Details