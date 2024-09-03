import React from "react";
import { Alcolici } from "../../components/Alcolici";
import { Caffetteria } from "../../components/Caffetteria";
import { Facebook } from "../../components/Facebook";
import { Homeamaris } from "../../components/Homeamaris";
import { Homebrioches } from "../../components/Homebrioches";
import { Hometavolas } from "../../components/Hometavolas";
import { Instagram } from "../../components/Instagram";
import { TavolaFredda } from "../../components/TavolaFredda";
import "./style.css";

export const Home = () => {
  // Funzione per scrollare a una sezione specifica
  const scrollToSection = (className) => {
    const element = document.querySelector(className);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Funzione per scrollare fino all'inizio della pagina
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="div-2">
        <div className="returnhome" />
        <div className="caffetterias" />
        <div className="caffetterias-2" />
        <div className="brioches" />
        <div className="alcolicis" />
        <div className="cocktails" />
        <div className="vinis" />
        <div className="amaris" />
        <div className="tavolafreddas" />
        <div className="gelaterias" />

        {/* Immagini che fungono da pulsanti per scrollare alle sezioni */}
        <div className="frame-button">
          <img
            className="caffetteria-2"
            alt="Caffetteria"
            src="/img/caffetteria.svg"
            onClick={() => scrollToSection(".caffetterias")}
          />
          <img
            className="alcolici-2"
            alt="Alcolici"
            src="/img/alcolici.svg"
            onClick={() => scrollToSection(".alcolicis")}
          />
          <img
            className="tavola-fredda-2"
            alt="Tavola fredda"
            src="/img/tavolafredda.svg"
            onClick={() => scrollToSection(".tavolafreddas")}
          />
        </div>

        {/* Componenti che scrollano all'inizio della pagina */}
        <Hometavolas
          className="hometavolas-instance"
          onClick={scrollToTop}
        />
        <Homeamaris
          className="homeamaris-instance"
          onClick={scrollToTop}
        />
        <Homebrioches
          className="homebrioches-instance"
          onClick={scrollToTop}
        />

        {/* Componenti che fungono da pulsanti per scrollare alle sezioni */}
        <div className="componetsbutton">
          <img
            className="caffetteria"
            alt="Caffetteria"
            src="/img/caffetteria.svg"
            onClick={() => scrollToSection(".caffetterias")}
          />
          <img
            className="alcolici"
            alt="Alcolici"
            src="/img/alcolici.svg"
            onClick={() => scrollToSection(".alcolicis")}
          />
          <img
            className="tavola-fredda"
            alt="Tavola fredda"
            src="/img/tavolafredda.svg"
            onClick={() => scrollToSection(".tavolafreddas")}
          />
          {/* Pulsanti Facebook e Instagram posizionati correttamente */}
          <Facebook className="facebook-instance" />
          <Instagram />
        </div>

        {/* Altri elementi della pagina */}
        <div className="orari-f">
          <img className="orari" alt="Orari" src="/img/orari.svg" />
        </div>
        <div className="slogan-f">
          <img className="slogan" alt="Slogan" src="/img/slogan.svg" />
        </div>
        <div className="frame">
          <img className="logo" alt="Logo" src="/img/logo.svg" />
        </div>
      </div>
    </div>
  );
};