import { useState } from "react";
import { Box, Tabs, Tab, styled } from "@mui/material";
import styles from "../styles/Nav.module.scss";
import Logo from "../public/logo";

const NavTabs = styled(Tabs)({
  minHeight: "35px",
  borderBottom: "1px solid #fff",
  backgroundColor: "transparent",
  color: "#fff",

  "& .MuiTabs-flexContainer": {
    gap: "50px",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#fff",
  },
  "& .MuiTab-root": {
    minHeight: "35px",
    padding: "10px",
    textTransform: "none",
    color: "rgba(255, 255, 255, 0.7)",
  },
  "& .MuiTab-root.Mui-selected": {
    color: "#fff",
    fontWeight: "500",
  },
});

export default function Nav() {
  const [value, setValue] = useState("mainPage");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={styles.navigation}>
      <Logo></Logo>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          backgroundColor: "transparent",
        }}
      >
        <Box>
          <NavTabs
            value={value}
            onChange={handleChange}
            aria-label="navigation"
          >
            <Tab value="mainPage" label="Главная" />
            <Tab value="about" label="О компании" />
            <Tab value="services" label="Услуги" />
            <Tab value="projects" label="Проекты" />
            <Tab value="clients" label="Заказчики" />
            <Tab value="contacts" label="Контакты" />
          </NavTabs>
        </Box>
      </Box>
    </div>
  );
}
