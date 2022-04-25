import React, { useState } from "react";
import "./agregarinfo.scss";
import PrimerPaso from "./PrimerPaso/PrimerPaso";
import SegundoPaso from "./SegundoPaso/SegundoPaso";
import TercerPaso from "./TercerPaso/TercerPaso";

export enum Steps {
  FIRST,
  SECOND,
  THIRD,
}

export default function AgregarInfo() {
  const [step, setStep] = useState<Steps>(Steps.FIRST);
  return (
    <div className="HeroContainer_ainfo">
      {step === Steps.FIRST && <PrimerPaso setStep={setStep} />}
      {step === Steps.SECOND && <SegundoPaso setStep={setStep} />}
      {step === Steps.THIRD && <TercerPaso setStep={setStep} />}
      <div className="wp_right_ainfo">
        <h3>
          <a
            href="https://wa.link/kyeuqh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Por cualquier cosa contactate con nosotros a{" "}
            <b>porelloscomederos@gmail.com</b>, por nuestras redes sociales o
            directamente por WhatsApp haciendo <span>clikeando aqui</span>
          </a>
        </h3>
      </div>
    </div>
  );
}
