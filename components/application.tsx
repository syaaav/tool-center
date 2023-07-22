import styles from "../styles/Application.module.scss";
import { Box, Typography, Stack } from "@mui/material";

export default function Application() {
  return (
    <Box className={styles.application}>
      <Typography variant="h1" className={styles.title}>
        ОСТАВЬТЕ ЗАЯВКУ И МЫ С ВАМИ СВЯЖЕМСЯ
      </Typography>
      <Stack direction="row" className={styles.wrapper}>
        <Box>Заявка</Box>
        <svg
          width="785"
          height="693"
          viewBox="0 0 785 693"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_107)">
            <path
              d="M1.83081 913.417V185.119L310.7 1.83105L469.294 95.9701"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M944.659 913.417V186.644L627.749 4.604L469.294 95.9702L317.077 183.732"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M159.315 824.13V91.6729L317.077 183.732V915.492"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M469.294 95.9697V828.428"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M159.315 461.714L315.136 551.139L627.749 370.208L944.659 549.476"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M316.939 370.348V551.001L159.593 461.298L316.939 370.348Z"
              fill="white"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M105.111 221.859C105.111 234.337 94.8523 247.092 82.2367 250.143C69.6213 253.193 59.3625 245.706 59.3625 233.09C59.3625 220.473 69.6213 207.856 82.2367 204.806C94.9905 201.617 105.111 209.381 105.111 221.859Z"
              fill="#BB3633"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_107">
              <rect width="822" height="693" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Stack>
    </Box>
  );
}
