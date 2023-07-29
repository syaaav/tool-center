import { Box, Grid, Typography, Stack, Collapse } from "@mui/material";
import styles from "../styles/Principles.module.scss";
import Image from "next/image";

export default function Principles() {
  const checked = true;
  return (
    <div className={styles.principles}>
      <Box
        sx={{
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Stack>
          <Typography className={styles.accent_title}>принципы</Typography>
          <Typography className={styles.title}>нашей работы</Typography>
        </Stack>

        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
          <Grid item xs={6}>
            <Typography className={styles.summary}>
              ДОЛГОСРОЧНОЕ СОТРУДНИЧЕСТВО
            </Typography>
            <Collapse in={checked}>
              <Box>
                <Stack
                  className={styles.details}
                  sx={{
                    left: "-100px",
                  }}
                >
                  <div
                    className={styles.circle}
                    style={{ right: "-6px" }}
                  ></div>
                  <Image
                    src="/cooperation.jpg"
                    alt="ДОЛГОСРОЧНОЕ СОТРУДНИЧЕСТВО"
                    width="303"
                    height="249"
                  />
                  <Typography className={styles.details_text}>
                    Доверие в работе строится не только на честности,
                    порядочности и взаимной ответственности, но и на желании
                    длительного и перспективного сотрудничества, которым мы
                    очень дорожим. Мы делаем все, чтобы наше сотрудничество не
                    прекращалось.
                  </Typography>
                </Stack>
              </Box>
            </Collapse>
          </Grid>
          <Grid item xs={6}>
            <Typography className={styles.summary}>Профессионализм</Typography>
            <Stack className={styles.details}>
              <div className={styles.circle} style={{ left: "-6px" }}></div>
              <Typography
                className={styles.details_text}
                sx={{ textAlign: "right" }}
              >
                Проводим тщательный отбор сотрудников, постоянно повышаем
                квалификацию, стимулируем личностный и профессиональный рост.
                Профессионализм работников — основа стабильности и благополучия
                компании, а также причина повторных обращений наших клиентов.
              </Typography>
              <Image
                src="/professionalism.jpg"
                alt="Профессионализм"
                width="303"
                height="249"
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography className={styles.summary}>
              КОМПЛЕКСНЫЙ ПОДХОД
            </Typography>

            <Stack
              className={styles.details}
              sx={{
                left: "-100px",
              }}
            >
              <div className={styles.circle} style={{ right: "-6px" }}></div>
              <Image
                src="/approach.jpg"
                alt="КОМПЛЕКСНЫЙ ПОДХОД"
                width="303"
                height="249"
              />
              <Typography className={styles.details_text}>
                Все системы жизнеобеспечения здания связаны между собой,
                вмешиваясь в одну из них, важно понимать, как это отразится на
                остальных. Наши специалисты знают, чему следует уделить особое
                внимание при интеграции систем.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography className={styles.summary}>
              ПРОЗРАЧНОЕ ПАРТНЕРСТВО
            </Typography>
            <Stack className={styles.details}>
              <div className={styles.circle} style={{ left: "-6px" }}></div>
              <Typography
                className={styles.details_text}
                sx={{ textAlign: "right" }}
              >
                На этапе переговоров предоставляем полную информацию о составе
                необходимых работ и услуг, который впоследствии не
                увеличивается. Мы не занижаем объемы работ, чтобы показать
                «привлекательные» низкие цены.
              </Typography>
              <Image
                src="/partnership.jpg"
                alt="ПРОЗРАЧНОЕ ПАРТНЕРСТВО"
                width="303"
                height="249"
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
