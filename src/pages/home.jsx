/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link } from "react-router-dom";
import App from '../App';

export const home = () => {
    return (
      <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Luiz Carlos Arquitetura</title>
      <link rel="stylesheet" type="text/css" href="../css/style.css" />
      <link rel="stylesheet" type="text/css" href="../css/index.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      <aside className="aside">
        <Link to="/" className="logo"><img src="../Imagens/Imagens-index/Logo.png" id="marca" /></Link>
        <div className="menu">
          <Link to="/"><div>INÍCIO</div></Link>
          <Link to="/projetos"><div>PROJETOS</div></Link>
          <Link to="/servicos"><div>SERVIÇOS</div></Link>
          <Link to="/contato"><div>CONTATO</div></Link>
        </div>
        <div className="footer">
          <a href="https://www.youtube.com/channel/UC_ufaPpQbVY1Ch8RztkNj1g" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></a>
          <a href="https://www.instagram.com/arq_luiz_carlos/?hl=pt-br" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square" /></a>
        </div>
      </aside>
      <main className="main">
        <div id="imagens">        
          <App elemento="index" />      
        </div>
      </main>
    </div>
    );
};