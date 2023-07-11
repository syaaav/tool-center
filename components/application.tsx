import styles from "../styles/Header.module.scss";
import { Box, Typography, Grid } from "@mui/material";

export default function Clients() {
  return (
    <div className={styles.header}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "9px",
        }}
      >
        <Typography variant="h1" className={styles.title}>
          ОСТАВЬТЕ ЗАЯВКУ И МЫ С ВАМИ СВЯЖЕМСЯ
        </Typography>
        <Box>плитка</Box>
      </Box>
    </div>
  );
}
