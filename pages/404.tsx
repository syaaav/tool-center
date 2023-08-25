import React, { useState, useEffect } from "react";
import { Box, Collapse, Paper, Button } from "@mui/material";
import { useRouter } from "next/router";

const icon = (
  <Paper
    className="anim"
    elevation={4}
    sx={{
      height: "100vh",
      maxheight: "100vh",
      width: "100vw",
      backgroundColor: "#0e143c",
      backgroundImage: "url(/lines.png)",
      backgroundSize: "cover",
    }}
  ></Paper>
);

export default function NotFoundPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 200);
  }, []);

  return (
    <Box className="notFoundPage">
      <Collapse orientation="horizontal" in={checked} timeout={4500}>
        {icon}
      </Collapse>
      <Box className="notFoundPage_container">
        <p className="notFoundPage_number">404</p>
        <p className="notFoundPage_title">Такой страницы не существует...</p>
        <Button className="notFoundPage_button" onClick={() => router.back()}>
          Вернуться назад
        </Button>
      </Box>
    </Box>
  );
}
