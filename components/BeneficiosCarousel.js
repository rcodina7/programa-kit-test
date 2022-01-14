import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Planes integrales de ciberseguridad para su empresa",
    imgPath: "/carousel/1.jpg",
  },
  {
    label: "Apostamos por trabajos seguros",
    imgPath: "/carousel/2.jpg",
  },
  {
    label: "Metodología Top-Down para el diseño de redes",
    imgPath: "/carousel/3.jpg",
  },
  {
    label: "Digitalización de su empresa",
    imgPath: "/carousel/4.jpg",
  },
];

function BeneficiosCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => setActiveStep((prev) => prev + 1);

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleStepChange = (step) => setActiveStep(step);

  return (
    <Box
      sx={{
        maxWidth: 500,
        flexGrow: 1,
        boxShadow: "1px 2px 3px 0 rgba(0,0,0,0.1)",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={8000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 285,
                    display: "block",
                    maxWidth: 500,
                    overflow: "hidden",
                    width: "100%",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Paper
                  square
                  elevation={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "#3d405b",
                  }}
                >
                  <Typography sx={{ color: "white", fontWeight: 700 }}>
                    {images[activeStep].label}
                  </Typography>
                </Paper>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default BeneficiosCarousel;
