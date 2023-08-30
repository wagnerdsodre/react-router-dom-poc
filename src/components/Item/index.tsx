import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'
export const Item = () => {
    const params = useParams()
    const { id } = params
    const [ qs ] = useSearchParams()
    console.log(params)
    return <div>
        <h1>Item {`id:${id}`} {`query:${qs.get('page')}`}</h1> 
        <Outlet/>       
    </div>
}

