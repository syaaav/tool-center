import * as React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/Nav.module.scss";
import Logo from "../public/logo";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <div className={styles.navigation}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "9px",
        }}
      >
        <Logo />
        <div className={styles.name}>Meet2Code</div>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link href="#" underline="none" color="#fff">
          {"Возможности"}
        </Link>
        <Link href="#" underline="none" color="#fff">
          {"Стоимость"}
        </Link>
        <Button variant="outlined" href="#" className={styles.logIn}>
          Войти
        </Button>
        <Button variant="contained" href="#" className={styles.signUp}>
          Регистрация
        </Button>
      </Box>
    </div>
  );
}
