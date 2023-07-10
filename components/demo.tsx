import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Vector from "../public/vector";
import styles from "../styles/Demo.module.scss";

export default function Demo() {
  return (
    <div className={styles.demo}>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "875px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <Typography className={styles.title}>
          В скором времени ожидайте больше функций
        </Typography>
        <Typography className={styles.text}>
          Мы стараемся чтобы пользователи могли с комфортом пользоваться нашей
          плотформой, наша команда работает над тем чтобы вы были ...
        </Typography>
        <Box
          sx={{
            maxWidth: "591px",
          }}
        >
          <Vector />
        </Box>
      </Box>
    </div>
  );
}
