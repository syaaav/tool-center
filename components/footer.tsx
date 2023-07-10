import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import styles from "../styles/Footer.module.scss";
import WhatsApp from "../public/whatsapp";
import GitHub from "../public/github";
import Instagram from "../public/instagram";
import VK from "../public/vk";
import Email from "../public/email";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <WhatsApp />
          <GitHub />
          <Instagram />
          <VK />
        </Box>

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
          <Link href="#" className={styles.text} underline="always">
            {"Политика конфиденциальности"}
          </Link>
          <Link href="#" className={styles.text} underline="always">
            {"Пользовательское соглашение"}
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "15px",
          }}
        >
          <Typography className={styles.text}>Задать вопрос:</Typography>
          <Box
            sx={{
              padding: "16px",
              backgroundColor: "#182533",
              borderRadius: "4px",
              color: "#fff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Typography className={styles.text}>
              Email: 11lfybzh@gmail.com
            </Typography>
            <Email />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
