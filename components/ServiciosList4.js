import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import styles from "styles/serviciosList4.module.css";

export default function ServiciosList4() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#F7F7F9",
      }}
      className={styles.animatedBorder}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Filter1Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Comercio Electrónico"
          secondary="(Hasta 2.000€)"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Filter2Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Gestión de procesos"
          secondary="(Hasta 6.000€)"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Filter3Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Servicios y herramientas de oficina virtual"
          secondary="(Hasta 12.000€)"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Filter4Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Comunicaciones seguras"
          secondary="(Hasta 6.000€)"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Filter5Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ciberseguridad" secondary="(Hasta 6.000€)" />
      </ListItem>
    </List>
  );
}
