import Card from '../cards/cards';
import './home.css'




function Home() {

    /*const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect (() => {

        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=6f01f7b74b82f8e9bd3602331a5db5f3')
        .then(response =>response.json())
        .then(data => {
            console.log(data.results)
            setMovies(data.results)
        })

        
    }, [])*/

    return (
        <div>
        <h1>Filmes em alta</h1>
            <Card/>
        </div>
        /*<div>            
                <ul>
                    {movies.map(movie => {
                        return (
                            <li > 
                                <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                                <Link className="link" to={`/details/${movie.id}`}><span>{movie.title}</span></Link>
                                <p className="date">Data de lançamento: {movie.release_date}</p>
                            </li>
                        )
                    })}
                </ul>
        </div>*/
    )
}

export default Home;
