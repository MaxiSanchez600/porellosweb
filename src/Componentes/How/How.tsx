import "./how.scss";
import { Card, Divider, Row, Text, Spacer } from "@nextui-org/react";
export default function How() {
  return (
    <div className="how_container">
      <div className="how_subContainer">
        <h1>
          Podes actualizar su estado acercándote a cada comedero y scaneando su
          código QR
        </h1>
        <h2>¿Que podés actualizar?</h2>
        <div className="how_CardContainer">
          <Card css={{ mw: "330px", margin: "24px" }}>
            <Card.Header>
              <Text css={{ fontWeight: "900" }}>🐶 Actualizá estado</Text>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                En el caso de que te hayas acercado para{" "}
                <span>rellenar comida.</span>
              </Text>
              <Spacer />
              <Text>
                Ej: Lo encontraste vacío mientras caminabas en la plaza / Viste
                en la web que alguien reporto que faltaba comida, y te acercaste
                a rellenarlo.
              </Text>
            </Card.Body>
            <Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Text
                  css={{
                    backgroundColor: "#50723c",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    fontWeight: "500",
                  }}
                >
                  Es muy importante{" "}
                  <span>solo rellenarlo con comida balanceada </span>
                  para perros, nada más.
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          <Card css={{ mw: "330px", margin: "24px" }}>
            <Card.Header>
              <Text css={{ fontWeight: "900" }}>📝 Reportá estado</Text>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                En el caso de que lo hayas encontrado <span>sin comida.</span>
              </Text>
              <Spacer />
              <Text>
                Ej: Lo encontraste vacío mientras caminabas por el parque, pero
                no tenias como rellenarlo, por lo que decidiste reportar el
                estado para que alguien pueda enterarse y rellenarlo despues.
              </Text>
            </Card.Body>
            <Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Text
                  css={{
                    backgroundColor: "#50723c",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    fontWeight: "500",
                  }}
                >
                  Es muy importante <span>reportar estos estados</span> para que
                  la gente pueda enterarse e ir a rellenarlos.
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </div>
        <h2 className="how_problemText">
          También podes reportar si tiene algún problema (se mojó, se rompió, se
          trabo, etc) y actualizar si lo solucionaste.
        </h2>
      </div>
    </div>
  );
}
