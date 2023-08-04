import React, { useState, useEffect } from "react";
import styles from "../styles/Loading.module.scss";
import { Box, Typography, Collapse, Stack } from "@mui/material";
import Image from "next/image";

export default function Loading() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box className={styles.loading}>
      {/* <Collapse
        orientation="horizontal"
        in={checked}
        timeout={15000}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
      </Collapse> */}
      <Box className={styles.background}>
        <svg
          width="1920"
          height="1076"
          viewBox="0 0 1920 1076"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_154_4368)">
            <rect width="1920" height="1080" fill="#0E143C" />
            <line
              x1="579.5"
              y1="952.001"
              x2="579.5"
              y2="-17.0011"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="154.018"
              y1="953"
              x2="154.018"
              y2="-17.0002"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="366.706"
              y1="1003"
              x2="366.706"
              y2="-16.9999"
              stroke="white"
              stroke-width="3"
            />
            <path d="M155 452L368 329V575L155 452Z" fill="white" />
            <path d="M155 953L368 830V1076L155 953Z" fill="white" />
            <line
              x1="1919.29"
              y1="746.323"
              x2="959.86"
              y2="234.245"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="367.252"
              y1="573.7"
              x2="960.097"
              y2="232.414"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="1919.29"
              y1="1245.32"
              x2="959.86"
              y2="733.245"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="367.248"
              y1="1074.7"
              x2="960.094"
              y2="731.416"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="-0.26709"
              y1="540.542"
              x2="154.09"
              y2="451.424"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="-0.26709"
              y1="1040.54"
              x2="154.09"
              y2="951.424"
              stroke="white"
              stroke-width="3"
            />
          </g>
          <defs>
            <clipPath id="clip0_154_4368">
              <rect width="1920" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>

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
