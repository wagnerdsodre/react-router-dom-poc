import './style.css'
import { Link } from 'react-router-dom'
export const Menu = () => {
    return <ul className='menu'>
        <li> <Link to="/"> Home </Link></li>
        <li><Link to="/sobre" > Sobre </Link></li>
        <li><Link to="/item" > Item </Link></li>
        <li><Link to="/item/:id" > Item </Link></li>
        <li><Link to="/redirect" > Redirecionar </Link></li>        
    </ul>
}

