import { Link } from 'react-router-dom'
import './puro.css'
import Logo from '../../assets/brafe.png'
import foto1 from '../../assets/cafe-1.jpg'
import foto2 from '../../assets/cafe-2.jpg'
import foto3 from '../../assets/botafogo.jpg'
import foto4 from '../../assets/iguatemi.jpg'
import foto5 from '../../assets/mineirao.jpg'
function Puro(){
return(
    <div>
   <header className="header menu">
       <div className="menu-container">
     <Link className="menu-logo" to='/'> <img src={Logo}></img> </Link>

       <nav className="menu-nav">
           <ul className="">
               <li>  <Link className="linki" to='/'>Sobre</Link></li>
               <li>  <Link className="linki" to='/'>Produtos</Link></li>
               <li>  <Link className="linki" to='/'>Portfólio</Link></li>
               <li>  <Link className="linki" to='/'>Contato</Link></li>
           </ul>
       </nav>
       </div>
   </header>
    <main className="intro">
        <h1>Cafés com a cara <br/>do brasil</h1>
        <p>Direto das fazendas de Minas Gerais</p>
    </main>

        <section className="sobre">
            <h2>Uma Mistura de</h2>

            <div className="sobre-container">
                <div className="sobre-item">
                    <img src={foto1}></img>
                    <h3>amor</h3>
                </div>
                <div className="sobre-item">
                    <img src={foto2}></img>
                    <h3>perfeição</h3>
                </div>
            </div>
            <p>O café é uma bebida produzida a partir de grãos torrados do fruto cafeeiro.
                É servidor tradicionalmente quente, mas também pode ser consumido gelado.Ele É
                um estimulante, por possuir cafeína - geralmente 80 a 140mg para cada 207ml dependendo
                do método de preparação
            </p>

        </section>
        <section className="produtos">
            <div className="produtos-container">
                <div className="produtos-item">

                    <h2 className="produtos-paulista">Paulista</h2>
                    <p>As condições climaticas não eram as melhores nessa primeira escolha
                        e, entre 1800 e 1850,tentou-se o cultivo outras regiões: o João Alberto
                        Castelo Branco trouxe mudas do Pará
                    </p>
                </div>
                <div className="produtos-item">
                    <h2 className="produtos-carioca">Carioca</h2>
                    <p>As condições climaticas não eram as melhores nessa primeira escolha
                        e, entre 1800 e 1850,tentou-se o cultivo outras regiões: o João Alberto
                        Castelo Branco trouxe mudas do Pará
                    </p>
                </div>
                <div className="produtos-item">
                    <h2 className="produtos-mineiro">Mineiro</h2>
                    <p>As condições climaticas não eram as melhores nessa primeira escolha
                        e, entre 1800 e 1850,tentou-se o cultivo outras regiões: o João Alberto
                        Castelo Branco trouxe mudas do Pará
                    </p>
                </div>
            </div>
            <Link to="/" className="produtos-btn" >Saiba Mais</Link>

        </section>
        <section className="locais" >
            <div className="locais-item">
                <img src={foto3}></img>    
                <div>
                    <h2>Botafogo</h2>
                    <p>As condições climaticas não eram as melhores nessa primeira escolha e, entre
                        1800 e 1850,tentou-se o cultivo
                    </p>
                    <Link to="/" className="locais-btn">Ver Mapa</Link>
                </div>

            </div>
            <div className="locais-item">
                <img src={foto4}></img>    
                <div>
                    <h2>Iguatemi</h2>
                    <p>As condições climaticas não eram as melhores nessa primeira escolha e, entre
                        1800 e 1850,tentou-se o cultivo
                    </p>
                    <Link to="/" className="locais-btn">Ver Mapa</Link>
                </div>

            </div>
            <div className="locais-item">
                <img src={foto5}></img>    
                <div>
                    <h2>Mineirão</h2>
                    <p>As condições climaticas não eram as melhores nessa primeira escolha e, entre
                        1800 e 1850,tentou-se o cultivo
                    </p>
                    <Link to="/" className="locais-btn">Ver Mapa</Link>
                </div>

            </div>
        </section>

        <section className="assine">

            <div className="assine-container">
                <div className="assine-info">
                    <h2>Assine Nossa Newletter</h2>
                    <p>promoções e eventos mensais</p>
                </div>
                <form>
                    <label>E-mail</label>
                    <input type="text" placeholder="Digite seu e-mail"></input>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>

        <footer className="footer">
            <div className="footer-container">
                <p>Este é um projeto da origamid. Mais em origamid.com<br></br>
                Praia do Botafogo,300,5 andar , Botafogo - RJ
                </p>
                <img src={Logo}></img>
            </div>
        </footer>

   </div>
)
}



export default Puro