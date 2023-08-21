import styles from "../styles/Projects.module.scss";
import { StyledComponentProps } from "@material-ui/core/styles";
import React, { useState } from "react";
import { projects } from "./data";
import { Box, Typography, Stack, styled } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

type StepClassKey = "root" | "active";

interface StepProps extends StyledComponentProps<StepClassKey> {
  active?: boolean;
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const StepsContainer = styled(Stack)(() => ({
  backgroundColor: "transparent",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));

const Step = styled("div")<StepProps>(({ active }) => ({
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

export default function Projects(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps = projects.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className={styles.projects} id="divProjects">
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
                    <div className={styles.object_img}>
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
                    <Stack
                      direction="row"
                      paddingLeft="15px"
                      className={styles.object_wrapper}
                    >
                      <Stack direction="row" alignItems="center">
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
                      <Stack
                        direction="row"
                        alignItems="center"
                        className={styles.svg_address}
                      >
                        <svg
                          width="28"
                          height="34"
                          viewBox="0 0 28 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_154_4174)">
                            <path
                              d="M14 13C14.6875 13 15.2762 12.7469 15.7663 12.2405C16.2563 11.7342 16.5008 11.1263 16.5 10.4167C16.5 9.70629 16.255 9.09792 15.765 8.59158C15.275 8.08525 14.6867 7.83251 14 7.83337C13.3125 7.83337 12.7238 8.08654 12.2337 8.59287C11.7438 9.09921 11.4992 9.70715 11.5 10.4167C11.5 11.1271 11.745 11.7355 12.235 12.2418C12.725 12.7482 13.3133 13.0009 14 13ZM14 25.9167C10.6458 22.9674 8.14083 20.2282 6.485 17.6991C4.82917 15.17 4.00083 12.8287 4 10.675C4 7.44587 5.00542 4.8733 7.01625 2.95733C9.02708 1.04136 11.355 0.083374 14 0.083374C16.6458 0.083374 18.9742 1.04136 20.985 2.95733C22.9958 4.8733 24.0008 7.44587 24 10.675C24 12.8278 23.1717 15.1692 21.515 17.6991C19.8583 20.2291 17.3533 22.9683 14 25.9167Z"
                              fill="#BB3633"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_154_4174"
                              x="0"
                              y="0.083374"
                              width="28"
                              height="33.8334"
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
                                result="effect1_dropShadow_154_4174"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_154_4174"
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
                            {Array.isArray(projects[activeStep].list[index]) &&
                              projects[activeStep].list[index].map((item) => (
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
                          {Array.isArray(projects[activeStep].list) &&
                            projects[activeStep].list.map((item, index) => (
                              <Stack
                                key={index}
                                direction="row"
                                spacing={1}
                                alignItems="center"
                              >
                                <p>— </p>
                                <p key={index}>{item}</p>
                              </Stack>
                            ))}
                        </ul>
                      </Stack>
                    )}

                    {projects[activeStep].extra && (
                      <Stack className={styles.info_extra}>
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
              active={activeStep === step ? true : false}
            />
          ))}
        </StepsContainer>
      </Box>
    </Box>
  );
}
