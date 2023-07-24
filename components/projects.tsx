import styles from "../styles/Projects.module.scss";
import { Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "ФГУП ОрВД",
    name: "ГОСКОРПОРАЦИЯ ПО ОРГАНИЗАЦИИ ВОЗДУШНОГО ДВИЖЕНИЯ АДМИНИСТРАТИВНОЕ ЗДАНИЕ КЛАССА «B»",
    time: "На обслуживании с 2018г.",
    address: "Ленинградский пр-т, д. 37, к. 7",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    number: "18 463",
    measure: "площадь м²",
    title:
      "Комплексная реконструкция систем с последующим техническим обслуживанием и организацией диспетчерской службы:",
    list: [
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "противодымная вентиляция",
      "автоматическая установка газового пожаротушения",
    ],
  },
  {
    label: "ФГУП ОрВД",
    name: "ГОСКОРПОРАЦИЯ ПО ОРГАНИЗАЦИИ ВОЗДУШНОГО ДВИЖЕНИЯ АДМИНИСТРАТИВНОЕ ЗДАНИЕ КЛАССА «B»",
    time: "На обслуживании с 2018г.",
    address: "Ленинградский пр-т, д. 37, к. 7",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    number: "18 463",
    measure: "площадь м²",
    title:
      "Комплексная реконструкция систем с последующим техническим обслуживанием и организацией диспетчерской службы:",
    list: [
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "противодымная вентиляция",
      "автоматическая установка газового пожаротушения",
    ],
  },
  {
    label: "ФГУП ОрВД",
    name: "ГОСКОРПОРАЦИЯ ПО ОРГАНИЗАЦИИ ВОЗДУШНОГО ДВИЖЕНИЯ АДМИНИСТРАТИВНОЕ ЗДАНИЕ КЛАССА «B»",
    time: "На обслуживании с 2018г.",
    address: "Ленинградский пр-т, д. 37, к. 7",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    number: "18 463",
    measure: "площадь м²",
    title:
      "Комплексная реконструкция систем с последующим техническим обслуживанием и организацией диспетчерской службы:",
    list: [
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "противодымная вентиляция",
      "автоматическая установка газового пожаротушения",
    ],
  },
  {
    label: "ФГУП ОрВД",
    name: "ГОСКОРПОРАЦИЯ ПО ОРГАНИЗАЦИИ ВОЗДУШНОГО ДВИЖЕНИЯ АДМИНИСТРАТИВНОЕ ЗДАНИЕ КЛАССА «B»",
    time: "На обслуживании с 2018г.",
    address: "Ленинградский пр-т, д. 37, к. 7",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    number: "18 463",
    measure: "площадь м²",
    title:
      "Комплексная реконструкция систем с последующим техническим обслуживанием и организацией диспетчерской службы:",
    list: [
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "противодымная вентиляция",
      "автоматическая установка газового пожаротушения",
    ],
  },
];

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className={styles.projects}>
      <Typography className={styles.title}>НАШИ ПРОЕКТЫ</Typography>
      <Box sx={{ width: "inherit" }}>
        <AutoPlaySwipeableViews
          className={styles.container}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={4000}
        >
          {images.map((step, index) => (
            <div key={step.imgPath}>
              {Math.abs(activeStep - index) <= images.length - 2 ? (
                <Box className={styles.wrapper}>
                  <Stack className={styles.object}>
                    <Box
                      component="img"
                      sx={{
                        height: 555,
                        display: "block",
                        maxWidth: 885,
                        overflow: "hidden",
                        width: 885,
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                    <Typography className={styles.object_name}>
                      {images[activeStep].label}
                    </Typography>
                    <Typography className={styles.object_name_full}>
                      {images[activeStep].name}
                    </Typography>
                    <Stack direction="row" spacing={4} paddingLeft="15px">
                      <Stack direction="row" spacing={1}>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="11" cy="11" r="11" fill="#BB3633" />
                        </svg>
                        <Typography className={styles.object_address}>
                          {images[activeStep].time}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <svg
                          width="28"
                          height="34"
                          viewBox="0 0 28 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_1_429)">
                            <path
                              d="M14 13.0002C14.6875 13.0002 15.2762 12.747 15.7663 12.2407C16.2563 11.7343 16.5008 11.1264 16.5 10.4168C16.5 9.70641 16.255 9.09804 15.765 8.5917C15.275 8.08537 14.6867 7.83263 14 7.8335C13.3125 7.8335 12.7238 8.08666 12.2337 8.593C11.7438 9.09933 11.4992 9.70727 11.5 10.4168C11.5 11.1272 11.745 11.7356 12.235 12.242C12.725 12.7483 13.3133 13.001 14 13.0002ZM14 25.9168C10.6458 22.9675 8.14083 20.2283 6.485 17.6992C4.82917 15.1702 4.00083 12.8288 4 10.6752C4 7.446 5.00542 4.87343 7.01625 2.95745C9.02708 1.04148 11.355 0.0834961 14 0.0834961C16.6458 0.0834961 18.9742 1.04148 20.985 2.95745C22.9958 4.87343 24.0008 7.446 24 10.6752C24 12.8279 23.1717 15.1693 21.515 17.6992C19.8583 20.2292 17.3533 22.9684 14 25.9168Z"
                              fill="#BB3633"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_1_429"
                              x="0"
                              y="0.0834961"
                              width="28"
                              height="33.8335"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_429"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1_429"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>

                        <Typography className={styles.object_address}>
                          {images[activeStep].address}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className={styles.info}>
                    <Box className={styles.info_number}>
                      {images[activeStep].number}
                      <Typography className={styles.info_measure}>
                        {images[activeStep].measure}
                      </Typography>
                    </Box>

                    <Typography className={styles.info_title}>
                      {images[activeStep].title}
                    </Typography>
                    {
                      <ul className={styles.info_list}>
                        {images[activeStep].list.map((item) => (
                          <p key={item}>— {item}</p>
                        ))}
                      </ul>
                    }
                  </Stack>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
          className={styles.stepper}
          sx={{
            ".MuiMobileStepper-dots": {
              alignItems: "center",
              gap: "20px",
            },
            ".MuiMobileStepper-dot": {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
            ".MuiMobileStepper-dotActive": {
              width: "15px",
              height: "15px",
              backgroundColor: "#fff",
            },
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Вперед
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Назад
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
