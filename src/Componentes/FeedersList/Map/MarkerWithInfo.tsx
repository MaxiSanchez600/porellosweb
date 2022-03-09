import { Button, Modal } from "@nextui-org/react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";
import { Status } from "../../../Config/typescript/enums";
import { FeedersWithReport } from "../../../Config/typescript/interfaces";
import { getStatusColor, getStatusDescription } from "../../../Helpers/status";
import { contextFeeders } from "../../Context/ReactContext";
import { Camera } from "react-iconly";

import "./Map.scss";

type Props = {
  feeder: FeedersWithReport;
  onMarkerClick: any;
  setIsImgPopUpOpen: any;
};

export default function MarkerWithInfo(props: Props) {
  const { feeder, onMarkerClick, setIsImgPopUpOpen } = props;
  const [open, isOpen] = useState<boolean>(false);

  const onClickMarker = (feeder: FeedersWithReport) => {
    onMarkerClick(feeder);
    isOpen(true);
  };

  const { selectedFeeder } = useContext(contextFeeders);

  useEffect(() => {
    selectedFeeder?.id === feeder.id && isOpen(true);
  }, []);
  return (
    <Marker
      position={{
        lat: parseFloat(feeder.latitude),
        lng: parseFloat(feeder.longitude),
      }}
      onClick={() => onClickMarker(feeder)}
    >
      {open && selectedFeeder?.id === feeder.id && (
        <InfoWindow
          options={{ minWidth: 200 }}
          onCloseClick={() => isOpen(false)}
        >
          <div className="infoWindow_map">
            <h1 className="infoWindow_title">📍 {feeder.location}</h1>
            <p className="infoWindow_desc">{feeder.description}</p>
            <p
              style={{
                color: "white",
                backgroundColor: getStatusColor(feeder.FeederReport.status),
                padding: "5px",
                borderRadius: "5px",
                backgroundSize: "cover",
              }}
            >
              {" "}
              {getStatusDescription(feeder.FeederReport.status)}
            </p>
            <p>
              <span style={{ fontWeight: 900 }}>Ultimo reporte: </span>
              {feeder.FeederReport.description}
            </p>
            <Button
              auto
              iconRight={<Camera stroke="bold" set="curved" />}
              css={{ margin: "0 auto", width: "150px" }}
              onClick={() => setIsImgPopUpOpen(true)}
            >
              Ver foto
            </Button>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}
