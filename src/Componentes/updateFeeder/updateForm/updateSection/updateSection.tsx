import "./updateSection.scss";
import { Radio } from "@nextui-org/react";

import { Textarea } from "@nextui-org/react";
import { StatusValue } from "../../../../Config/typescript/enums";
import { Button } from "@nextui-org/react";
import { ChevronLeft } from "react-iconly";
import { useContext, useState } from "react";
import { updateContext } from "../../updateContext";
import { getNewStatus } from "../../../../Helpers/status";
import { apiFetchUpdateReport } from "../../../../Helpers/requests";
import { useHistory } from "react-router-dom";
import Loading from "../../../../Config/images/loading.svg";

export default function UpdateSection() {
  let history = useHistory();

  const [descriptionError, setDescriptionError] = useState<string>();
  const [statusError, setStatusError] = useState<string>();
  const [sendError, setSendError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const [status, setStatus] = useState<StatusValue>();
  const [descripcion, setDescripcion] = useState<string>();
  const { setSelectedOption, selectedFeeder } = useContext(updateContext);

  const onDescriptionChange = (desc: string) => {
    if (descriptionError) {
      desc.length > 20 && desc.length < 80 && setDescriptionError("");
    }
    setDescripcion(desc);
  };

  const onStatusChange = (status: StatusValue) => {
    setStatusError("");
    setStatus(status);
  };

  const onSend = async () => {
    if (selectedFeeder) {
      if (status) {
        if (descripcion && descripcion.length > 20 && descripcion.length < 80) {
          const newStatus = getNewStatus(
            selectedFeeder.FeederReport.status,
            status
          );
          setLoading(true);
          setSendError("");

          console.log(
            "ESTADO PREVIO: ",
            selectedFeeder.FeederReport.status,
            " ESTADO SELECCIONADO: ",
            status,
            " NUEVO ESTADO: ",
            newStatus
          );
          console.log("DESCRIPCION: ", descripcion);
          try {
            await apiFetchUpdateReport({
              status: newStatus,
              id: selectedFeeder.FeederReportId,
              description: descripcion,
            });
            history.push("/success");
            setLoading(false);
          } catch (e) {
            setStatus(undefined);
            setSendError(
              "Hubo un problema de conexion actualizando el estado, intenta de nuevo."
            );
            setLoading(false);
          }
        } else {
          setDescriptionError(
            "La descripción debe ser mas larga a 20 caracteres y menor a 60."
          );
        }
      } else {
        setStatusError("Debes seleccionar un estado nuevo.");
      }
    } else {
      alert("Unknown Error");
    }
  };
  return (
    <div className="updateSection_container">
      {loading ? (
        <img alt="Loading" src={Loading} />
      ) : (
        <>
          <div className="updateSection_back">
            <Button
              auto
              onClick={() => setSelectedOption(null)}
              iconRight={<ChevronLeft set="bold" primaryColor="white" />}
              className={"updateSection_back"}
            />
          </div>
          <div></div>
          <Textarea
            label="Nueva descripcion"
            placeholder="ej: Lo llené con comida, vi en la web que estaba vacío, se vacía rápido!"
            value={descripcion}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
          <p>{descriptionError}</p>
          <div>
            <Radio.Group onChange={(e) => onStatusChange(e as StatusValue)}>
              <Radio value={StatusValue.FOOD_UPDATE_FILL}>
                Rellené comida
                <Radio.Description>
                  Seleccioná esta opción si le rellenaste la comida.
                </Radio.Description>
              </Radio>
              <Radio value={StatusValue.FIX}>
                Solucioné el problema que tenía
                <Radio.Description>
                  Seleccioná esta opción si arreglaste el problema o falla que
                  tenia el bebedero.
                </Radio.Description>
              </Radio>
            </Radio.Group>
          </div>
          <p>{statusError}</p>
          <Button onClick={() => onSend()} className="updateSection_button">
            Actualizar
          </Button>
          <p>{sendError}</p>
        </>
      )}
    </div>
  );
}
