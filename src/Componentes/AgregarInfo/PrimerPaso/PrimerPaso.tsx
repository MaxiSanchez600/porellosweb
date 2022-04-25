import { Button } from "@nextui-org/react";
import "./primerPaso.scss";

import { Steps } from "../AgregarInfo";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
};
export default function PrimerPaso(props: Props) {
  const { setStep } = props;

  return (
    <div className="HeroContainer_PrimerPaso">
      <div className="heroCont_PrimerPaso">
        <div className="LeftContainer_PrimerPaso">
          <h1>1. Construis tu comedero</h1>
          <ul>
            <li className="itemList_AgregarInfo">
              <h2>
                Segui las intrucciones de el video para{" "}
                <span>construir tu comedero</span>, acordate que no siempre van
                a quedar iguales, pero si cumpe la funcion de comedero, esta mas
                que bien.
              </h2>
            </li>
            <li className="itemList_AgregarInfo">
              <h2>
                Si tenes alguna duda, no dudes en{" "}
                <span>contactarte con nosotros</span> para ayudarte.
              </h2>
            </li>
            <li className="itemList_AgregarInfo">
              <h2>
                ¿Ya lo tenes? ¡Genial! <span>Clickea en siguiente</span> para ir
                al segundo paso.
              </h2>
            </li>
          </ul>
        </div>
        <div className="RigthContainer_right_PrimerPaso">
          <iframe
            title="Por Ellos"
            src="https://www.youtube.com/embed/TdefPiiTaKM"
          ></iframe>
        </div>
        <div className="buttonContainer_PrimerPaso">
          <Button onClick={() => setStep(Steps.SECOND)}>Siguiente</Button>
        </div>
      </div>
    </div>
  );
}
