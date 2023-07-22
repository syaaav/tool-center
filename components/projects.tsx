import styles from "../styles/Header.module.scss";
import { Box, Typography, Grid } from "@mui/material";

import Mouse from "../public/mouse";
import Image from "next/image";
import display from "../public/display.png";
import Link from "@mui/material/Link";
import Arrow from "../public/arrow";

export default function Projects() {
  return (
    <div className={styles.header}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "9px",
          paddingTop: "800px",
        }}
      >
        <Typography variant="h1" className={styles.title}>
          НАШИ ПРОЕКТЫ
        </Typography>
        <Box>карусель</Box>
      </Box>
    </div>
  );
}
