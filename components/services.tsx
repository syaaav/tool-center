import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography, Stack, Divider, Button } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import styles from "../styles/Services.module.scss";
import Triangle from "../public/triangle";

const directions = [
  {
    title: "комплексная автоматизация и диспетчеризация",
    list: [
      "контроль потребления ресурсов (вода, электроэнергия, тепло и т.д.)",
      "организация работы по взаимодействию всех инженерных систем здания между собой",
      "управление оборудованием и проведение его мониторинга из одной точки",
      "сведение к минимуму риска возникновения аварийных ситуаций, контроль уровня износа техники",
      "поддержание комфортных условий для людей",
      "быстрое реагирование при возникновении нештатной ситуации",
    ],
  },
  {
    title: "разработка технической документации",
    list: [
      "разработка технического отчета по результатам измерений",
      "планы эвакуации",
      "разработка СТУ и КИТМ",
      "разработка декларации пожарной безопасности",
      "расчет категорий помещений по взрывопожарной и пожарной опасности",
      "расчет пожарной нагрузки",
    ],
  },
  {
    title: "огнезащита",
    list: [
      "огнезащита несущих конструкций",
      "огнебиозащита древесины",
      "огнезащита воздуховодов",
      "огнезащита кабельных линий",
      "пескоструйная обработка",
    ],
  },
  { title: "техническое обслуживание" },
  { title: "проектирование" },
  { title: "консалтинг" },
  { title: "монтаж" },
];

const systems = [
  {
    title: "ЭОМ",
    list: [
      "контроль и управление доступом, шлагбаумы ",
      "охранное телевидение и охранная сигнализация",
      "интернет, телефония, телевидение, видеодомофоны",
      "навигация и автоматизация паркингов и стоянок",
      "системы связи для маломобильных граждан",
      "структурированные кабельные сети",
      "локальные вычислительные сети",
      "система единого времени",
    ],
    number: 35,
    measure: "кВ",
    text: "Собираем оборудование гарантия прохождения проверок до 35 кВ на своем производстве, и успешного устранения замечаний проводим испытания в собственной электролаборатории",
  },
  {
    title: "Пожарная безопасность",
    list: [
      "система автоматической пожарной сигнализации и система оповещения и управления эвакуацией людей при пожаре",
      "все виды систем пожаротушения",
      "системы дымоудаления и противопожарной автоматики",
      "удаленная диспетчерская служба",
      "пожарные насосные станции",
    ],
    number: 99.9,
    measure: "%",
    text: "Гарантия прохождения проверок и успешного устранения замечаний",
  },
  {
    title: "СЛАБОТОЧНЫЕ СИСТЕМЫ",
    list: ["кfghjk", "fghjk"],
    number: "24/7",
    text: "Единый центр управления и удаленные серверы для хранения данных работают 24/7 и обеспечивают постоянный контроль за слаботочными системами",
  },
  {
    title: "ОВиК и ВК",
    list: [
      "вентиляция и кондиционирование",
      "автоматизация вентиляции",
      "противодымная вентиляция",
      "тепловые завесы",
      "осушение и увлажнение воздуха",
      "отопление",
      "индивидуальные тепловые пункты",
      "водоснабжение и канализация",
      "насосные станции водоснабжения",
    ],
    number: "54 500",
    measure: "м²",
    text: "Площадь многофункционального офисно-торгового центра ХЦ «Лейпциг», в котором «Инструмент Центр» с 2019 года полностью обслуживает системы вентиляции, кондиционирования и дымоудаления",
  },
];

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  "&:not(:last-child)": {
    border: "none",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<Triangle />} {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
}));

const DividerLine = styled(Divider)({
  width: "calc(100% - 13px)",
  border: "0.5px solid #ffffff",
});

export default function Services() {
  const checked = true;
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div
      className={styles.services}
      // style={{ backgroundImage: `url(${mySvg})` }}
    >
      {/* <svg
        className={styles.background}
        width="1720"
        height="2157"
        viewBox="0 0 1720 2157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1199L1722 1V1014.5L0 2156V1199Z"
          fill="#BB3633"
          stroke="#BB3633"
        />
      </svg> */}

      <Stack sx={{ width: "100%", gap: "80px" }}>
        <Typography className={styles.accent_title}>Услуги</Typography>

        <Stack className={styles.content}>
          <Typography className={styles.title}>
            основные направления:
          </Typography>
          <Box className={styles.accordion}>
            {directions.map((direction, index) => (
              <Accordion
                expanded={expanded === `panel${index + 1}`}
                onChange={direction.list && handleChange(`panel${index + 1}`)}
              >
                <AccordionSummary
                  aria-controls={`${direction.title}`}
                  id={`panel${index + 1}d-header`}
                  sx={{
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      visibility: !direction.list && "hidden",
                    },
                  }}
                >
                  <Typography className={styles.summary}>
                    {direction.title}
                  </Typography>
                </AccordionSummary>
                {direction.list && (
                  <AccordionDetails>
                    {direction.list.map((point) => (
                      <Stack
                        className={styles.details}
                        key={point}
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                        gap={1}
                      >
                        <span>— </span>
                        <p>{point}</p>
                      </Stack>
                    ))}
                  </AccordionDetails>
                )}
              </Accordion>
            ))}

            <Stack className={styles.extra_number}>
              <Typography className={styles.extra_number_text}>
                более
              </Typography>
              <Stack
                direction="row"
                gap={2}
                className={styles.extra_number_number}
              >
                <span>65</span>
                <span>000</span>
                <span>+</span>
              </Stack>
              <Typography className={styles.extra_number_bigText}>
                огнезащитной обработки поверхности
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Stack className={styles.content}>
          <Typography className={styles.title}>системы</Typography>
          <Stack direction="row" spacing={5}>
            <Stack spacing={22} className={styles.titles_field}>
              {systems.map((system) => (
                <Box key={system.title} sx={{ width: "max-content" }}>
                  <Button variant="text" className={styles.system_title}>
                    {system.title}
                  </Button>
                  <Box
                    className={styles.divider}
                    sx={{ width: "100%", marginRight: "auto" }}
                  >
                    <DividerLine />
                    <p className={styles.divider_circle}></p>
                  </Box>
                </Box>
              ))}
            </Stack>
            <Stack
              justifyContent={"space-between"}
              className={styles.content_field}
            >
              <Box>list</Box>

              <Stack direction="row" spacing={2}>
                <Typography>number</Typography>
                <Typography>measure</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
