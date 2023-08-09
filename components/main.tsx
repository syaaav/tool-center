import * as React from "react";
import styles from "../styles/Main.module.scss";
import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Бизнес-центр “новоспасский двор”",
    imgPath: "/project1.jpg",
  },
  {
    label: "жк “sreda”",
    imgPath: "/project2.jpg",
  },
  {
    label: "БИЗНЕС-ЦЕНТР «ДОМНИКОВ»",
    imgPath: "/project3.jpg",
  },
  {
    label: "ЖК «ПОЛЯНКА/44»",
    imgPath: "/project4.jpeg",
  },
  {
    label: "БИЗНЕС-ЦЕНТР «НОВОCЛОБОДСКИЙ»",
    imgPath: "/project5.jpg",
  },
  {
    label: "ХЦ «ЛЕЙПЦИГ»",
    imgPath: "/project6.jpeg",
  },
  {
    label: "HOLIDAY INN MOSCOW SELIGERSKAYA И VINOGRADOVO",
    imgPath: "/project7.jpg",
  },
  {
    label: "ИБХ РАН",
    imgPath: "/project8.jpg",
  },
  {
    label: "МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РФ",
    imgPath: "/project9.jpg",
  },
  {
    label: "ГБУ «ГОРОДСКАЯ ПОЛИКЛИНИКА No46»",
    imgPath: "/project10.jpeg",
  },
  {
    label: "ФИЛИАЛ ИНСТИТУТА БИООРГАНИЧЕСКОЙ ХИМИИ РАН",
    imgPath: "/project11.jpg",
  },
  {
    label: "ФГУП ОрВД",
    imgPath: "/project12.jpg",
  },
];

function Main() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      id="main-page"
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <AutoPlaySwipeableViews
        className={styles.background}
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={8000}
      >
        {images.map((step, index) => (
          <div key={step.imgPath} className={styles.background}>
            {Math.abs(activeStep - index) <= images.length - 10 ? (
              <Box
                sx={{
                  height: "100vh",
                  overflow: "hidden",
                  width: "auto",
                  backgroundImage: `url(${step.imgPath})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-end"
                  className={styles.address}
                >
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
                        fill="#fff"
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
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

                  <Typography className={styles.address_text}>
                    {step.label}
                  </Typography>
                </Stack>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box className={styles.title_field}>
        <Typography className={styles.title}>
          <span className={styles.title_stroke}>800+</span>{" "}
          <span className={styles.title_rigth}>объектов</span>
        </Typography>
        <Typography className={styles.title} textAlign={"right"}>
          1000{" "}
          <span className={styles.title_rigth}>
            довольных <span className={styles.title_stroke}>клиентов</span>
          </span>
        </Typography>
        <Button className={styles.button}>Оставить заявку</Button>
      </Box>
      {/* <Box className={styles.title_field}>
        <Typography className={styles.title}>
          <span className={styles.title_stroke_withoutBlur}>800+</span> объектов
        </Typography>
        <Typography className={styles.title} textAlign={"right"}>
          1000 довольных{" "}
          <span className={styles.title_stroke_withoutBlur}>клиентов</span>
        </Typography>
        <Button className={styles.button} href="#application">
          Оставить заявку
        </Button>
      </Box> */}
    </Box>
  );
}

export default Main;
