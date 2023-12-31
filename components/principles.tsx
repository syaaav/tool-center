import { useRef, useEffect } from "react";
import { Box, Grid, Typography, Stack, Collapse } from "@mui/material";
import styles from "../styles/Principles.module.scss";
import { DividerLine } from "./about";
import dynamic from "next/dynamic";
import { Controller, Scene } from "scrollmagic";

interface MyComponentProps {}

const ScrollMagic = dynamic(
  () => import("scrollmagic/scrollmagic/uncompressed/ScrollMagic"),
  { ssr: false }
);

const Principles: React.FC<MyComponentProps> = () => {
  const principlesRef = useRef<HTMLDivElement>(null);
  const leftPrinciple1Ref = useRef<HTMLDivElement>(null);
  const leftPrinciple2Ref = useRef<HTMLDivElement>(null);
  const rightPrinciple1Ref = useRef<HTMLDivElement>(null);
  const rightPrinciple2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof ScrollMagic !== "undefined" &&
      principlesRef.current
    ) {
      const controller = new Controller();
      new Scene({
        triggerElement: principlesRef.current,
        triggerHook: 0.5,
      })
        .on("enter", () => {
          leftPrinciple1Ref.current?.classList.add("square-transition");
          leftPrinciple2Ref.current?.classList.add("square-transition");
          rightPrinciple1Ref.current?.classList.add("square-transition-right");
          rightPrinciple2Ref.current?.classList.add("square-transition-right");
        })
        .addTo(controller);
    }
  }, [principlesRef]);

  return (
    <div id="principles" className={styles.principles} ref={principlesRef}>
      <Box
        sx={{
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Stack>
          <Typography className={styles.accent_title}>принципы</Typography>
          <Typography className={styles.title}>нашей работы</Typography>
        </Stack>

        <Grid container rowSpacing={5} className={styles.grid}>
          <Grid item className={styles.grid_item} ref={leftPrinciple1Ref}>
            <Typography className={styles.summary} sx={{ textAlign: "right" }}>
              ДОЛГОСРОЧНОЕ СОТРУДНИЧЕСТВО
            </Typography>
            <Box>
              <Stack
                className={styles.details}
                sx={{
                  left: "-100px",
                }}
              >
                <div
                  className={`${styles.circle} ${styles.circle_rigth}`}
                ></div>
                <div className={styles.img_wrapper}>
                  <img
                    src="/cooperation.jpg"
                    alt="ДОЛГОСРОЧНОЕ СОТРУДНИЧЕСТВО"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    loading="lazy"
                  />
                </div>
                <Typography className={styles.details_text}>
                  Доверие в работе строится не только на честности, порядочности
                  и взаимной ответственности, но и на желании длительного и
                  перспективного сотрудничества, которым мы очень дорожим. Мы
                  делаем все, чтобы наше сотрудничество не прекращалось.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Box
            className={styles.divider}
            sx={{ width: "80%", marginRight: "auto" }}
          >
            <DividerLine />
            <p className={styles.divider_circle}></p>
          </Box>

          <Grid item className={styles.grid_item} ref={rightPrinciple1Ref}>
            <Typography className={styles.summary}>Профессионализм</Typography>
            <Stack className={`${styles.details} ${styles.details_reverse}`}>
              <div className={`${styles.circle} ${styles.circle_left}`}></div>
              <Typography
                className={styles.details_text}
                sx={{ textAlign: "right" }}
              >
                Проводим тщательный отбор сотрудников, постоянно повышаем
                квалификацию, стимулируем личностный и профессиональный рост.
                Профессионализм работников — основа стабильности и благополучия
                компании, а также причина повторных обращений наших клиентов.
              </Typography>
              <div className={styles.img_wrapper}>
                <img
                  src="/professionalism.jpg"
                  alt="Профессионализм"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  loading="lazy"
                />
              </div>
            </Stack>
          </Grid>

          <Box
            className={styles.divider}
            sx={{ width: "80%", marginRight: "auto" }}
          >
            <DividerLine />
            <p className={styles.divider_circle}></p>
          </Box>

          <Grid item className={styles.grid_item} ref={leftPrinciple2Ref}>
            <Typography
              className={styles.summary}
              sx={{
                textAlign: "end",
              }}
            >
              КОМПЛЕКСНЫЙ ПОДХОД
            </Typography>

            <Stack
              className={styles.details}
              sx={{
                left: "-100px",
              }}
            >
              <div className={`${styles.circle} ${styles.circle_rigth}`}></div>
              <div className={styles.img_wrapper}>
                <img
                  src="/approach.jpg"
                  alt="КОМПЛЕКСНЫЙ ПОДХОД"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  loading="lazy"
                />
              </div>
              <Typography className={styles.details_text}>
                Все системы жизнеобеспечения здания связаны между собой,
                вмешиваясь в одну из них, важно понимать, как это отразится на
                остальных. Наши специалисты знают, чему следует уделить особое
                внимание при интеграции систем.
              </Typography>
            </Stack>
          </Grid>

          <Box
            className={styles.divider}
            sx={{ width: "80%", marginRight: "auto" }}
          >
            <DividerLine />
            <p className={styles.divider_circle}></p>
          </Box>

          <Grid item className={styles.grid_item} ref={rightPrinciple2Ref}>
            <Typography className={styles.summary}>
              ПРОЗРАЧНОЕ ПАРТНЕРСТВО
            </Typography>
            <Stack className={`${styles.details} ${styles.details_reverse}`}>
              <div className={`${styles.circle} ${styles.circle_left}`}></div>
              <Typography
                className={styles.details_text}
                sx={{ textAlign: "right" }}
              >
                На этапе переговоров предоставляем полную информацию о составе
                необходимых работ и услуг, который впоследствии не
                увеличивается. Мы не занижаем объемы работ, чтобы показать
                «привлекательные» низкие цены.
              </Typography>
              <div className={styles.img_wrapper}>
                <img
                  src="/partnership.jpg"
                  alt="ПРОЗРАЧНОЕ ПАРТНЕРСТВО"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  loading="lazy"
                />
              </div>
            </Stack>
          </Grid>

          <Box
            className={styles.divider}
            sx={{ width: "80%", marginRight: "auto" }}
          >
            <DividerLine />
            <p className={styles.divider_circle}></p>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Principles;
