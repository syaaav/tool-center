import styles from "../styles/Header.module.scss";
import { Box, Typography, Divider, styled, Stack } from "@mui/material";

export const DividerLine = styled(Divider)({
  width: "calc(100% - 13px)",
  border: "0.5px solid #ffffff",
});

export default function About() {
  return (
    <div className={styles.header} id="divAbout">
      <Box
        sx={{
          padding: "50px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "9px",
        }}
      >
        <Typography className={styles.title}>
          БОЛЕЕ{" "}
          <span className={styles.accent}>
            <span className={styles.accent_big}>10</span> ЛЕТ
          </span>{" "}
          НА РЫНКЕ
        </Typography>
        <Box
          className={styles.divider}
          sx={{ width: "75%", marginLeft: "auto" }}
        >
          <p className={styles.divider_circle}></p>
          <DividerLine />
        </Box>
        <Stack className={styles.wrapper} spacing={3}>
          <Box className={styles.wrapper_text}>
            <Typography sx={{ padding: "0px 15px" }} className={styles.text}>
              «ИНСТРУМЕНТ ЦЕНТР» С 2012 года осуществляет полный комплекс услуг
              по проектированию, монтажу и техническому обслуживанию инженерных
              систем на объектах коммерческой и жилой недвижимости.
            </Typography>
            <Box className={styles.divider}>
              <DividerLine />
              <p className={styles.divider_circle}></p>
            </Box>
            <Typography sx={{ padding: "0px 15px" }} className={styles.text}>
              <span className={styles.text_big}>Миссия нашей компании</span> -
              обеспечить клиентам комфорт и безопасность с помощью применения
              новейших технологий и современный инженерных решений.
            </Typography>
            <Box className={styles.divider} sx={{ width: "95%" }}>
              <DividerLine />
              <p className={styles.divider_circle}></p>
            </Box>
          </Box>
          <Stack className={styles.wrapper_number}>
            <Typography className={styles.extra_number}>70+</Typography>
            <Typography className={styles.extra_number_text}>
              СПЕЦИАЛИСТОВ ДЛЯ РЕАЛИЗАЦИИ ПРОЕКТОВ
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
