import { useEffect, useContext, useState } from "react";
import { apiFetchGetFeeders, sendEmail } from "../../Helpers/requests";
import { contextFeeders } from "../Context/ReactContext";
import "./Suscribe.scss";
import Error from "../Error/error";
import Loading from "../../Config/images/loading.svg";
import { Button, Input } from "@nextui-org/react";
import Multi from "react-select";
import { FeedersWithReport } from "../../Config/typescript/interfaces";

export default function Suscribe() {
  const { feedersList } = useContext(contextFeeders);

  const [selectedFeeders, setSelectedFeeders] = useState<FeedersWithReport[]>(
    []
  );

  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [selectedError, setSelectedError] = useState<string>("");

  const [enviado, setEnviado] = useState<string>("");

  const onChangeSelect = (e: any) => {
    if (selectedError) {
      setSelectedError("");
    }
    const isSelected =
      feedersList &&
      selectedFeeders.find(
        (feeder) =>
          feeder.id.toString() === feedersList[e.target.value].id.toString()
      );

    if (!isSelected) {
      feedersList &&
        setSelectedFeeders((selectedFeeders) => [
          ...selectedFeeders,
          feedersList[e.target.value],
        ]);
    }
  };

  const onRemove = (e: any) => {
    feedersList &&
      setSelectedFeeders(
        selectedFeeders.filter((feeder) => feeder.id.toString() !== e.target.id)
      );
  };

  const onChangeEmail = (e: any) => {
    if (emailError) {
      if (e.target.value) {
        setEmailError("");
      }
    }
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    if (!errorChecker()) {
      setLoading(true);

      const selectedFeedersId: string[] = selectedFeeders.map((feeder) => {
        return feeder.id.toString();
      });

      console.log(
        "Se va a enviar email: ",
        email,
        "con los comederos: ",
        selectedFeedersId
      );

      try {
        await sendEmail({ email: email, ids: selectedFeedersId });
        setEnviado(
          "¡Gracias por suscribirte, te enviaremos todas las actualizaciones!"
        );
        setLoading(false);
      } catch {
        setSelectedError(
          "Hubo un error suscribiendote a los comederos, intenta de nuevo."
        );
        setEmail("");
        setSelectedFeeders([]);
        setLoading(false);
      }
    }
  };

  const errorChecker = (): boolean => {
    if (!email) {
      setEmailError("Tenes que completar con tu email.");
      return true;
    }
    if (selectedFeeders.length <= 0) {
      setSelectedError("Tenes que seleccionar al menos un comedero.");
      return true;
    }
    return false;
  };

  return (
    <div className="suscribe_container">
      <div className="suscribe_subContainer">
        <h1>¿Falta comida? Enteráte por email</h1>
        <h2>
          Ingresá tu email y elegí los comederos de los que quieras recibir las
          actualizaciones de su estado.
        </h2>
      </div>
      {loading ? (
        <img className="loading_email" alt="Loading..." src={Loading}></img>
      ) : (
        <>
          <div className="suscribe_emailContainer">
            <div className="emailContainer">
              <label>Email:</label>
              <input
                onChange={(e) => onChangeEmail(e)}
                value={email}
                placeholder="porellos@gma...."
              ></input>
              {emailError && (
                <label className="labelError_email">{emailError}</label>
              )}
            </div>
            <div className="selectContainer">
              <label>Comederos:</label>
              <select
                onChange={(e) => onChangeSelect(e)}
                placeholder="porellos@gma...."
              >
                <option value="" selected={true} hidden={true}>
                  Selecciona los comederos
                </option>
                {feedersList?.map((feeder, i) => {
                  return <option value={i}>{feeder.location}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="selectedFeeders_subContainers">
            {selectedFeeders.map((feeder) => {
              return (
                <label
                  className="selectedFedeers_email"
                  id={feeder.id.toString()}
                  onClick={(e) => onRemove(e)}
                >
                  {feeder.location.substring(0, 20) + "..."}
                </label>
              );
            })}
            {selectedError && (
              <label className="labelErrorSelected_email">
                {" "}
                {selectedError}
              </label>
            )}
          </div>
          {enviado && <label className="enviado">{enviado}</label>}
          <div className="button_subContainer">
            <Button onClick={() => onSubmit()}>Suscribirme</Button>
          </div>
        </>
      )}
    </div>
  );
}
