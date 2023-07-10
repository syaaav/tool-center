import styles from "../styles/Header.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Mouse from "../public/mouse";
import Image from "next/image";
import display from "../public/display.png";
import Link from "@mui/material/Link";
import Arrow from "../public/arrow";

export default function Header() {
  return (
    <div className={styles.header}>
      <Box
        sx={{
          position: "relative",
          padding: "50px 0px",
          display: "grid",
          gridTemplateColumns: "1.25fr 2fr",
          justifyItems: "center",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            background:
              "linear-gradient(141.35deg, transparent 19.82%, #102347 65.75%)",
            boxShadow: "0px 4px 88px rgba(0, 0, 0, 0.34)",
            overflow: "hidden",
            transform: "skewY(-15deg)",
            transformOrigin: "0% 0% 0",
          }}
        />
        <Box
          sx={{
            paddingLeft: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "9px",
            zIndex: "1",
          }}
        >
          <Typography variant="h1" className={styles.title}>
            Комуницирование для IT-специалистов стало еще проще!
          </Typography>
          <Typography variant="h5" className={styles.text}>
            Мы предлагаем удобную систему для проведения, хранения и управления
            техническими собеседованиями
          </Typography>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Button variant="contained" href="#" className={styles.button}>
              Попробовать бесплатно
            </Button>
            <Box
              sx={{
                position: "absolute",
                bottom: "-40px",
                right: "-20px",
              }}
            >
              <Mouse />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "0 7% 0 10px",
          }}
        >
          <Image src={display} alt="display" loading="lazy" />
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
        <Link href="#" className={styles.link}>
          {"Узнать больше"}
        </Link>
        <Box className={styles.arrow}>
          <Arrow />
        </Box>
      </Box>
    </div>
  );
}
