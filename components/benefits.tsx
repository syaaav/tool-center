import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon1 from "../public/icon1";
import Icon2 from "../public/icon2";
import Icon3 from "../public/icon3";
import styles from "../styles/Benefits.module.scss";

export default function Benefits() {
  return (
    <div className={styles.benefits}>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "1188px",
          padding: "200px 0",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
          color: "#fff",
        }}
      >
        <Typography className={styles.title}>
          Meet2Code — это платформа для технических собеседований онлайн,
          которая помогает кандидатам показать свои реальные навыки, а команде
          найма упростить принятие решений.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "66px",
          }}
        >
          <Box className={styles.benefit}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Icon1></Icon1>
              <Typography className={styles.benefit_title}>
                Шаблоны интервью
              </Typography>
            </Box>
            <Typography className={styles.benefit_text}>
              Добавляйте задачи, вопросы и ответы, чтобы не тратить время на
              подготовку к интервью
            </Typography>
            <Typography className={styles.benefit_text}>
              Время = деньги
            </Typography>
          </Box>
          <Box className={styles.benefit}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Icon2></Icon2>
              <Typography className={styles.benefit_title}>
                Шаблоны интервью
              </Typography>
            </Box>
            <Typography className={styles.benefit_text}>
              Добавляйте задачи, вопросы и ответы, чтобы не тратить время на
              подготовку к интервью
            </Typography>
            <Typography className={styles.benefit_text}>
              Время = деньги
            </Typography>
          </Box>
          <Box className={styles.benefit}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Icon3></Icon3>
              <Typography className={styles.benefit_title}>
                Шаблоны интервью
              </Typography>
            </Box>
            <Typography className={styles.benefit_text}>
              Добавляйте задачи, вопросы и ответы, чтобы не тратить время на
              подготовку к интервью
            </Typography>
            <Typography className={styles.benefit_text}>
              Время = деньги
            </Typography>
          </Box>
        </Box>
        <Button variant="outlined" href="#" className={styles.button}>
          Посмотреть Все Функции
        </Button>
      </Box>
    </div>
  );
}
