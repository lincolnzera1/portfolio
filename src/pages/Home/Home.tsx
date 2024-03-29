import { useState } from "react";
import { ContainerCentral, ContainerIcons, Fundo, Paragrafo } from "./styles";

// assets
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

// Carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imagens
import Print1 from "../../assets/print1.png";
import Print2 from "../../assets/print2.png";
import Print1app from "../../assets/print1app.jpeg";
import Print2app from "../../assets/print2app.jpeg";
import Print3app from "../../assets/print3app.jpeg";

// primereact
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

const Home = () => {
  const handleLinkedin = (e: any) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/guilherme-lincoln-lima/",
      "_blank"
    );
  };

  const handleGithub = (e: any) => {
    e.preventDefault();
    window.open("https://github.com/lincolnzera1", "_blank");
  };

  const projetos = [
    {
      titulo: "Site do Projeto indígenas",
      descricao:
        "Estratégias tecnológicas para a coleta e análise de informações como subsídio à elaboração de políticas públicas e a divulgação da luta de povos indígenas",
      demonstracao:
        "https://www.youtube.com/watch?v=A8b27nAITpA&ab_channel=starscream",
      // git: ""
    },
    {
      titulo: "Aplicativo projeto indígenas",
      descricao:
        "Estratégias tecnológicas para a coleta e análise de informações como subsídio à elaboração de políticas públicas e a divulgação da luta de povos indígenas.",
      demonstracao: "https://youtu.be/hUpfe-clK38",
      // git: "https://github.com/lincolnzera1/Kotlin-bluetooth-arduino",
    },
    {
      titulo: "Site Lit alunos",
      descricao:
        "Aplicativo feito com o biblioteca ReactTS, para divulgação dos projetos dos bolsistas do LIT.",
      demonstracao: "https://youtu.be/gdgw3TPU7l0",
      git: "https://github.com/lincolnzera1/Lit-feed",
    },
    {
      titulo: "CRUD com java e Spring Boot",
      descricao:
        "Aprimorando os conhecimentos em java, mexendo com estrutura de dados.",
      demonstracao: "https://youtu.be/lAbrlbMngzU",
      git: "https://github.com/lincolnzera1/Java-Spring-Boot-CRUD-Application",
    },
    {
      titulo: "Estrutura de dados com Java",
      descricao:
        "Aprimorando os conhecimentos em java, mexendo com estrutura de dados.",
      // demonstracao: "https://youtu.be/XT8551M75ho",
      git: "https://github.com/lincolnzera1/Estrutura-de-dados-com-Java",
    },
    {
      titulo: "Calculadora feita com Java e Swing",
      descricao:
        "Aprimorando conhecimento no Java básico criando uma calculadora com a interface gráfica swing.",
      // demonstracao: "https://youtu.be/XT8551M75ho",
      git: "https://github.com/lincolnzera1/Super-Calculadora",
    },
    {
      titulo: "Kotlin Motivation App",
      descricao:
        "Aplicativo que escolhe uma frase motivadora para o usuário, feito em Kotlin",
      // demonstracao: "https://youtu.be/XT8551M75ho",
      git: "https://github.com/lincolnzera1/Motivation-APP",
    },
    {
      titulo: "Oficinas 4.0",
      descricao: "Sistema de monitoramento IoT para hotéis",
      demonstracao: "https://youtube.com/shorts/IdNKacMWh3Y",
      demonstracao2: "https://youtu.be/UUYxWCjy7mU",
      gitFront: "https://github.com/lincolnzera1/infinity-power-project",
      gitBack: "https://github.com/lincolnzera1/infinity-power-backend",
    },
    {
      titulo: "Esp32/Flutter controle de led",
      descricao:
        "Flutter/Dart.\nLinguagem C com esp32.\nMontagem de circuitos com esp32.",
      demonstracao: "https://youtu.be/JFGyK0pN4XU",
      git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo: "App Provérbio do dia",
      descricao:
        "Aplicativo feito com o framework Flutter, para gerar uma passagem de provérbios diferente todo dia.",
      demonstracao: "https://youtube.com/shorts/NMK9-uJADbM",
      git: "https://github.com/lincolnzera1/Flutter_MVC",
    },
    {
      titulo: "App QR code",
      descricao:
        "Aplicativo feito com o framework Flutter, ler, copiar, abrir e compartilhar o link do QR code",
      demonstracao: "https://youtube.com/shorts/1MQj-zQIPx8",
      git: "https://github.com/lincolnzera1/QR_code_scanner",
    },
    {
      titulo: "Social ignite - rocketseat",
      descricao:
        "Site feito com a biblioteca React. Site Feito no curso da rocketseat para aprimorar meus conhecimentos em React.",
      demonstracao: "https://youtu.be/N9KZkDwpD0k",
      git: "https://github.com/lincolnzera1/01-social-ignite",
    },
    {
      titulo: "Lit Flutter App ",
      descricao:
        "Aplicativo feito com o framework Flutter, para cadastro e comunicação dos alunos do laboratório LIT.",
      demonstracao: "https://youtube.com/shorts/CQvh1-grAK8",
      git: "https://github.com/lincolnzera1/projeto_rest",
    },
    {
      titulo: "Acendendo LED com webservers, flutter e esp32",
      descricao:
        "Integração da esp32 e do aplicativo flutter, para comunicação via webserver com a placa esp32. Consiste numa variante do código do App Oficias 4.0 - dush",
      demonstracao: "https://youtube.com/shorts/kx7DY7PO-io",
      git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo:
        "Aplicativo feito em Flutter, que faz o cálculo do consumo de energia de um chuveiro elétrico",
      descricao:
        "Aplicativo feito para ter uma ideia do gasto do consumo de energia elétrica de um chuveiro em um determinado período",
      demonstracao: "https://youtube.com/shorts/sh3pxnTNNYY",
      // git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo: "Color detection",
      descricao: `Site feito com uma integração com um backend python, 
        onde o python detecta a cor amarela pela câmera, e manda a posição da cor na tela para o backend em Node.\n
        O backend node cria um webserver com as informações e guarda a ultima atualização de posição em uma variável.\n
        O frontend faz constantemente requisições para o webserver do node, pedindo a posição da cor na tela.\n 
        Assim, o front recebe os dados (números entre 0 e 1), e multiplica isso pela largura da tela. 
        O resultado é atualizado na largura da div vermelha`,
      demonstracao: "https://youtu.be/J1pQA5Vydtg",
      git: "https://github.com/lincolnzera1/Python-color-detection",
    },
    {
      titulo: "Arduino Face Detection",
      descricao:
        "Sistema feito para detectar rostos com python. Ao detectar um rosto, o código python manda um sinal para o arduino via serial.\n Com esse sinal, o arduino faz uma ação, que no caso é mexer o servo motor.",
      demonstracao:
        "https://www.youtube.com/watch?v=e6ovtVS5xHE&ab_channel=starscream",
      // git: "https://github.com/lincolnzera1/Flutter-esptouch-websocket",
    },
    {
      titulo: "Arduino Bluetooth Car",
      descricao:
        "Carrinho feito para ser controlado via bluetooth, por um aplicativo feito em Kotlin",
      demonstracao: "https://youtu.be/XT8551M75ho",
      git: "https://github.com/lincolnzera1/Kotlin-bluetooth-arduino",
    },
  ];

  const createDynamicTabs = () => {
    return (
      <AccordionTab header={`Projetos (${projetos.length})`}>
        {/* Agrupar todos os parágrafos dentro de um único elemento div */}
        <div>
          {projetos.map((projeto, index) => (
            <div key={index} className="m-0">
              <h3>{projeto.titulo}:</h3>
              <p>{projeto.descricao}</p>
              {projeto.demonstracao ? (
                <Button
                  onClick={() => {
                    window.open(projeto.demonstracao, "_blank");
                  }}
                  severity="secondary"
                  outlined
                  label="Demo"
                />
              ) : null}
              {projeto.demonstracao2 ? (
                <Button
                  onClick={() => {
                    window.open(projeto.demonstracao, "_blank");
                  }}
                  severity="secondary"
                  outlined
                  label="Demo2"
                />
              ) : null}
              {projeto.git ? (
                <Button
                  onClick={() => {
                    window.open(projeto.git, "_blank");
                  }}
                  severity="secondary"
                  outlined
                  label="Código fonte"
                />
              ) : null}
              {projeto.gitBack ? (
                <Button severity="secondary" outlined label="Código Backend" />
              ) : null}
              <Divider />
            </div>
          ))}
        </div>
      </AccordionTab>
    );
  };

  const competencias = () => {
    return (
      <AccordionTab header={`Skills (16)`}>
        {/* Agrupar todos os parágrafos dentro de um único elemento div */}
        <div className="imagensMae">
          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=react" />
            <img src="https://skillicons.dev/icons?i=ts" />
            <img src="https://skillicons.dev/icons?i=js" />
            <img src="https://skillicons.dev/icons?i=vite" />
          </div>

          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=java" />
            <img src="https://skillicons.dev/icons?i=spring" />
            <img src="https://skillicons.dev/icons?i=mysql" />
            <img src="https://skillicons.dev/icons?i=mongodb" />
          </div>
        </div>
        <div className="imagensMae">
          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=flutter" />
            <img src="https://skillicons.dev/icons?i=dart" />
            <img src="https://skillicons.dev/icons?i=firebase" />
            <img src="https://skillicons.dev/icons?i=vscode" />
          </div>
          <div
            className="imagens"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="https://skillicons.dev/icons?i=vue" />
            <img src="https://skillicons.dev/icons?i=html" />
            <img src="https://skillicons.dev/icons?i=css" />
            <img src="https://skillicons.dev/icons?i=github" />
          </div>
        </div>
      </AccordionTab>
    );
  };

  return (
    <Fundo>
      <ContainerCentral>
        <Paragrafo size={40}>Guilherme Lincoln</Paragrafo>
        <Paragrafo>
          Olá! Sou um desenvolvedor Full Stack com dois anos de experiência.
          Atuei em projetos utilizando a biblioteca React com a linguagem
          TypeScript e o framework Flutter com a linguagem Dart. Também tenho
          experiência na criação de backends utilizando Java com Spring Boot,
          Node.js com JavaScript e Flask com Python. Estou entusiasmado para
          aplicar meus conhecimentos e habilidades em uma nova oportunidade como
          desenvolvedor junior.
        </Paragrafo>
        <ContainerIcons>
          <a href="#" onClick={handleGithub}>
            <BsGithub size={30} />
          </a>
          <a href="#" onClick={handleLinkedin}>
            <BsLinkedin size={30} />
          </a>
        </ContainerIcons>
        <div className="card">
          <Accordion
            style={{ boxSizing: "border-box", marginBottom: 20, marginTop: 20 }}
          >
            {createDynamicTabs()}
          </Accordion>
        </div>
        <div className="card">
          <Accordion>{competencias()}</Accordion>
        </div>
      </ContainerCentral>
    </Fundo>
  );
};

export default Home;
