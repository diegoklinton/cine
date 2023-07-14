import { Link } from "react-router-dom"
import { BiSolidSearch} from "react-icons/bi";
import './styleHeader.css'

function Header () {
    return (
        <nav className="navbar">            
            <p className="title-nav">
                <Link className="link" to="/"> Cine Explorer </Link>
            </p>                
            <form className="search">
                <input className="search-field" type="text" placeholder="Buscar filme"></input>
                <button className="search-button" type="submit"><BiSolidSearch className="lupa"/></button>
            </form>          
        </nav>

    )
}

export default Header