import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import PersonAddDisabledIcon from "@mui/icons-material/PersonAddDisabled";
import PersonIcon from "@mui/icons-material/Person";
import { Divider } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import GoogleButton from "./GoogleButton";
import { AuthContext } from "contexts/auth.context";
import { getAuth, signOut } from "@firebase/auth";

export default function ListTest() {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const [currentUser, handleCurrentUser] = useContext(AuthContext);

  const handleDashboard = () => router.push("/dashboard");

  const handleAuthAction = (type) => {
    router.push(type === "login" ? "/login" : "/registro");
  };

  const handleSignOut = () => signOut(getAuth());

  return (
    <List
      sx={{ width: "100%", width: 320, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        currentUser?.name ? (
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ textAlign: "center" }}
          >
            {currentUser?.email}
          </ListSubheader>
        ) : null
      }
    >
      {currentUser?.name ? <Divider variant="middle" /> : null}
      {currentUser?.name ? null : (
        <ListItemButton onClick={() => handleAuthAction("login")}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Iniciar sesión" />
        </ListItemButton>
      )}

      {currentUser?.name ? null : (
        <ListItemButton onClick={() => handleAuthAction("register")}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Registrar" />
        </ListItemButton>
      )}

      {currentUser?.name ? (
        <>
          <ListItemButton onClick={handleDashboard}>
            <ListItemIcon>
              <PrivacyTipIcon />
            </ListItemIcon>
            <ListItemText primary="Área privada" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItemButton>
          <ListItemButton onClick={handleSignOut}>
            <ListItemIcon>
              <PersonAddDisabledIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItemButton>
        </>
      ) : null}
    </List>
  );
}
