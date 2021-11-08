import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");
  const isDesktop = useMediaQuery("(min-width:960px)");
  const isLaptop = useMediaQuery("(min-width:1280px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDYH1tMwWv7xV7xA2mZ2T2MXuCp3cAGi20" }}
        defaultCenter={{ lat: 28.5384, lng: -81.3789 }}
        center={{ lat: 28.5384, lng: -81.3789 }}
        defaultZoom={isMobile ? 12 : isTablet ? 13 : isDesktop ? 14 : 15}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
