import styles from "../styles/Header.module.scss";
import { Box, Typography, Grid, Divider, styled } from "@mui/material";

import Mouse from "../public/mouse";
import Image from "next/image";
import display from "../public/display.png";
import Link from "@mui/material/Link";
import Arrow from "../public/arrow";

const DividerLine = styled(Divider)({
  width: "calc(100% - 13px)",
  border: "0.5px solid #ffffff",
});

export default function About() {
  return (
    <div className={styles.header}>
      <Box
        sx={{
          padding: "100px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "9px",
        }}
      >
        <Typography className={styles.title}>БОЛЕЕ 10 ЛЕТ НА РЫНКЕ</Typography>
        <Box
          className={styles.divider}
          sx={{ width: "75%", marginLeft: "auto" }}
        >
          <p className={styles.divider_circle}></p>
          <DividerLine />
        </Box>
        <Box sx={{ width: "55%" }}>
          <Typography sx={{ padding: "0px 15px" }} className={styles.text}>
            «ИНСТРУМЕНТ ЦЕНТР» С 2012 года осуществляет полный комплекс услуг по
            проектированию, монтажу и техническому обслуживанию инженерных
            систем на объектах коммерческой и жилой недвижимости.
          </Typography>
          <Box className={styles.divider}>
            <DividerLine />
            <p className={styles.divider_circle}></p>
          </Box>
          <Typography sx={{ padding: "0px 15px" }} className={styles.text}>
            Миссия нашей компании - обеспечить клиентам комфорт и безопасность с
            помощью применения новейших технологий и современный инженерных
            решений.
          </Typography>
          <Box className={styles.divider} sx={{ width: "95%" }}>
            <DividerLine />
            <p className={styles.divider_circle}></p>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "22px",
        }}
      >
        <Typography variant="h1" className={styles.title}>
          ПОЧЕМУ МЫ?
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ color: "white" }}
        >
          <Grid item xs={6}>
            <Typography>
              МОДЕРНИЗАЦИЯ СИСТЕМ БЕЗ ОСТАНОВКИ РАБОТЫ ЗДАНИЯ
            </Typography>
            <Typography>
              Производство, торговый или офисный центр не обязательно должны
              прекращать свою деятельность на период модернизации: мы планируем
              работы так, чтобы объекты оставались в рабочем состоянии, сохраняя
              доходы клиента.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              МОДЕРНИЗАЦИЯ СИСТЕМ БЕЗ ОСТАНОВКИ РАБОТЫ ЗДАНИЯ
            </Typography>
            <Typography>
              Производство, торговый или офисный центр не обязательно должны
              прекращать свою деятельность на период модернизации: мы планируем
              работы так, чтобы объекты оставались в рабочем состоянии, сохраняя
              доходы клиента.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              МОДЕРНИЗАЦИЯ СИСТЕМ БЕЗ ОСТАНОВКИ РАБОТЫ ЗДАНИЯ
            </Typography>
            <Typography>
              Производство, торговый или офисный центр не обязательно должны
              прекращать свою деятельность на период модернизации: мы планируем
              работы так, чтобы объекты оставались в рабочем состоянии, сохраняя
              доходы клиента.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              МОДЕРНИЗАЦИЯ СИСТЕМ БЕЗ ОСТАНОВКИ РАБОТЫ ЗДАНИЯ
            </Typography>
            <Typography>
              Производство, торговый или офисный центр не обязательно должны
              прекращать свою деятельность на период модернизации: мы планируем
              работы так, чтобы объекты оставались в рабочем состоянии, сохраняя
              доходы клиента.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
