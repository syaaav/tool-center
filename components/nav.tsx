import { useState, useRef, useEffect } from "react";
import { Box, Tabs, Tab, Stack, styled } from "@mui/material";
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
  const [styleHeader, setStyleHeader] = useState(styles.navigation_initial);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  useEffect(() => {
    let header = document.querySelector("#header");
    const divs = document.querySelectorAll('div[id^="div"]');
    const navLinks = document.querySelectorAll("div div div a");
    function updateNav() {
      const currentPos = window.scrollY;
      divs.forEach((div) => {
        const divElement = div as HTMLElement;
        const divTop = divElement.offsetTop;
        const divHeight = divElement.clientHeight;
        if (
          currentPos >= divTop - header.clientHeight &&
          currentPos < divTop + divHeight
        ) {
          const currentLink = document.querySelector(
            `div div div a[href="#${div.id}"]`
          );
          const linkElement = currentLink as HTMLElement;
          setValue(linkElement?.dataset.value);
        }
      });
    }

    const trimHeight =
      document.querySelector("#divMain-page").clientHeight -
      header.clientHeight;

    window.onscroll = function () {
      if (window.scrollY > 1 && window.scrollY < trimHeight) {
        setStyleHeader(styles.navigation_start);
      } else if (window.scrollY >= trimHeight) {
        setStyleHeader(styles.navigation_moving);
      } else {
        setStyleHeader(styles.navigation_initial);
      }
      updateNav();
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
            <Tab
              data-value="mainPage"
              value="mainPage"
              label="Главная"
              href="#divMain-page"
            />
            <Tab
              data-value="about"
              value="about"
              label="О компании"
              href="#divAbout"
            />
            <Tab
              data-value="services"
              value="services"
              label="Услуги"
              href="#divServices"
            />
            <Tab
              data-value="projects"
              value="projects"
              label="Проекты"
              href="#divProjects"
            />
            <Tab
              data-value="clients"
              value="clients"
              label="Заказчики"
              href="#divClients"
            />
            <Tab
              data-value="application"
              value="application"
              label="Контакты"
              href="#divApplication"
            />
          </NavTabs>
        </Box>
      </Box>
      <Stack
        className={`${styles.burger_logo} ${
          isBurgerMenu && styles.burger_logo_animation
        }`}
        id="burger_menu"
        onClick={handleOpenNav}
        spacing={"5px"}
      >
        <span></span>
        <span></span>
        <span></span>
      </Stack>

      {isBurgerMenu && (
        <Box
          className={`${styles.burger_menu_wrapper} ${styles.burger_menu_blur}`}
        >
          <Box sx={{ padding: "20%" }} className={styles.burger_menu}>
            <NavTabs
              value={value}
              orientation="vertical"
              onChange={handleChange}
              aria-label="navigation"
              sx={{
                border: "none",
                ".MuiTabs-indicator": {
                  left: "0",
                  right: "auto",
                },
              }}
            >
              <Tab
                data-value="mainPage"
                value="mainPage"
                label="Главная"
                href="#divMain-page"
              />
              <Tab
                data-value="about"
                value="about"
                label="О компании"
                href="#divAbout"
              />
              <Tab
                data-value="services"
                value="services"
                label="Услуги"
                href="#divServices"
              />
              <Tab
                data-value="projects"
                value="projects"
                label="Проекты"
                href="#divProjects"
              />
              <Tab
                data-value="clients"
                value="clients"
                label="Заказчики"
                href="#divClients"
              />
              <Tab
                data-value="application"
                value="application"
                label="Контакты"
                href="#divApplication"
              />
            </NavTabs>
          </Box>
        </Box>
      )}
    </div>
  );
}
