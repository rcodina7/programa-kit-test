import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MuiButton from "src/MuiButton";
import { liStyles, singleCardHeaderStyles } from "./SingleCardDesktopStyles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SolicitudFormDialog from "components/Solicitud/SolicitudFormDialog";

const displayCardHeader = (service) => {
  return (
    <CardHeader
      action={
        <StarBorderIcon
          sx={{
            ml: 2,
            color: "white",
            filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
          }}
          fontSize="large"
        />
      }
      subheaderTypographyProps={{
        align: "right",
        fontWeight: "bold",
      }}
      sx={{
        position: "absolute",
        right: 0,
        zIndex: 1,
      }}
    />
  );
};

function SingleCard({ service }) {
  //SOLICITUD FORM MODAL
  const [openSolicitud, setOpenSolicitud] = React.useState(false);
  const handleClickOpenSolicitud = () => setOpenSolicitud(true);
  const handleCloseSolicitud = () => setOpenSolicitud(false);
  //************ */

  return (
    <Grid item key={service.title} xs={12} sm={12} md={12}>
      <Card
        sx={{
          backgroundColor: (theme) =>
            service.service === "Pro" ? theme.palette.primary.main : "default",
          position: "relative",
          boxShadow:
            service.service === "Pro"
              ? "0px 12px 12px rgba(82, 67, 194, 0.22)"
              : "0px 12px 12px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
        }}
      >
        {service.service === "Pro" && displayCardHeader(service)}
        {service.service === "Pro" && (
          <div
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              height: "8.5rem",
              width: "9rem",
              backgroundColor: "#79B44C",
              position: "absolute",
              right: "-4rem",
              transform: "rotate(40deg)",
              top: "-5rem",
            }}
          />
        )}
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              color="text.primary"
              sx={{
                color: service.service === "Pro" && "white",
                fontWeight: service.service === "Pro" && "bold",
              }}
            >
              {service.price}€
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ color: service.service === "Pro" && "white" }}
            >
              /gestión
            </Typography>
          </Box>
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            sx={{ color: service.service === "Pro" && "white" }}
          >
            {service.service}
          </Typography>
          <p style={{ color: service.service === "Pro" && "white" }}>
            {service.description}
          </p>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            {service.options.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="left"
                key={line}
                sx={{ ...liStyles(service) }}
              >
                <span style={{ marginRight: "1rem" }}>
                  <img
                    height="27"
                    width="27"
                    src={`/planes/${
                      service.service === "Base"
                        ? "check_circle_purple.svg"
                        : "check_circle_green.svg"
                    }`}
                    alt="decorative check mark icon"
                  />
                </span>
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {service.buttonText === "Quiero este plan" ? (
            <SolicitudFormDialog
              handleClickOpenSolicitud={handleClickOpenSolicitud}
              handleCloseSolicitud={handleCloseSolicitud}
              openSolicitud={openSolicitud}
              type={"solicitudService2"}
            />
          ) : (
            <SolicitudFormDialog
              handleClickOpenSolicitud={handleClickOpenSolicitud}
              handleCloseSolicitud={handleCloseSolicitud}
              openSolicitud={openSolicitud}
              type={"solicitudServiceFull2"}
            />
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default SingleCard;
