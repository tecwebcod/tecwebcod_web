import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import { IoIosArrowDown } from "react-icons/io";
import ilustracao from "../../Assets/ilustracao.png";
import eu from "../../Assets/eu.jpeg";
import vin from "../../Assets/vin.webp";
import gab from "../../Assets/gab.webp";
import logo1 from "../../Assets/1.jpeg";
import logo2 from "../../Assets/2.jpeg";
import logo3 from "../../Assets/3.jpeg";
import logo4 from "../../Assets/4.jpeg";
import logo5 from "../../Assets/5.jpeg";
import logo6 from "../../Assets/6.jpeg";
import logo7 from "../../Assets/7.jpeg";
import logo8 from "../../Assets/casauni.jpeg";
import logo9 from "../../Assets/selva.jpeg";
import logo10 from "../../Assets/blac.png";
import logo11 from "../../Assets/abram.jpeg";
import logo12 from "../../Assets/jdc.jpeg";
import react from "../../Assets/react.png";
import node from "../../Assets/node.png";
import js from "../../Assets/js.png";
import banner from "../../Assets/banner contato.jpg";
import Footer from "../../Components/Footer";
import api from "../../services/api";

const Home = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoprojeto, setTipoprojeto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [telefone, setTelefone] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (nome !== "") {
      document
        .querySelectorAll(".errorinput")[0]
        .setAttribute("style", "border-color:#000");
    }
    if (email !== "") {
      document
        .querySelectorAll(".errorinput")[1]
        .setAttribute("style", "border-color:#000");
    }
    if (telefone !== "") {
      document
        .querySelectorAll(".errorinput")[2]
        .setAttribute("style", "border-color:#000");
    }
    if (tipoprojeto !== "") {
      document
        .querySelectorAll(".errorinput")[3]
        .setAttribute("style", "border-color:#000");
    }
    if (mensagem !== "") {
      document
        .querySelectorAll(".errorinput")[4]
        .setAttribute("style", "border-color:#000");
    }
  }, [nome, email, mensagem, telefone, tipoprojeto]);

  async function sendmail() {
    if (
      nome === "" ||
      email === "" ||
      tipoprojeto === "" ||
      telefone === "" ||
      mensagem === ""
    ) {
      if (nome === "") {
        document
          .querySelectorAll(".errorinput")[0]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorinput")[0]
          .setAttribute("style", "border-color:#000");
      }

      if (email === "") {
        document
          .querySelectorAll(".errorinput")[1]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorinput")[1]
          .setAttribute("style", "border-color:#000");
      }
      if (telefone === "") {
        document
          .querySelectorAll(".errorinput")[2]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorinput")[2]
          .setAttribute("style", "border-color:#000");
      }

      if (tipoprojeto === "") {
        document
          .querySelectorAll(".errorinput")[3]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorinput")[3]
          .setAttribute("style", "border-color:#000");
      }

      if (mensagem === "") {
        document
          .querySelectorAll(".errorinput")[4]
          .setAttribute("style", "border-color:red");
      } else {
        document
          .querySelectorAll(".errorinput")[4]
          .setAttribute("style", "border-color:#000");
      }
      return;
    }
    setLoad(true);
    await api
      .post("/sendmail", {
        nome: nome,
        email: email,
        telefone: "telefone",
        descricao: mensagem,
        tipoprojeto: tipoprojeto,
      })
      .then(() => {
        setNome("");
        setEmail("");
        setTelefone("");
        setTipoprojeto("");
        setMensagem("");
        setLoad(false);
        alert("Mensagem enviada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-home">
      <Header></Header>
      <section className="section1">
        <h1>
          Startup <strong>Especialista</strong> em Desenvolvimento de Sites
        </h1>
        <br></br>
        <br></br>
        <h2>Está Precisando de um site?</h2>
        <br></br>
        <button className="btn-orçamento">Fazer Orçamento</button>
        <div className="box-btn-arrow">
          <button className="btn-arrow-down">
            <IoIosArrowDown size={50} color="#fff"></IoIosArrowDown>
          </button>
          <p>Saiba Mais</p>
        </div>
      </section>
      <section className="section2">
        <div className="title-all">
          <h2>
            <strong>SOBRE </strong> NOS
          </h2>
        </div>

        <div className="box-info">
          <div className="box-ilustracao">
            <img alt="" src={ilustracao}></img>
          </div>
          <div className="text-area">
            <p>
              A <strong>TecWebCod</strong> é uma Startup em consultoria de
              tecnologia, especializada em desenvolvimento de sites,
              E-commerces, Portifólios, sistemas web. O que nos torna diferente
              das demais é a qualidade dos nossos projetos, visando manter
              sempre a confiança, honestidade, tiramos a sua ideia do papel e
              colocamos em prática para o crescimento da sua empresa, nossa
              motivação é ajudar você e o seu negócio decolar!.
            </p>
          </div>
        </div>
        <div className="title-all">
          <h2>
            <strong>NOSSO </strong> TIME!
          </h2>
        </div>
        <div className="container-fotos">
          <div className="box-info-socios">
            <img className="styleImage" alt="" src={vin}></img>
            <h2>Vinicius Barbosa</h2>
            <p>
              sócio e engenheiro de dados, também possuí graduação em Analise e
              desenvolvimento de sistemas e Redes de computadores, especializado
              em banco de dados e infra;
            </p>
          </div>
          <div className="box-info-socios">
            <img className="styleImage" alt="" src={gab}></img>
            <h2>Gabriel Milhomem</h2>
            <p>
              fundador e sócio da empresa, possuí Graduação em análise e
              desenvolvimento de sistemas, responsável também pela consultoria e
              negociações dos projetos, realizando o acompanhamento e sendo o
              desenvolvedor FrontEnd;
            </p>
          </div>
          <div className="box-info-socios">
            <img className="styleImage" alt="" src={eu}></img>
            <h2>Alexandre Oliveira</h2>
            <p>
              Sócio e Engenheiro Desenvolvedor de software especialista nas
              principais tecnologias do mercado.
            </p>
          </div>
        </div>
        <div className="title-all">
          <h2>
            <strong>EMPRESAS </strong> ATENDIDAS
          </h2>
        </div>
        <div className="container-logos-empresas">
          <img alt="" src={logo1}></img>
          <img alt="" src={logo2}></img>
          <img alt="" src={logo3}></img>
          <img alt="" src={logo4}></img>
          <img alt="" src={logo5}></img>
          <img alt="" src={logo6}></img>
          <img alt="" src={logo7}></img>
          <img alt="" src={logo8}></img>
          <img alt="" src={logo11}></img>
          <img alt="" src={logo12}></img>
        </div>
      </section>

      <section className="section3">
        <div className="title-all">
          <h2
            style={
              window.screen.width > 500
                ? { color: "#fff" }
                : { color: "#fff", textAlign: "start", fontSize: "15px" }
            }
          >
            <strong
              style={
                window.screen.width > 500
                  ? { color: "#fff" }
                  : { color: "#fff", textAlign: "start", fontSize: "15px" }
              }
            >
              TECNOLOGIAS{" "}
            </strong>{" "}
            QUE UTILIZAMOS EM NOSSOS PROJETOS
          </h2>
        </div>
        <div className="box-tecs">
          <img alt="" src={react}></img>
          <img alt="" src={js}></img>
          <img alt="" src={node}></img>
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png"
            alt="external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo"
          />
        <img
          width="150"
          height="150"
          src="https://img.icons8.com/fluency/240/prisma-orm.png"
          alt="prisma-orm"
        />
        </div>
        <h2 className="text-section3">
          trabalhamos com as melhores <strong>tecnologias</strong> do mercado
          mundial, AFIM DE oferecer <strong>softwares</strong> otimizados,
          atualizados e com um <strong>design</strong> do seu jeito.
        </h2>
      </section>
      <div className="title-all">
        <h2>
          <strong>ENTRE </strong> EM CONTATO
        </h2>
      </div>
      <section className="section4">
        <img alt="" src={banner}></img>
        <div className="container-contact">
          <div className="contact-infos">
            <h2>
              <strong>FALE </strong>CONOSCO
            </h2>

            <h2>Whatsapp</h2>
            <p>(11) 95361-3600</p>
            <h2>Email</h2>
            <p>tecwebcod@gmail.com</p>

            <p>
              Atendimento ao cliente: de segunda a sexta das 09:00 às 18:00h.
            </p>
          </div>
          <div className="contact-form">
            <div className="input-grup-form-contact">
              <label>Nome*</label>
              <input
                className="errorinput"
                value={nome}
                type={"text"}
                onChange={(e) => setNome(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
              <div className="input-grup-form-contact">
                <label>Email*</label>
                <input
                  className="errorinput"
                  value={email}
                  type={"text"}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="input-grup-form-contact">
                <label>Telefone*</label>
                <input
                  className="errorinput"
                  value={telefone}
                  type={"text"}
                  onChange={(e) => setTelefone(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="input-grup-form-contact">
              <label>Tipo de Projeto*</label>
              <input
                className="errorinput"
                value={tipoprojeto}
                type={"text"}
                onChange={(e) => setTipoprojeto(e.target.value)}
              ></input>
            </div>
            <div className="input-grup-form-contact">
              <label>Mensagem*</label>
              <input
                className="errorinput"
                value={mensagem}
                type={"text"}
                onChange={(e) => setMensagem(e.target.value)}
              ></input>
            </div>
            <button className="btn-enviar" onClick={sendmail}>
              {load !== false ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <span id="load-spinner"></span> Enviando...
                </div>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </div>
      </section>
      <div className="title-all">
        <h2>
          <strong>NOVIDADES </strong> TECWEBCOD
        </h2>
      </div>
      <section className="section5">
        <div className="box-novidade">
          <h2>
            FECHAMENTO DE PARCERIA COM AS AGÊNCIAS DE MARKETING SELVA e
            Blanked&Co.
          </h2>
        </div>
        <div style={{ width: "88%", display: "flex", gap: "5px" }}>
          <div className="box-novidade">
            <img alt="" src={logo9}></img>
          </div>
          <div className="box-novidade">
            <img alt="" src={logo10}></img>
          </div>
        </div>
      </section>
      <div className="title-all">
        <h2>
          <strong>PERGUNTAS </strong> FREQUENTES
        </h2>
      </div>

      <div className="perguntas-frequentes">
        <details>
          <summary>Quanto custa um site ?</summary>
          <p>
            O preço varia muito de acordo com o tipo de projeto que você precisa
          </p>
        </details>
        <details>
          <summary>Quanto tempo leva o desenvolvimento ?</summary>
          <p>O tempo varia de 1 mês á 3 meses de Desenvolvimento.</p>
        </details>
        <details>
          <summary>Quais as formas de Pagamento?</summary>
          <p>Aceitamos pix, cartôes de crédito e debito e boleto.</p>
        </details>
        <details>
          <summary>Os projetos são feitos com programação de verdade?</summary>
          <p>
            SIM!, nosso softwares são feitos com a linguagem javascript,
            utilizando o framework React js.
          </p>
        </details>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
