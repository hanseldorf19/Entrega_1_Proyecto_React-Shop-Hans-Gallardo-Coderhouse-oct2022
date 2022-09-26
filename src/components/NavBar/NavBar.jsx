import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenLogo from '../../assets/logo-liquid-natura.png'
import { CardWidget } from '../CardWidget/CardWidjet';
export const NavBar = ()=>{
    return( 
        <nav className='navigation '>
            <img src={ImagenLogo} className='logoImg' alt="Liquid Natura"></img>
            <ul className='list mt-4 pt-1'>
             <li><a href="/">Surf y Peddle Surf</a></li>
             <li><a href="/">Submarinismo y Snorkel</a></li>
             <li><a href="/">Kayak y deportes de Rio</a></li>
             <li><a href="/">Nautica y accesorios</a></li>
             <li><a href="/">Barranquismo</a></li>
             <li><a href="/">Natacion</a></li>
             <li><a href="/">Playa</a></li>
             <li><a href="/">Pesca</a></li>
            </ul>
            <CardWidget/>
        </nav>

    )
}