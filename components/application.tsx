import styles from "../styles/Application.module.scss";
import { styled } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import Footer from "./footer";
import { sendForm } from "../lib/sendForm";

const CssTextField = styled(TextField)({
  width: "100%",
  "&:invalid": {
    border: "red solid 2px",
  },
  "& label": {
    color: "rgba(255, 255, 255, 0.60)",
  },
  "& label.Mui-focused": {
    color: "rgba(255, 255, 255)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(255, 255, 255, 0.60)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.60)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.60)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 255, 255)",
    },
  },
  "& .MuiInput-input": {
    color: "#ffffff",
    fontSize: "25px",
    fontWeight: "300",

    "&:before ": {
      borderBottom: "1 px solid #fff",
    },
  },
  "& .MuiInput-root:before": {
    borderBottom: "1px solid rgba(255, 255, 255, 0.60)",
  },
  "& .MuiInput-root:hover:not(.Mui-disabled):before": {
    borderBottom: "1px solid #ffffff",
  },
});

const CssButton = styled(Button)({
  padding: "15px 35px",
  border: "0.5px solid #0E143C",
  borderRadius: "0px",
  background: "rgba(192, 197, 228, 0.30)",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(10px)",
  textTransform: "none",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.60)",
  },
});

const Application = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Имя обязательно"),
    email: Yup.string()
      .required("Email обязателен")
      .email("Неверный формат почты"),
    number: Yup.number()
      .required("Номер телефона обязателен")
      .typeError("Введите корректный номер телефона (в формате 89001234567)")
      .positive()
      .min(
        70000000000,
        "Введите корректный номер телефона (в формате 89001234567)"
      )
      .max(
        89999999999,
        "Введите корректный номер телефона (в формате 89001234567)"
      ),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    await sendForm(data);
    // console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Box className={styles.application} id="divApplication">
      <Typography variant="h1" className={styles.title}>
        <span className={styles.title_transparent}>ОСТАВЬТЕ</span> ЗАЯВКУ <br />
        <span className={styles.title_transparent}>И МЫ С ВАМИ СВЯЖЕМСЯ</span>
      </Typography>
      <Stack direction="row" className={styles.wrapper}>
        <Box className={styles.form}>
          <Stack sx={{ width: "100%" }}>
            <Box>
              <CssTextField
                required
                id="fullname"
                name="fullname"
                label="Введите Ваше ФИО"
                variant="standard"
                fullWidth
                margin="dense"
                {...register("fullname")}
                error={errors.fullname ? true : false}
              />
              <Typography fontSize="12px" color="rgba(255, 255, 255, 1)">
                {errors.fullname?.message}
              </Typography>
            </Box>
            <Box>
              <CssTextField
                required
                id="email"
                name="email"
                label="Email"
                variant="standard"
                fullWidth
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography fontSize="12px" color="rgba(255, 255, 255, 1)">
                {errors.email?.message}
              </Typography>
            </Box>
            <Box>
              <CssTextField
                required
                id="number"
                name="number"
                label="Номер телефона"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                variant="standard"
                fullWidth
                margin="dense"
                {...register("number")}
                error={errors.number ? true : false}
              />
              <Typography fontSize="12px" color="rgba(255, 255, 255, 1)">
                {errors.number?.message}
              </Typography>
            </Box>
          </Stack>

          <Box className={styles.button}>
            <CssButton
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Оставить заявку
            </CssButton>
          </Box>
        </Box>
        <Box className={styles.svg_wrapper}>
          <svg
            width="785"
            height="693"
            viewBox="0 0 785 693"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_59_107)">
              <path
                d="M1.83081 913.417V185.119L310.7 1.83105L469.294 95.9701"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M944.659 913.417V186.644L627.749 4.604L469.294 95.9702L317.077 183.732"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M159.315 824.13V91.6729L317.077 183.732V915.492"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M469.294 95.9697V828.428"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M159.315 461.714L315.136 551.139L627.749 370.208L944.659 549.476"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M316.939 370.348V551.001L159.593 461.298L316.939 370.348Z"
                fill="white"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        </Box>
      </Stack>
      <Footer></Footer>
    </Box>
  );
};

export default Application;
