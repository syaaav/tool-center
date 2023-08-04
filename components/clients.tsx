import React, { useState, useEffect } from "react";
import styles from "../styles/Clients.module.scss";
import {
  Box,
  Typography,
  ImageList,
  Stack,
  ImageListItem,
} from "@mui/material";
import { clients, clients2 } from "./data";

const Card = ({ isFlipped, frontImgSrc, backImgSrc, cols, rows }) => {
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    if (isFlipped && backImgSrc) {
      const intervalId = setInterval(() => {
        setIsFront(!isFront);
      }, 15000);

      return () => clearInterval(intervalId);
    }
  }, [isFlipped, backImgSrc, isFront]);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <ImageListItem
      onClick={handleClick}
      className={`${styles.card} ${
        backImgSrc && (isFront ? styles.flipped : styles.unflipped)
      }`}
      cols={cols || 1}
      rows={rows || 1}
    >
      <img
        src={frontImgSrc}
        alt={frontImgSrc}
        style={{ width: "80%", objectFit: "contain", padding: "20px" }}
        className={styles.front}
        loading="lazy"
      />
      {backImgSrc && (
        <img
          src={backImgSrc}
          alt={backImgSrc}
          style={{ width: "80%", objectFit: "contain", padding: "20px" }}
          className={styles.back}
          loading="lazy"
        />
      )}
    </ImageListItem>
  );
};

export default function Clients() {
  const [cards, setCards] = useState(
    clients.map((item) => {
      return {
        frontImgSrc: item.img.front,
        backImgSrc: item.img.back,
        isFlipped: !!item.img.back,
        cols: item.cols,
        rows: item.rows,
      };
    })
  );
  const [cards2, setCards2] = useState(
    clients2.map((item) => {
      return {
        frontImgSrc: item.img.front,
        backImgSrc: item.img.back,
        isFlipped: !!item.img.back,
        cols: item.cols,
        rows: item.rows,
      };
    })
  );

  return (
    <Box
      id="clients"
      className={styles.clients}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "9px",
      }}
    >
      <Typography className={styles.title}>ЗАКАЗЧИКИ</Typography>
      <Stack direction="row" sx={{ width: "100%", gap: "40px" }}>
        <ImageList
          className={styles.cardList}
          variant="quilted"
          cols={7}
          // rowHeight={52}
          gap={40}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              isFlipped={card.isFlipped}
              frontImgSrc={card.frontImgSrc}
              backImgSrc={card.backImgSrc}
              cols={card.cols}
              rows={card.rows}
            />
          ))}
        </ImageList>

        <ImageList
          className={styles.cardList}
          sx={{ height: "calc(100vh - 352px)" }}
          variant="quilted"
          cols={7}
          // rowHeight={52}
          gap={40}
        >
          {cards2.map((card, index) => (
            <Card
              key={index}
              isFlipped={card.isFlipped}
              frontImgSrc={card.frontImgSrc}
              backImgSrc={card.backImgSrc}
              cols={card.cols}
              rows={card.rows}
            />
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
}
