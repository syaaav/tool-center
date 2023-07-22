import styles from "../styles/Why.module.scss";
import { Box, Stack, Typography, Grid, Divider, styled } from "@mui/material";
import Triangle from "../public/triangle";

export default function Why() {
  return (
    <div className={styles.header}>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "22px",
        }}
      >
        <Typography variant="h1" className={styles.title}>
          ПОЧЕМУ <span className={styles.accent}>МЫ</span>?
        </Typography>
        <Grid
          container
          rowSpacing={9}
          columnSpacing={{ xs: 1, sm: 4, md: 19 }}
          sx={{ color: "white" }}
        >
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <Box style={{ marginTop: "13px" }}>
                <Triangle></Triangle>
              </Box>
              <Typography className={styles.summary}>
                МОДЕРНИЗАЦИЯ СИСТЕМ БЕЗ ОСТАНОВКИ РАБОТЫ ЗДАНИЯ
              </Typography>
            </Stack>

            <Typography className={styles.details}>
              Производство, торговый или офисный центр не обязательно должны
              прекращать свою деятельность на период модернизации: мы планируем
              работы так, чтобы объекты оставались в рабочем состоянии, сохраняя
              доходы клиента.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <Box style={{ marginTop: "13px" }}>
                <Triangle></Triangle>
              </Box>
              <Typography className={styles.summary}>
                ДИСТАНЦИОННЫЙ МОНИТОРИНГ ОБЪЕКТОВ
              </Typography>
            </Stack>
            <Typography className={styles.details}>
              Развиваем сервис дистанционного мониторинга технического состояния
              пожарных и охранных систем на объекте. Он позволяет еще до
              обращения заказчика узнать о возможных неисправностях на объекте и
              оперативно устранить их.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <Box style={{ marginTop: "13px" }}>
                <Triangle></Triangle>
              </Box>
              <Typography className={styles.summary}>
                ЭЛЕКТРОННЫЕ АРХИВЫ
              </Typography>
            </Stack>
            <Typography className={styles.details}>
              Даже спустя много лет клиенты могут обратиться к нам, чтобы
              получить информацию о работах на их объекте: всё хранится в
              электронных архивах.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <Box style={{ marginTop: "13px" }}>
                <Triangle></Triangle>
              </Box>
              <Typography className={styles.summary}>
                ПОСТОЯННАЯ ОНЛАЙН-ПОДДЕРЖКА
              </Typography>
            </Stack>
            <Typography className={styles.details}>
              Наша техническая поддержка осуществляется 24/7, без выходных.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
