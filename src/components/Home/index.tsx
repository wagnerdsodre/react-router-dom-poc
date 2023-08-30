import { useLocation } from 'react-router-dom'
import './style.css'
export const Home = () => {
    const location = useLocation()
    return <div>
        <h1>Home</h1>
        <p> {location.state}</p>
    </div>
}

