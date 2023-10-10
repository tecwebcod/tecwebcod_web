import React from "react";
import './style.css'
import logo from '../../Assets/Logotecweb.png'

export default function Header() {

    //const [menu, setMenu] = useState(false)


    function showmenu() {
        document?.querySelector('.btn-menu')?.classList.toggle('animation')
        document?.querySelector('.nav-menu')?.classList.toggle('animation2')
    }

    function showcontacts() {
        document?.querySelector('.btn-menu')?.classList.remove('animation')
        document?.querySelector('.nav-menu')?.classList.remove('animation2')
        window.scrollTo({ top: 5900, behavior: "smooth" })
    }
    function showsobrenos() {
        document?.querySelector('.btn-menu')?.classList.remove('animation')
        document?.querySelector('.nav-menu')?.classList.remove('animation2')
        window.scrollTo({ top: 750, behavior: "smooth" })
    }
    function showprojetos() {
        document?.querySelector('.btn-menu')?.classList.remove('animation')
        document?.querySelector('.nav-menu')?.classList.remove('animation2')
        window.scrollTo({ top: 3300, behavior: "smooth" })
    }

    return (
        <header className="header">
            <div className="logo-area">
                <img alt="" onClick={() => window.location.href = '/'} src={logo}></img>
            </div>
            <div className="btn-area-menu">
                <button onClick={() => window.location.href = '/'}>Início</button>
                <button onClick={() => window.scrollTo({ top: 2200, behavior: "smooth" })}>Projetos</button>
                <button onClick={() => window.scrollTo({ top: 620, behavior: "smooth" })}>Sobre-nos</button>
                <button onClick={() => window.scrollTo({ top: 3450, behavior: "smooth" })}>Contatos</button>
            </div>
            {window.screen.width < 500 ? <button onClick={showmenu} className="btn-menu"> <span></span> </button> : ''}
            <nav className="nav-menu">
                <img alt="" src={logo}></img>

                <button onClick={() => window.location.href = '/'}>Início</button>
                <button onClick={showprojetos}>Projetos</button>
                <button onClick={showsobrenos}>Sobre-nos</button>
                <button onClick={showcontacts}>Contatos</button>
            </nav>
        </header>
    )
}