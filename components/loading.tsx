import React, { useState, useEffect } from "react";
import styles from "../styles/Loading.module.scss";
import { Box, Collapse, Paper } from "@mui/material";

const icon = (
  <Paper
    elevation={4}
    sx={{
      height: "100vh",
      maxheight: "100vh",
      width: "100vw",
      backgroundColor: "#0e143c",
      backgroundImage: "url(/lines.png)",
      backgroundSize: "cover",
    }}
  ></Paper>
);

export default function Loading() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 500);
  }, []);

  return (
    <Box className={styles.loading}>
      <Collapse orientation="horizontal" in={checked} timeout={4500}>
        {icon}
      </Collapse>
      <Box className={styles.logo}>
        <svg
          width="200"
          height="167"
          viewBox="0 0 200 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M112.575 51.235L87.7345 36.3481L63.0426 51.086V122.84L25.4097 101.254V29.3515L50.2504 15.0602L25.1122 0.620117L0.56897 14.7625V115.545L87.7345 166.16V65.526L112.575 51.235Z"
            fill="white"
          />
          <path
            d="M124.921 15.0603V86.9631L112.575 94.2575V122.989L149.91 101.552V29.6494L174.602 15.0603L149.762 0.917969L124.921 15.0603Z"
            fill="white"
          />
          <path
            d="M174.602 58.083V87.112L199.592 72.8209L174.602 58.083Z"
            fill="white"
          />
        </svg>
        <p className={styles.name}>Инструмент Центр</p>
        <p className={styles.title}>более 10 лет в строительном бизнесе</p>
      </Box>
    </Box>
  );
}
