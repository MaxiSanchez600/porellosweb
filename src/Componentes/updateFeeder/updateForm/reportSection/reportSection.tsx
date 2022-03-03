import "./reportSection.scss";
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

export default function ReportSection() {
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
            "La descripcion debe ser mas larga a 20 caracteres y menor a 60."
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
    <div className="reportSection_container">
      {loading ? (
        <img alt="Loading" src={Loading} />
      ) : (
        <>
          <div className="reportSection_back">
            <Button
              auto
              onClick={() => setSelectedOption(null)}
              iconRight={<ChevronLeft set="bold" primaryColor="white" />}
              className={"reportSection_back"}
            />
          </div>
          <div></div>
          <Textarea
            label="Nueva descripcion"
            placeholder="ej: Lo encontre sin comida mientras caminaba por la plaza, reporto para que alguien pueda verlo en la web y llenarlo."
            value={descripcion}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
          <p>{descriptionError}</p>
          <div>
            <Radio.Group onChange={(e) => onStatusChange(e as StatusValue)}>
              <Radio value={StatusValue.FOOD_UPDATE_NO_FILL}>
                Lo encontre sin comida
                <Radio.Description>
                  Selecciona esta opcion si lo encontraste sin comida.
                </Radio.Description>
              </Radio>
              <Radio value={StatusValue.PROBLEM}>
                Tiene algun problema
                <Radio.Description>
                  Selecciona esta opcion si el bebedero tiene algun problema o
                  falla.
                </Radio.Description>
              </Radio>
            </Radio.Group>
          </div>
          <p>{statusError}</p>
          <Button onClick={() => onSend()} className="reportSection_button">
            Actualizar
          </Button>
          <p>{sendError}</p>
        </>
      )}
    </div>
  );
}
