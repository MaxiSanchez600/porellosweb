import React, { useContext, useEffect, useState } from "react";
import "./Map.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { URL_API_GOOGLE_MAPS } from "../../../Config/env/env";
import { contextFeeders } from "../../Context/ReactContext";
import { FeedersWithReport } from "../../../Config/typescript/interfaces";
import MarkerWithInfo from "./MarkerWithInfo";
import { Modal } from "@nextui-org/react";
import Loading from "../../../Config/images/loading.svg";

const containerStyle = {
  maxWidth: "1200px",
  width: "100%",
  height: "500px",
};

export default function Map() {
  const { feedersList, setSelectedFeeder, selectedFeeder } =
    useContext(contextFeeders);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: URL_API_GOOGLE_MAPS,
  });

  const [isImgPopUpOpen, setIsImgPopUpOpen] = useState<boolean>(false);

  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: -34.603684,
    lng: -58.381559,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMarkerClick = (feeder: FeedersWithReport) => {
    setCenter({
      lat: parseFloat(feeder.latitude),
      lng: parseFloat(feeder.longitude),
    });
    setSelectedFeeder(feeder);
  };

  useEffect(() => {
    selectedFeeder &&
      setCenter({
        lat: parseFloat(selectedFeeder.latitude),
        lng: parseFloat(selectedFeeder.longitude),
      });
  }, [selectedFeeder]);

  return (
    <div className="map_Container" id="things">
      <div className="map_mapContainer">
        {isLoaded && feedersList ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              disableDefaultUI: true,
              styles: [
                {
                  featureType: "administrative.land_parcel",
                  elementType: "labels",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },
                {
                  featureType: "road.local",
                  elementType: "labels",
                  stylers: [
                    {
                      visibility: "off",
                    },
                  ],
                },
              ],
            }}
          >
            {feedersList.map((feeder) => {
              return (
                <MarkerWithInfo
                  feeder={feeder}
                  onMarkerClick={onMarkerClick}
                  setIsImgPopUpOpen={setIsImgPopUpOpen}
                />
              );
            })}
            <></>
          </GoogleMap>
        ) : (
          <img alt="Loading" src={Loading} />
        )}
      </div>
      <Modal
        closeButton
        onClose={() => setIsImgPopUpOpen(false)}
        open={isImgPopUpOpen}
      >
        <img
          className="mapImg_map"
          alt="feederImg"
          src={selectedFeeder?.FeederReport.img}
        ></img>
      </Modal>
    </div>
  );
}
