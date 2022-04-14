import React from "react";
import "./Hero.scss";
import Img from "../../Config/images/hero.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@nextui-org/react";
import { Location } from "react-iconly";

export default function Hero() {
  return (
    <div className="HeroContainer_hero">
      <div className="heroCont_hero">
        <div className="LeftContainer_hero">
          <h1>Comederos para animales en situacion de calle</h1>
          <h2>
            <span>¿Esta vacío? ¿Lo llenaste con comida?</span> Escaneá el QR de
            los comederos públicos que están a lo largo de la ciudad y ayudálos
            actualizando su estado en tiempo real.
          </h2>
          <AnchorLink href="#things">
            <Button
              iconRight={<Location stroke="bold" set="curved" />}
              style={{ zIndex: 1 }}
              color="primary"
              // css={{ width: "240px" }}
            >
              comederos
            </Button>
          </AnchorLink>
        </div>
        <div className="RigthContainer_right">
          <img alt="Imagen de un comedero" src={Img}></img>
        </div>
      </div>
    </div>
  );
}
