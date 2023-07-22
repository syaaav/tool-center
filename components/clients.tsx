import styles from "../styles/Clients.module.scss";
import {
  Box,
  Typography,
  ImageList,
  Stack,
  ImageListItem,
} from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 4,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 2,
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    rows: 2,
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 4,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    rows: 2,
    cols: 2,
  },
];

export default function Clients() {
  return (
    <Box
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
          sx={{ width: "50%", height: "100%" }}
          variant="quilted"
          cols={7}
          rowHeight={52}
          gap={40}
        >
          {itemData.map((item) => (
            <ImageListItem
              className={styles.item}
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 52, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList
          sx={{ width: "50%", height: "100%" }}
          variant="quilted"
          cols={7}
          rowHeight={52}
          gap={40}
        >
          {itemData.map((item) => (
            <ImageListItem
              className={styles.item}
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 52, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
}
