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
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "бизнес-центр “новоспасский двор”",
    name: "офисное ЗДАНИЕ КЛАССА «B+»",
    time: "На обслуживании с 2019г.",
    address: "Дербеневская набережная, д. 7",
    imgPath: "/project1.jpg",
    number: "110 000",
    measure: "площадь м²",
    title: "Обслуживаемые системы:",
    list: [
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "автоматическое водяное пожаротушение",
      "внутренний противопожарный водопровод",
    ],
    extra: "орагнизация диспетчерской службы на объекте",
  },
  {
    label: "жк “sreda”",
    name: "ЖИЛОЙ КОМПЛЕКС КОМФОРТ-КЛАССА",
    time: "На обслуживании с 2019г.",
    address: "Рязанский проспект, д. 2",
    imgPath: "/project2.jpg",
    number: "2 651",
    measure: "количество квартир в жилом комплексе",
    title: "Обслуживаемые системы:",
    list: [
      "внутренний противопожарный водопровод",
      "автоматическая пожарная сигнализация",
      "автоматическое водяное пожаротушение",
      "оповещение и управление эвакуацией людей при пожаре",
    ],
    extra: "орагнизация диспетчерской службы на объекте",
  },
  {
    label: "БИЗНЕС-ЦЕНТР «ДОМНИКОВ»",
    name: "ОФИСНОЕ ЗДАНИЕ КЛАССА «A»",
    time: "На обслуживании с 2019г.",
    address: "ул. Маши Порываевой, д. 34",
    imgPath: "/project3.jpg",
    number: "80 000",
    measure: "площадь м²",
    title: "Обслуживаемые системы:",
    list: [
      "автоматическое водяное пожаротушение",
      "внутренний противопожарный водопровод",
      "дымоудаление и противопожарная автоматика",
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "порошковое пожаротушение",
      "аэродинамические испытания системы дымоудаления",
    ],
    extra: "орагнизация диспетчерской службы на объекте",
  },
  {
    label: "ЖК «ПОЛЯНКА/44»",
    name: "ЭЛИТНЫЙ ЖИЛОЙ КОМПЛЕКС",
    time: "На обслуживании с 2019г.",
    address: "ул. Большая Полянка, д. 44",
    imgPath: "/project4.jpeg",
    number: "52 500",
    measure: "площадь м²",
    title: "Обслуживаемые системы:",
    list: [
      "оповещение и управление эвакуацией людей при пожаре",
      "автоматическое водяное пожаротушение",
      "внутренний противопожарный водопровод",
      "дымоудаление и противопожарная автоматика",
      "автоматическая пожарная сигнализация",
    ],
  },
  {
    label: "БИЗНЕС-ЦЕНТР «НОВОCЛОБОДСКИЙ»",
    name: "БИЗНЕС-ЦЕНТР КЛАССА «А»",
    time: "На обслуживании с 2019г.",
    address: "ул. Краснопролетарская, д. 16",
    imgPath: "/project5.jpg",
    number: "25 670",
    measure: "площадь м²",
    title: "Обслуживаемые системы:",
    list: [
      "дымоудаление и противопожарная автоматика",
      "пожарная насосная станция",
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "контроль и управление доступом",
      "видеонаблюдение",
    ],
  },
  {
    label: "ХЦ «ЛЕЙПЦИГ»",
    name: "МНОГОФУНКЦИОНАЛЬНЫЙ ОФИСНО-ТОРГОВЫЙ ЦЕНТР",
    time: "На обслуживании с 2018г.",
    address: "ул. Академика Варги, вл. 8, к. 1",
    imgPath: "/project6.jpeg",
    number: "54 500",
    measure: "площадь м²",
    title: "Обслуживаемые системы:",
    list: [
      "вентиляция и кондиционирование воздуха",
      "противодымная вентиляция",
      "автоматическое водяное пожаротушение",
      "внутренний противопожарный водопровод",
      "автоматическое порошковое пожаротушение",
      "пожарные насосные станции",
    ],
  },
  {
    label: "HOLIDAY INN MOSCOW SELIGERSKAYA И VINOGRADOVO",
    name: "СЕТЬ МЕЖДУНАРОДНЫХ 4* отелей",
    time: "На обслуживании с 2019г.",
    address: "Коровинское шоссе, д. 10",
    imgPath: "/project7.jpg",
    number: "365",
    measure: "количество номеров",
    title: ["Обслуживаем:", "монтажные работы"],
    list: [
      ["электроустановки РУ 0,4 кВ", "ВРУ", "щитовое оборудование"],
      [
        "реконструкция РП 0,4 кВ",
        "реконструкция РУ 0,4 кВ трансформаторной подстанции и восстановление вводной группы ГРЩ",
        "монтаж линий заземления ГРЩ и ДГУ",
      ],
    ],
  },
  {
    label: "ИБХ РАН",
    name: "ИНСТИТУТ БИООРГАНИЧЕСКОЙ ХИМИИ КОМПЛЕКС ЗДАНИЙ ИНСТИТУТА",
    time: "На обслуживании с 2019г.",
    address: "ул. Миклухо-Маклая, д. 16/10",
    imgPath: "/project8.jpg",
    number: "115 636",
    measure: "площадь м²",
    title: "Обслуживаемые системы:",
    list: [
      "контроль и управление доступом",
      "охранная сигнализация",
      "видеонаблюдение",
      "автоматическая пожарная сигнализация",
      "оповещение и управление эвакуацией людей при пожаре",
      "шлагбаумы",
      "телефонная связь",
      "часофикация",
    ],
  },
  {
    label: "МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РФ",
    name: "",
    time: "Реализация 2020-2021 гг.",
    address: "Орликов переулок, д. 1/11",
    imgPath: "/project9.jpg",
    number: "36 972",
    measure: "площадь м²",
    title: "Комплекс работ по:",
    list: [
      "интеграции противопожарных систем защиты",
      "программированию противопожарной автоматики",
      "дооснащению системы АПС",
      "модернизации ПНС",
    ],
  },
  {
    label: "ГБУ «ГОРОДСКАЯ ПОЛИКЛИНИКА No46»",
    name: "",
    time: "Реализация: 2020–2021 гг.",
    address: "ул. Иерусалимская, д. 4, стр. 1",
    imgPath: "/project10.jpeg",
    number: "3 268",
    measure: "площадь м²",
    title: "Комплексный монтаж инженерных систем:",
    list: [
      "электроснабжение, электроосвещение, молниезащита",
      "структурированная кабельная сеть",
      "системы противопожарной защиты (АПС, СОУЭ, АУГПТ, ППА)",
      "охранно-защитная дератизационная система",
      "слаботочные системы (СКУД, СОТ, СКПТ, ЧС, ОС, САПС, РТ)",
      "комплексная автоматизация и диспетчеризация (ИТП, ОВиК, лифтовое оборудование)",
    ],
  },
  {
    label: "ФИЛИАЛ ИНСТИТУТА БИООРГАНИЧЕСКОЙ ХИМИИ РАН",
    name: "",
    time: "Реализация: 2019–2020 гг.",
    address: "г. Пущино, пр. Науки, д. 6",
    imgPath: "/project11.jpg",
    number: "10 кВ",
    measure: "капитальный ремонт распределительного устройства",
    title: "Капитальный ремонт и модернизация:",
    list: [
      "распределительного устройства (10 кВ) и силовых трансформаторов на  ррТП-339",
      "силовых трансформаторов общей мощностью 630 кВА, номинальной ччччастотой 50 Гц",
      "вираспределительного устройства РУ-10 кВдеонаблюдение",
      "ячеек КСО и автоматических выключателей на низковольтной стороне ТП яя(тип К-42-630 м4)",
    ],
  },
  {
    label: "ФГУП ОрВД",
    name: "ГОСКОРПОРАЦИЯ ПО ОРГАНИЗАЦИИ ВОЗДУШНОГО ДВИЖЕНИЯ АДМИНИСТРАТИВНОЕ ЗДАНИЕ КЛАССА «B»",
    time: "На обслуживании с 2018г.",
    address: "Ленинградский пр-т, д. 37, к. 7",
    imgPath: "/project12.jpg",
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
    <Box className={styles.projects} id="projects">
      <Typography className={styles.title}>НАШИ ПРОЕКТЫ</Typography>
      <Box sx={{ width: "inherit" }}>
        <AutoPlaySwipeableViews
          className={styles.container}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={10000}
        >
          {images.map((step, index) => (
            <div key={step.imgPath}>
              {Math.abs(activeStep - index) <= images.length - 2 ? (
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
                      {images[activeStep].label}
                    </Typography>
                    <Typography className={styles.object_name_full}>
                      {images[activeStep].name}
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
                          {images[activeStep].time}
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
                          {images[activeStep].address}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className={styles.info}>
                    <Box className={styles.info_number_field}>
                      <Typography className={styles.info_number}>
                        {images[activeStep].number}
                      </Typography>
                      <Typography className={styles.info_measure}>
                        {images[activeStep].measure}
                      </Typography>
                    </Box>

                    {Array.isArray(images[activeStep].title) ? (
                      images[activeStep].title.map((title, index) => (
                        <Stack key={title}>
                          <Typography className={styles.info_title}>
                            {images[activeStep].title[index]}
                          </Typography>
                          <ul className={styles.info_list}>
                            {images[activeStep].list[index].map((item) => (
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
                          {images[activeStep].title}
                        </Typography>
                        <ul className={styles.info_list}>
                          {images[activeStep].list.map((item) => (
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

                    {images[activeStep].extra && (
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
                          {images[activeStep].extra}
                        </Typography>
                      </Stack>
                    )}
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
