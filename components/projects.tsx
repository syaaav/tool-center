import styles from "../styles/Projects.module.scss";
import React, { useState } from "react";
import { projects } from "./data";
import { Box, Typography, Stack, styled } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StepsContainer = styled(Stack)(() => ({
  backgroundColor: "transparent",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));

const Step = styled("button")(({ active }) => ({
  height: active ? "15px" : "8px",
  width: active ? "15px" : "8px",
  padding: "0px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: active ? "#fff" : "rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  "&:hover": {
    height: "10px",
    width: "10px",
    backgroundColor: "#fff",
  },
}));

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className={styles.projects} id="projects">
      <Typography className={styles.title}>НАШИ ПРОЕКТЫ</Typography>
      <Box sx={{ width: "inherit" }}>
        <AutoPlaySwipeableViews
          className={styles.container}
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={10000}
        >
          {projects.map((step, index) => (
            <div key={step.imgPath}>
              {Math.abs(activeStep - index) <= projects.length - 2 ? (
                <Box className={styles.wrapper}>
                  <Stack className={styles.object}>
                    <div
                      style={{
                        height: "555px",
                        // width: "885px",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={step.imgPath}
                        alt={`Picture of ${step.label}`}
                        loading="lazy"
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Typography className={styles.object_name}>
                      {projects[activeStep].label}
                    </Typography>
                    <Typography className={styles.object_name_full}>
                      {projects[activeStep].name}
                    </Typography>
                    <Stack direction="row" spacing={4} paddingLeft="15px">
                      <Stack direction="row" spacing={1.5} alignItems="center">
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
                          {projects[activeStep].time}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
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
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
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
                          {projects[activeStep].address}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className={styles.info}>
                    <Box className={styles.info_number_field}>
                      <Typography className={styles.info_number}>
                        {projects[activeStep].number}
                      </Typography>
                      <Typography className={styles.info_measure}>
                        {projects[activeStep].measure}
                      </Typography>
                    </Box>

                    {Array.isArray(projects[activeStep].title) ? (
                      projects[activeStep].title.map((title, index) => (
                        <Stack key={title}>
                          <Typography className={styles.info_title}>
                            {projects[activeStep].title[index]}
                          </Typography>
                          <ul className={styles.info_list}>
                            {projects[activeStep].list[index].map((item) => (
                              <Stack
                                key={item}
                                direction="row"
                                spacing={1}
                                alignItems="flex-start"
                              >
                                <p>— </p>
                                <p>{item}</p>
                              </Stack>
                            ))}
                          </ul>
                        </Stack>
                      ))
                    ) : (
                      <Stack>
                        <Typography className={styles.info_title}>
                          {projects[activeStep].title}
                        </Typography>
                        <ul className={styles.info_list}>
                          {projects[activeStep].list.map((item) => (
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <p>— </p>
                              <p key={item}>{item}</p>
                            </Stack>
                          ))}
                        </ul>
                      </Stack>
                    )}

                    {projects[activeStep].extra && (
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{ marginTop: "20px" }}
                      >
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
                          {projects[activeStep].extra}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <StepsContainer>
          {Array.from(Array(maxSteps).keys()).map((step) => (
            <Step
              key={step}
              onClick={() => setActiveStep(step)}
              active={activeStep === step}
            />
          ))}
        </StepsContainer>
      </Box>
    </Box>
  );
}
