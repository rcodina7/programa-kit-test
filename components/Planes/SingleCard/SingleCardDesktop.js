import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiButton from "src/MuiButton";
import Image from "next/image";
import {
  singleCardStyles,
  singleCardHeaderStyles,
  liStyles,
} from "./SingleCardDesktopStyles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { CardHeader } from "@mui/material";

const displayCardHeader = (service) => {
  return (
    <CardHeader
      subheader={service.subheader}
      action={
        <StarBorderIcon
          sx={{
            ml: 2,
            color: "white",
            filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
          }}
        />
      }
      subheaderTypographyProps={{
        align: "right",
        fontWeight: "bold",
        color: "white",
      }}
      sx={{ ...singleCardHeaderStyles(service) }}
    />
  );
};

export default function SingleCardDesktop({ service }) {
  return (
    <Card sx={{ ...singleCardStyles(service) }}>
      {service.service === "Pro" && displayCardHeader(service)}
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
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
            ${service.price}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ color: service.service === "Pro" && "white" }}
          >
            /año
          </Typography>
        </Box>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            textAlign: "start",
            color: service.service === "Pro" && "white",
          }}
        >
          {service.service}
        </Typography>
        <p
          style={{
            maxWidth: "300px",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "22px",
            color: service.service === "Base" ? "#848199" : "white",
          }}
        >
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
              align="center"
              key={line}
              sx={{ ...liStyles(service) }}
            >
              <span
                style={{
                  marginRight: "1rem",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "22px",
                }}
              >
                <Image
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
      <CardActions>
        {service.buttonText === "Quiero este plan" ? (
          <MuiButton fullWidth text="Quiero este plan" />
        ) : (
          <MuiButton
            fullWidth
            text="Quiero este plan"
            opacity={0.15}
            customColor
          />
        )}
      </CardActions>
    </Card>
  );
}
