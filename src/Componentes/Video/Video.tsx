import "./Video.scss";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <div className="videoContainer_video">
      <div className="videoSubContainer_video">
        <div className="leftContainer_video">
          <h1>¿Todavia tenes alguna duda?</h1>
          <h2>
            Te dejamos nuestro video promocional donde se explica en vida real
            con uno de
            <span> nuestros comederos.</span>
          </h2>
        </div>
        <div className="rigthContainer_video"></div>
      </div>
      <div className="wp_right_ainfo_video">
        <h3>
          ¿Sabias que podes poner un <span>comedero</span> donde quieras y que
          aparezca en la web?
        </h3>
        <Link to="/agregar">
          {" "}
          <Button>Aprende como</Button>
        </Link>
      </div>
    </div>
  );
}
