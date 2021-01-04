import './grid.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/brafe.png'
import foto1 from '../../assets/cafe-1.jpg'
import foto2 from '../../assets/cafe-2.jpg'
import foto3 from '../../assets/botafogo.jpg'
import foto4 from '../../assets/iguatemi.jpg'
import foto5 from '../../assets/mineirao.jpg'

function Grid(){
    return(
        <div className="div-trol">
        <header className="menu-grid">
            <div className="container-grid">
          <Link className="menu-logo-grid grid-4" to='/'> <img src={Logo}></img> </Link>
     
            <nav className="menu-nav-grid grid-8">
                <ul >
                    <li>  <Link className="linki" to='/'>Sobre</Link></li>
                    <li>  <Link className="linki" to='/'>Produtos</Link></li>
                    <li>  <Link className="linki" to='/'>Portfólio</Link></li>
                    <li>  <Link className="linki" to='/'>Contato</Link></li>
                </ul>
            </nav>
            </div>
        </header>
         <main className="intro-grid ">
             <h1>Cafés com a cara <br/>do brasil</h1>
             <p>Direto das fazendas de Minas Gerais</p>
         </main>
     
             <section className="sobre-grid  container-grid">
                 <h2>Uma Mistura de</h2>
     
                 <div >
                     <div className="sobre-item-grid grid-6">
                         <img src={foto1}></img>
                         <h3>amor</h3>
                     </div>
                     <div className="sobre-item-grid grid-6">
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
             <section className="produtos-grid">
                 <div className="container-grid">
                     <div className="produtos-item-grid grid-4">
     
                         <h2 className="produtos-paulista-grid ">Paulista</h2>
                         <p>As condições climaticas não eram as melhores nessa primeira escolha
                             e, entre 1800 e 1850,tentou-se o cultivo outras regiões: o João Alberto
                             Castelo Branco trouxe mudas do Pará
                         </p>
                     </div>
                     <div className="produtos-item-grid grid-4">
                         <h2 className="produtos-carioca-grid ">Carioca</h2>
                         <p>As condições climaticas não eram as melhores nessa primeira escolha
                             e, entre 1800 e 1850,tentou-se o cultivo outras regiões: o João Alberto
                             Castelo Branco trouxe mudas do Pará
                         </p>
                     </div>
                     <div className="produtos-item-grid grid-4">
                         <h2 className="produtos-mineiro-grid ">Mineiro</h2>
                         <p>As condições climaticas não eram as melhores nessa primeira escolha
                             e, entre 1800 e 1850,tentou-se o cultivo outras regiões: o João Alberto
                             Castelo Branco trouxe mudas do Pará
                         </p>
                     </div>
                 </div>
                 <Link to="/" className="produtos-btn-grid" >Saiba Mais</Link>
     
             </section>
             <section className="locais-grid " >
                 <div className="locais-item-grid container-grid ">
                 <div className="grid-6">
                     <img src={foto3}></img> 
                     </div>   
                     <div className="grid-6">
                         <h2>Botafogo</h2>
                         <p>As condições climaticas não eram as melhores nessa primeira escolha e, entre
                             1800 e 1850,tentou-se o cultivo
                         </p>
                         <Link to="/" className="locais-btn-grid">Ver Mapa</Link>
                     </div>
     
                 </div>
                 <div className="locais-item-grid container-grid">
                     <div className="grid-6">
                     <img src={foto4}></img>
                     </div>    
                     <div className="grid-6">
                         <h2>Iguatemi</h2>
                         <p>As condições climaticas não eram as melhores nessa primeira escolha e, entre
                             1800 e 1850,tentou-se o cultivo
                         </p>
                         <Link to="/" className="locais-btn-grid">Ver Mapa</Link>
                     </div>
     
                 </div>
                 <div className="locais-item-grid container-grid">
                 <div className="grid-6">
                     <img src={foto5}></img>
                     </div>    
                     <div className="grid-6">
                         <h2>Mineirão</h2>
                         <p>As condições climaticas não eram as melhores nessa primeira escolha e, entre
                             1800 e 1850,tentou-se o cultivo
                         </p>
                         <Link to="/" className="locais-btn-grid">Ver Mapa</Link>
                     </div>
     
                 </div>
             </section>
     
             <section className="assine-grid">
     
                 <div className="container-grid">
                     <div className="assine-info-grid grid-6">
                         <h2>Assine Nossa Newletter</h2>
                         <p>promoções e eventos mensais</p>
                     </div>
                     <form className="grid-6"> 
                         <label>E-mail</label>
                         <input type="text" placeholder="Digite seu e-mail"></input>
                         <button type="submit">Enviar</button>
                     </form>
                 </div>
             </section>
     
             <footer className="footer-grid">
                 <div className="container-grid">
                 <div className="grid-8">
                     <p>Este é um projeto da origamid. Mais em origamid.com<br></br>
                     Praia do Botafogo,300,5 andar , Botafogo - RJ
                     </p>
                     </div>
                     <div className="grid-4">
                     <img src={Logo}></img>
                     </div>
                 </div>
             </footer>
     
        </div>
    )
}




export default Grid