import react from 'react'
import './puro2.css'
import brafe from '../../assets/brafe.png'
import { Link } from 'react-router-dom'

function Puro2(){

    return (
        <div>
            <div>
            <div>
                <p>aberto de 08h ás 18h - seg á sáb - 
                rua bartolomeu mitre -
                     botafogo</p>
            </div>

            <Link><img src={brafe}  alt="brafe"></img></Link>
            </div>

            <nav>
                <ul>
                    <li><Link>cafés</Link></li>
                    <li><Link>cappucinos</Link></li>
                    <li><Link>canecas</Link></li>
                    <li><Link>souvenir</Link></li>

                </ul>
            </nav>

        </div>
    )

}

export default Puro2