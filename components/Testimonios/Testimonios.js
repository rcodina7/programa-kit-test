import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Stepper from "src/Stepper";
import getTestimonios from "utils/getTestimonios";
import SingleTestimonio from "./SingleTestimonio/SingleTestimonio";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

const TestimonioWrapperStyles = (isMoreThan800px) => ({
  display: "flex",
  gap: "3vw",
  scrollBehavior: "smooth",
  minWidth: isMoreThan800px && "min-content",

  "&::-webkit-scrollbar": {
    height: "4px",
    width: "4px",
    background: "white",
  },
  "&::-webkit-scrollbar-thumb:horizontal": {
    background: "#4511AD",
    color: "red",
    borderRadius: "10px",
  },
});

function Testimonios() {
  const theme = useTheme();

  const isMoreThan800px = useMediaQuery("(min-width:800px)");
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");
  const isMoreThan1200px = useMediaQuery("(min-width:1200px)");
  const testimonios = getTestimonios();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonios.length;

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleStepChange = (step) => setActiveStep(step);

  return (
    <>
      <Box
        component="section"
        id="requisitos"
        sx={{
          display: isMoreThan800px ? "flex" : "block",
          gap: isMoreThan1000px ? "4rem" : "0rem",
          margin: "10rem 0",
          mt: { xs: 10, md: 17 },
          mb: 0,
        }}
      >
        <Box
          sx={{
            textAlign: isMoreThan800px ? "left" : "center",
            width: isMoreThan1200px ? "auto" : "250px",
            marginRight: "auto",
            ml: isMoreThan1000px ? "5rem" : "auto",
          }}
        >
          <h3
            style={{
              textAlign: isMoreThan800px ? "left" : "center",
            }}
          >
            Bases
          </h3>
          <h2
            style={{
              minWidth: isMoreThan800px && "400px",
              textAlign: isMoreThan800px ? "left" : "center",
              marginBottom: "1rem",
            }}
          >
            Bases generales del programa
          </h2>
          {isMoreThan800px && (
            <Stepper
              handleNext={handleNext}
              handleBack={handleBack}
              activeStep={activeStep}
              maxSteps={maxSteps}
            />
          )}
        </Box>
        <Box
          sx={{
            ...TestimonioWrapperStyles(isMoreThan800px),
            overflowX: isMoreThan800px ? "hidden" : "scroll",
            padding: "3rem 0",
          }}
        >
          {isMoreThan800px ? (
            <>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                containerStyle={{
                  margin: "1rem 6rem",
                  width: "550px",
                }}
                style={{
                  paddingLeft: (theme) => theme.spacing.normal,
                  width: "60vw",
                  overflow: "hidden",
                }}
                slideStyle={{
                  paddingRight: (theme) => theme.spacing.normal,
                  paddingBottom: (theme) => theme.spacing.normal,
                  flex: "none",
                }}
              >
                {testimonios.map((testimonio, index) => (
                  <SingleTestimonio
                    testimonio={testimonio}
                    key={`${testimonio.name}+${index}`}
                    index={index + 1}
                  />
                ))}
              </SwipeableViews>
            </>
          ) : (
            <Box sx={{ ...TestimonioWrapperStyles(isMoreThan800px) }}>
              {testimonios.map((testimonio, index) => (
                <SingleTestimonio
                  testimonio={testimonio}
                  key={`${testimonio.name}+${index}`}
                  index={index + 1}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Testimonios;
