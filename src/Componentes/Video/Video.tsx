import "./Video.scss";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import InstagramEmbed from "react-instagram-embed";

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
          <iframe src="https://www.youtube.com/embed/TdefPiiTaKM"></iframe>
        </div>
      </div>
      <div className="wp_right_ainfo_video">
        <h3>
          ¿Sabías qué podés poner un <span>comedero</span> donde quieras y que
          aparezca en la web?
        </h3>
        <Link to="/agregar">
          {" "}
          <Button>Aprendé cómo</Button>
        </Link>
      </div>
    </div>
  );
}
