import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h2>Acesse nossas redes sociais: </h2>
                <div className='block-items'>
                <Link className="link" to='google.com'><p className='footer-item'>Instagram</p></Link>
                <Link className="link" to='google.com'><p className='footer-item'>Whatsapp</p></Link>
                <Link className="link" to='google.com'><p className='footer-item'>Github</p></Link>
                <p class="copyright">&copy; Copyright Cine Explorer - 2023</p>
                </div>
        </div>
    )
}

export default Footer