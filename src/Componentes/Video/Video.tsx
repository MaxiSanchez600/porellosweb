import "./Video.scss";
import { Button, Divider, Row, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Card, Col, Text } from "@nextui-org/react";
export default function Video() {
  return (
    <div className="videoContainer_video">
      <div className="videoSubContainer_video">
        <div className="leftContainer_video">
          <h1>Todavía tenes alguna duda?</h1>
          <h2>
            Te dejamos nuestro video promocional donde se explica en vida real
            con uno de
            <span> nuestros comederos.</span>
          </h2>
        </div>
        <div className="rigthContainer_video">
          <iframe
            title="Por Ellos"
            src="https://www.youtube.com/embed/TdefPiiTaKM"
          ></iframe>
        </div>
      </div>
      <div className="wp_right_ainfo_video">
        <h3>
          ¿Sabías qué podés poner un <span>comedero</span> donde quieras y que
          aparezca en la web?
        </h3>
        <div className="videoCards_container">
          <Card css={{ mw: "330px", margin: "24px" }}>
            <Card.Header>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#DDDDDD"
                >
                  primer paso
                </Text>
                <Text h4 color="#423e28">
                  1. Construis tu comedero
                </Text>
              </Col>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Te mostramos los planos del comedero y un video explicativo para
                que puedas armarte tu propio comedero.
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
                  Sabemos que no siempre va a quedar igual, pero si cumple la
                  funcion: ¡Funciona!
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          <Card css={{ mw: "330px", margin: "24px" }}>
            <Card.Header>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#DDDDDD"
                >
                  segundo paso
                </Text>
                <Text h4 color="#423e28">
                  2. Imprimis el QR y las instrucciones
                </Text>
              </Col>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Una ves que tengas el comedero, podes imprimir el QR junto con
                sus instrucciones para pegarlas en el.
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
                  Es importante imprimir ambas cosas plastificadas, para que
                  resista al afuera.
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          <Card css={{ mw: "330px", margin: "24px" }}>
            <Card.Header>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#DDDDDD"
                >
                  tercer paso
                </Text>
                <Text h4 color="#423e28">
                  3. ¡Escaneas, y listo!
                </Text>
              </Col>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Cuando ya tengas el comedero listo, y ya lo hayas colocado, la
                primera ves que scanees sera para cargar su ubicacion, foto, y
                demas datos.
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
                  Y ya queda en la web, cuando lo escaneen de nuevo sera para
                  actualizar su estado.
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </div>
        <Link to="/agregar">
          {" "}
          <Button>Poner un comedero</Button>
        </Link>
      </div>
    </div>
  );
}
