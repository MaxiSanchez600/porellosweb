import { Button } from "@nextui-org/react";
import "./segundoPaso.scss";
import { useState } from "react";
import { Steps } from "../AgregarInfo";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
};
export default function SegundoPaso(props: Props) {
  const { setStep } = props;

  const [email, setEmail] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");

  const onEmailChange = (email: string) => {
    if (emailRegex.test(email)) {
      setEmailError("");
      setEmail(email);
    }
  };

  const onSend = () => {
    if (emailRegex.test(email)) {
      console.log("SEND");
    } else {
      setEmailError("Debes ingresar un email valido");
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

  return (
    <div className="HeroContainer_SegundoPaso">
      <div className="heroCont_SegundoPaso">
        <div className="LeftContainer_SegundoPaso">
          <h1>2. Imprimis el QR y las instrucciones</h1>
          <ul>
            <li className="itemList_AgregarInfo">
              <h2>
                Ingresa tu email y recibi un{" "}
                <span>PDF con el QR mas las instrucciones.</span>
              </h2>
            </li>
            <li className="itemList_AgregarInfo">
              <h2>
                El PDF es tamano A3 y es recomendable{" "}
                <span>imprimirlo plastificado</span> para que aguante la
                interperie.
              </h2>
            </li>
            <li className="itemList_AgregarInfo">
              <h2>
                Pega el QR y las instrucciones <span>en el comedero</span> (En
                el video anterior tambien muestra como)
              </h2>
            </li>
          </ul>
        </div>
        <div className="RigthContainer_right_SegundoPaso">
          <div className="emailContainer_SegundoPaso">
            <label>Email:</label>
            <input
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="porellos@gma...."
            ></input>
            {emailError && (
              <label className="labelError_email">{emailError}</label>
            )}
            <Button onClick={() => onSend()}>Recibir PDF</Button>
          </div>
        </div>
      </div>
      <div className="buttonContainer_SegundoPaso">
        <Button onClick={() => setStep(Steps.FIRST)}>Atras</Button>
        <Button onClick={() => setStep(Steps.THIRD)}>Siguiente</Button>
      </div>
    </div>
  );
}
