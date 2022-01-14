/* eslint-disable react/jsx-key */
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";
import React from "react";

const CardStyles = {
  width:
    "clamp(17.5rem, calc(17.5rem + (530 - 280) * ((100vw - 320px) / (1440 - 320))), 33.125rem)",
  minWidth: 280,
  height: 299,
  // boxShadow: "0px 12px 12px rgba(0, 0, 0, 0.12)",
  boxShadow: "1px 2px 3px 0 rgba(0, 0, 0, 0.12)",
  borderRadius: "20px",
  marginBottom: "1.5rem",
};

function SingleTestimonio({ testimonio, index, cardWidth }) {
  const { name, position, description } = testimonio;
  const icons = [
    <Filter1Icon fontSize="large" />,
    <Filter2Icon fontSize="large" />,
    <Filter3Icon fontSize="large" />,
    <Filter4Icon fontSize="large" />,
    <Filter5Icon fontSize="large" />,
    <Filter6Icon fontSize="large" />,
    <Filter7Icon fontSize="large" />,
    <Filter8Icon fontSize="large" />,
  ];

  return (
    <Card sx={{ ...CardStyles }} ref={cardWidth}>
      <CardActionArea
        sx={{
          textAlign: "left",
          padding: "1rem 0",
          height: 299,
          cursor: "default",
        }}
        disableRipple
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              sx={{
                width: { xs: 60, md: 70, lg: 82 },
                height: { xs: 60, md: 70, lg: 82 },
              }}
            >
              {icons[index - 1]}
            </Avatar>
          }
          title={name}
          titleTypographyProps={{
            fontSize: "1.125rem",
            fontWeight: "bold",
            lineHeight: "1.625rem",
            color: "#222222",
          }}
          subheader={position}
          subheaderTypographyProps={{
            fontSize: "0.938rem",
            fontWeight: "600",
            lineHeight: "1.625rem",
            color: "#4511AD",
          }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: "440px", textAlign: { xs: "center", md: "left" } }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SingleTestimonio;
