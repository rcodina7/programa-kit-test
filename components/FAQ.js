import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, useMediaQuery } from "@mui/material";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 13, md: 13 },
      }}
    >
      {isMoreThan1000px ? (
        <img
          src="/page/faq_bg.svg"
          alt="decorative blue background image"
          style={{
            width: "1200px",
            height: "593.04px",
            position: "absolute",
            top: "260rem",
            left: "-33.5rem",
            zIndex: "-1",
          }}
        />
      ) : null}

      <Container disableGutters maxWidth="sm" component="div" sx={{ pb: 6 }}>
        <h3 style={{ textAlign: "center" }}>FAQ</h3>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
      </Container>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
          maxWidth: "940px",
          mb: "10px",
          "&:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "auto", fontWeight: 500 }}>
            ¿A quién va dirigido?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "rgba(69, 17, 173, 0.04)" }}>
          <Typography>
            Este programa constará de dos fases. La primera de ellas es una
            convocatoria con una inversión de 500 millones de euros dirigida a
            Pymes de entre 10 a 49 trabajadores, siendo la ayuda de hasta
            12.500€. La segunda fase ayudará a más de 1 millón de microempresas
            y autónomos con una inversión de 2.500 millones de euros.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
          maxWidth: "940px",
          mb: "10px",
          "&:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "auto", fontWeight: 500 }}>
            ¿Cómo se ofertarán estos Kits Digitales?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "rgba(69, 17, 173, 0.04)" }}>
          <Typography>
            El bono se solicita a través de la web de
            https://acelerapyme.gob.es/, con la ayuda de un Agente Digitalizador
            Adherido. Logic Solutions os ayudará durante todo el proceso.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
          maxWidth: "940px",
          mb: "10px",
          "&:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "auto", fontWeight: 500 }}>
            ¿Qué se subvencionará?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "rgba(69, 17, 173, 0.04)" }}>
          <Typography>
            Las pequeñas empresas de entre 10 y 50 empleados podrán optar hasta
            a 12.000 euros en estos ‘bonos digitales’. Las siguientes en el
            escalafón, las compañías de entre 3 y 10 trabajadores, podrán llegar
            hasta 6.000 euros. Y, por último, las microempresas de hasta 3
            empleados sólo conseguirán ayudas por valor de 2.000 euros
          </Typography>
          <Typography sx={{ my: 3 }}>
            Por categorías, el ‘kit digital’ subvencionará la creación de sitios
            para tener presencia en internet, comercio electrónico o la gestión
            de redes sociales.
          </Typography>
          <Typography>
            También se financiarán soluciones para la gestión de clientes , las
            herramientas de ‘business intelligence’ y analítica de datos, de
            gestión de procesos y flujos de trabajo (ERP), factura electrónica ,
            oficina virtual (para tecnologías de colaboración y trabajo remoto)
            o ciberseguridad y comunicaciones seguras.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px !important",
          maxWidth: "940px",
          "&:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "auto", fontWeight: 500 }}>
            ¿Cuándo se debe solicitar y ejecutar la ayuda?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "rgba(69, 17, 173, 0.04)" }}>
          <Typography>
            Los plazos son otro de los elementos clave para no perderse en estas
            ayudas a la digitalización de las pymes. La solicitud comienza el 11
            de enero de 2022. Sin embargo, hay tres plazos que debemos tener muy
            en cuenta a la hora de solicitar y ejecutar estas subvenciones:
          </Typography>
          <Typography sx={{ my: 1 }}>
            – La formalización de acuerdos de prestación de soluciones debe
            hacerse en un máximo de seis meses desde la notificación de la
            concesión de la ayuda.
          </Typography>
          <Typography sx={{ my: 1 }}>
            – Posteriormente, en un plazo máximo de tres meses desde la
            validación de dicho acuerdo, deberá realizarse la implementación
            tecnológica.
          </Typography>
          <Typography>
            – Y, finalmente, hay otra fase de doce meses -a computar desde la
            factura que cierre la implementación anterior- en la que se
            procederá al desarrollo y consolidación de esa tecnología dentro de
            la pyme.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
