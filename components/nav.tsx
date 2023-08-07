import { useState, useRef, useEffect } from "react";
import { Box, Tabs, Tab, Collapse, styled } from "@mui/material";
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
    fontFamily: "Helvetica Neue",
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

  const [styleHeader, setStyleHeader] = useState(null);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  useEffect(() => {
    let header = document.querySelector("#header");
    let burger = document.querySelector("#burger_menu");
    const trimHeight =
      document.querySelector("#main-page").clientHeight - header.clientHeight;
    window.onscroll = function () {
      if (window.scrollY > 1 && window.scrollY < trimHeight) {
        setStyleHeader(styles.navigation_start);
      } else if (window.scrollY >= trimHeight) {
        setStyleHeader(styles.navigation_moving);
      } else {
        setStyleHeader(styles.navigation_initial);
      }
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleOpenNav = (event: React.SyntheticEvent) => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <div className={`${styles.navigation} ${styleHeader}`} id="header">
      <Logo></Logo>

      <Box className={styles.navigation_wrapper}>
        <Box>
          <NavTabs
            value={value}
            onChange={handleChange}
            aria-label="navigation"
          >
            <Tab value="mainPage" label="Главная" href="#main-page" />
            <Tab value="about" label="О компании" href="#about" />
            <Tab value="services" label="Услуги" href="#services" />
            <Tab value="projects" label="Проекты" href="#projects" />
            <Tab value="clients" label="Заказчики" href="#clients" />
            <Tab value="contacts" label="Контакты" href="#contacts" />
          </NavTabs>
        </Box>
      </Box>
      <Box
        className={styles.burger_logo}
        id="burger_menu"
        onClick={handleOpenNav}
      >
        <svg
          width="32"
          height="19"
          viewBox="0 0 32 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_286_43)">
            <rect y="16" width="32" height="3" fill="white" />
            <rect width="32" height="3" fill="white" />
            <rect y="8" width="32" height="3" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_286_43">
              <rect width="32" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>

      {isBurgerMenu && (
        <Box
          className={`${styles.burger_menu_wrapper} ${styles.burger_menu_blur}`}
        >
          <Box sx={{ padding: "20%" }} className={styles.burger_menu}>
            <NavTabs
              value={value}
              onChange={handleChange}
              aria-label="navigation"
              sx={{ ".MuiTabs-flexContainer": { flexDirection: "column" } }}
            >
              <Tab value="mainPage" label="Главная" href="#main-page" />
              <Tab value="about" label="О компании" href="#about" />
              <Tab value="services" label="Услуги" href="#services" />
              <Tab value="projects" label="Проекты" href="#projects" />
              <Tab value="clients" label="Заказчики" href="#clients" />
              <Tab value="contacts" label="Контакты" href="#contacts" />
            </NavTabs>
          </Box>
        </Box>
      )}
    </div>
  );
}
