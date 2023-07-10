import * as React from "react";
// import { useState, useCallback } from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import pic0 from "../public/feature_0.jpeg";
import pic1 from "../public/feature_1.jpeg";
import pic2 from "../public/feature_2.jpeg";
import pic3 from "../public/feature_3.jpeg";
import pic4 from "../public/feature_4.jpeg";
import styles from "../styles/Features.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={styles.tabPanel}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Features() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        padding: "200px 0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          height: "22%",
          position: "absolute",
          zIndex: "2",
          background: "#007FFF",
          filter: "blur(250.5px)",
        }}
      />
      <Box
        sx={{
          position: "sticky",
          zIndex: "3",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="inherit"
            color="inherit"
            indicatorColor="primary"
            aria-label="inherit tabs example"
          >
            <Tab label="Совместный кодинг" {...a11yProps(0)} />
            <Tab label="Сценарии интервью" {...a11yProps(1)} />
            <Tab label="Запись и повтор кода" {...a11yProps(2)} />
            <Tab label="Отчёты" {...a11yProps(3)} />
            <Tab label="Брендирование редактора" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Image src={pic0} loading="lazy" alt="0"></Image>
          <Box sx={{ maxWidth: "271px", marginRight: "24px" }}>
            <Typography className={styles.title}>
              Коллаборация стала легче
            </Typography>
            <Typography className={styles.text}>
              Вместе с кандидатом пишите и запускайте код прямо в браузере.
              Запуск кода на 15+ языках, в т.ч. HTML/CSS/JS и React/Angular/Vue.
              И также просматривай код прямо на нашем веб-сайте.
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ maxWidth: "271px", marginRight: "24px" }}>
            <Typography className={styles.title}>
              Коллаборация стала легче
            </Typography>
            <Typography className={styles.text}>
              Вместе с кандидатом пишите и запускайте код прямо в браузере.
              Запуск кода на 15+ языках, в т.ч. HTML/CSS/JS и React/Angular/Vue.
              И также просматривай код прямо на нашем веб-сайте.
            </Typography>
          </Box>
          <Image src={pic1} loading="lazy" alt="0"></Image>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Image src={pic2} loading="lazy" alt="0"></Image>
          <Box sx={{ maxWidth: "271px", marginRight: "24px" }}>
            <Typography className={styles.title}>
              Коллаборация стала легче
            </Typography>
            <Typography className={styles.text}>
              Вместе с кандидатом пишите и запускайте код прямо в браузере.
              Запуск кода на 15+ языках, в т.ч. HTML/CSS/JS и React/Angular/Vue.
              И также просматривай код прямо на нашем веб-сайте.
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{ maxWidth: "271px", marginRight: "24px" }}>
            <Typography className={styles.title}>
              Коллаборация стала легче
            </Typography>
            <Typography className={styles.text}>
              Вместе с кандидатом пишите и запускайте код прямо в браузере.
              Запуск кода на 15+ языках, в т.ч. HTML/CSS/JS и React/Angular/Vue.
              И также просматривай код прямо на нашем веб-сайте.
            </Typography>
          </Box>
          <Image src={pic3} loading="lazy" alt="0"></Image>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Image src={pic4} loading="lazy" alt="0"></Image>
          <Box sx={{ maxWidth: "271px", marginRight: "24px" }}>
            <Typography className={styles.title}>
              Коллаборация стала легче
            </Typography>
            <Typography className={styles.text}>
              Вместе с кандидатом пишите и запускайте код прямо в браузере.
              Запуск кода на 15+ языках, в т.ч. HTML/CSS/JS и React/Angular/Vue.
              И также просматривай код прямо на нашем веб-сайте.
            </Typography>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
