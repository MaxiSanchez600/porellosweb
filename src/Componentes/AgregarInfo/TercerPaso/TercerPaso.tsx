import { Button } from "@nextui-org/react";
import "./tercerPaso.scss";
import { Steps } from "../AgregarInfo";
import { Dispatch, SetStateAction } from "react";
import Img from "../../../Config/images/hero.png";

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
};
export default function TercerPaso(props: Props) {
  const { setStep } = props;

  return (
    <div className="HeroContainer_TercerPaso">
      <div className="heroCont_TercerPaso">
        <div className="LeftContainer_TercerPaso">
          <h1>3. Lo instalas y escaneas</h1>
          <ul>
            <li className="itemList_AgregarInfo">
              <h2>
                Ya con el comedero listo, podes <span>instalarlo</span> en donde
                quieras.
              </h2>
            </li>
            <li className="itemList_AgregarInfo">
              <h2>
                Una ves instalado, <span>escanea el codigo QR</span>, y por ser
                la primera vez, te va a permitir cargar{" "}
                <span>foto, descripcion, ubicacion</span> y mas informacion.
              </h2>
            </li>
            <li className="itemList_AgregarInfo">
              <h2>
                ¡Y listo, <span>el comedero ya quedo instalado</span>, fijate
                que aparezca en la web!
              </h2>
            </li>
          </ul>
        </div>
        <div className="RigthContainer_right_TercerPaso">
          <img alt="Imagen de un comedero" src={Img}></img>
        </div>
      </div>
      <div className="buttonContainer_TercerPaso">
        <Button onClick={() => setStep(Steps.SECOND)}>Atras</Button>
      </div>
    </div>
  );
}
