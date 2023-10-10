import React from "react";
import './style.css'
import logo from '../../Assets/Logotecweb.png'

const Footer = () => {
    return (
      <footer className="footer">
        <h2>
          <strong>RECEBA</strong> NOVIDADES E PROMOÇÕES
        </h2>
        <input className="input-sand-email" placeholder="Email*" type={"text"}></input>
        <div className="input-sand-email-checkbox">
          <input type={"checkbox"}></input>
          <p>Aceito receber novidades por email.</p>
        </div>
        <button className="btn-footer-enviar">Enviar</button>

        <div className="footer-btn-area">
          <div className="box-footer">
            <strong>Cnpj</strong>
            <p>48.969.508/0001-29</p>
            <strong>Whatsapp</strong>
            <p>(11) 91301-6127</p>

            <strong>São Paulo - sp</strong>
          </div>
          <div className="box-footer">
            <strong>Á TecWebCod</strong>
            <button onClick={() => (window.location.href = "/")}>Início</button>
            {window.screen.width > 500 ? (
              <button onClick={() => window.scrollTo({ top: 2200, behavior: "smooth" })}>
                Projetos
              </button>
            ) : (
              <button onClick={() => window.scrollTo({ top: 3300, behavior: "smooth" })}>
                Projetos
              </button>
            )}
            {window.screen.width > 500 ? (
              <button onClick={() => window.scrollTo({ top: 620, behavior: "smooth" })}>
                Sobre-nos
              </button>
            ) : (
              <button onClick={() => window.scrollTo({ top: 750, behavior: "smooth" })}>
                Sobre-nos
              </button>
            )}
            {window.screen.width > 500 ? (
              <button onClick={() => window.scrollTo({ top: 3450, behavior: "smooth" })}>
                Contatos
              </button>
            ) : (
              <button onClick={() => window.scrollTo({ top: 5900, behavior: "smooth" })}>
                Contatos
              </button>
            )}
          </div>
          <img src={logo}></img>
        </div>
        <div className="copy">
          <p>©️2023 Todos direitos reservados á Tecwebcod.</p>
          <p>Desenvolvido por Tecwebcod</p>
        </div>
      </footer>
    );
}
export default Footer;