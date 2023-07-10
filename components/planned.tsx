import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styles from "../styles/Planned.module.scss";

export default function Planned() {
  return (
    <div className={styles.planned}>
      <Box
        sx={{
          maxWidth: "407px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "calc(28px + 12 * (100vw / 1920))",
            lineHeight: "50px",
            color: "#fff",
          }}
        >
          Оформи подписку и получи неограниченное пользование
        </Typography>
        <Button variant="contained" href="#" className={styles.button}>
          Попробовать бесплатно
        </Button>
      </Box>

      <Box className={styles.list}>
        <Typography className={styles.list_title}>
          Премущества открываемые с подпиской:
        </Typography>
        <List>
          <ListItem className={styles.item}>
            <ListItemText className={styles.point} />
            <ListItemText primary={"Неограниченное количество пользователей"} />
          </ListItem>
          <ListItem className={styles.item}>
            <ListItemText className={styles.point} />
            <ListItemText primary={"Брендирование"} />
          </ListItem>
          <ListItem className={styles.item}>
            <ListItemText className={styles.point} />
            <ListItemText primary={"Экспортирование отчетов"} />
          </ListItem>
          <ListItem className={styles.item}>
            <ListItemText className={styles.point} />
            <ListItemText primary={"Доступ к API"} />
          </ListItem>
          <ListItem className={styles.item}>
            <ListItemText className={styles.point} />
            <ListItemText primary={"Видеозвонок с 4+ и более участниками"} />
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
