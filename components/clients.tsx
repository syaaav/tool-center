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
    img: "/Huawei.png",
    title: "Breakfast",
    rows: 4,
    cols: 3,
  },
  {
    img: "/ББДО.png",
    title: "Burger",
    rows: 2,
    cols: 4,
  },
  {
    img: "/ДОК5.png",
    title: "Camera",
    rows: 2,
    cols: 2,
  },
  {
    img: "/Инэк.png",
    title: "Coffee",
    rows: 2,
    cols: 2,
  },
  {
    img: "/Инком.png",
    title: "Hats",
    rows: 2,
    cols: 4,
  },
  {
    img: "/Минобороны.png",
    img2: "/ПочтаБанк.png",
    title: "Honey",
    author: "@arwinneil",
    rows: 4,
    cols: 3,
  },
  {
    img: "/КОЛЕСО.png",
    img2: "/Новатэк.png",
    title: "Basketball",
    rows: 2,
    cols: 2,
  },
  {
    img: "/МСХ.png",
    title: "Fern",
    rows: 2,
    cols: 2,
  },
];
const itemData2 = [
  {
    img: "/Медси.png",
    img2: "/ЕМГ.png",
    title: "Breakfast",
    rows: 4,
    cols: 3,
  },
  {
    img: "/Перекресток.png",
    title: "Burger",
    rows: 2,
    cols: 4,
  },
  {
    img: "/ОЗ31.png",
    title: "Camera",
    rows: 2,
    cols: 2,
  },
  {
    img: "/псн.png",
    title: "Coffee",
    rows: 2,
    cols: 2,
  },
  {
    img: "/РВМКапитал.png",
    title: "Hats",
    rows: 2,
    cols: 4,
  },
  {
    img: "/ПСБ.png",
    title: "Honey",
    author: "@arwinneil",
    rows: 4,
    cols: 3,
  },
  {
    img: "/Туламаш.png",
    title: "Basketball",
    rows: 2,
    cols: 2,
  },
  {
    img: "/УКZeppelin.png",
    title: "Fern",
    rows: 2,
    cols: 2,
  },
];

export default function Clients() {
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
                style={{ objectFit: "contain" }}
                className={styles.img}
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
          {itemData2.map((item) => (
            <ImageListItem
              className={styles.item}
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                style={{ objectFit: "contain" }}
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
