import "./updateForm.scss";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { updateContext } from "../updateContext";
import UpdateSection from "./updateSection/updateSection";
import ReportSection from "./reportSection/reportSection";

export default function UpdateForm() {
  const { selectedOption, setSelectedOption } = useContext(updateContext);
  return (
    <div className="updateForm_container">
      {!selectedOption && (
        <div className="updateForm_subContainer">
          <h1>¡Gracias por aportar tu granito de arena!</h1>
          <h2>Seleccioná una acción para continuar</h2>
          <div className="updateForm_actionsContainer">
            <div>
              <Button
                color="primary"
                onClick={() => setSelectedOption("REPORT")}
              >
                Reportar estado
              </Button>
              <p>
                <span>Clickeá acá</span> para reportar que lo encontraste sin
                comida o si tuvo algun problema (se mojó, se rompió, se trabó,
                etc)
              </p>
            </div>
            <div>
              <Button onClick={() => setSelectedOption("UPDATE")}>
                Actualizar estado
              </Button>
              <p>
                <span>Clickeá acá</span> para actualizar si lo llenaste con
                comida o si solucionaste el problema que tenía.
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedOption === "UPDATE" && <UpdateSection></UpdateSection>}
      {selectedOption === "REPORT" && <ReportSection></ReportSection>}
    </div>
  );
}
