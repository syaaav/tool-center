import { Box, Grid, Typography, Stack } from "@mui/material";
import styles from "../styles/Benefits.module.scss";

export default function Principles() {
  return (
    <div className={styles.benefits}>
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
          принципы нашей работы
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ color: "white" }}
        >
          <Grid item xs={6}>
            <Typography>ДОЛГОСРОЧНОЕ СОТРУДНИЧЕСТВО</Typography>
            <Stack direction="row" spacing={2}>
              <div>PHOTO</div>
              <Typography>
                Доверие в работе строится не только на честности, порядочности и
                взаимной ответственности, но и на желании длительного и
                перспективного сотрудничества, которым мы очень дорожим. Мы
                делаем все, чтобы наше сотрудничество не прекращалось.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography>КОМПЛЕКСНЫЙ ПОДХОД</Typography>
            <Stack direction="row" spacing={2}>
              <Typography>
                Все системы жизнеобеспечения здания связаны между собой,
                вмешиваясь в одну из них, важно понимать, как это отразится на
                остальных. Наши специалисты знают, чему следует уделить особое
                внимание при интеграции систем.
              </Typography>
              <div>PHOTO</div>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography>Профессионализм</Typography>
            <Stack direction="row" spacing={2}>
              <div>PHOTO</div>
              <Typography>
                Проводим тщательный отбор сотрудников, постоянно повышаем
                квалификацию, стимулируем личностный и профессиональный рост.
                Профессионализм работников — основа стабильности и благополучия
                компании, а также причина повторных обращений наших клиентов.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography>ПРОЗРАЧНОЕ ПАРТНЕРСТВО</Typography>
            <Stack direction="row" spacing={2}>
              <Typography>
                На этапе переговоров предоставляем полную информацию о составе
                необходимых работ и услуг, который впоследствии не
                увеличивается. Мы не занижаем объемы работ, чтобы показать
                «привлекательные» низкие цены.
              </Typography>
              <div>PHOTO</div>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
