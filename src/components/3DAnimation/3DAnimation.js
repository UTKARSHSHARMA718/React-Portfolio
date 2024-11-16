import React from "react";
import style from "./3DAnimation.module.css";
import aws from "../../Assets/Images/3d-animation-assets/aws.png";
import react from "../../Assets/Images/3d-animation-assets/react.png";
import node from "../../Assets/Images/3d-animation-assets/nodejs.png";
import express from "../../Assets/Images/3d-animation-assets/express.png";
import next from "../../Assets/Images/3d-animation-assets/nextjs-icon.png";
import nest from "../../Assets/Images/3d-animation-assets/nestjs.png";
import electron from "../../Assets/Images/3d-animation-assets/electron.png";
import java from "../../Assets/Images/3d-animation-assets/java.png";
import docker from "../../Assets/Images/3d-animation-assets/docker.png";
import { useTranslation } from "react-i18next";

const Animation = () => {
  const ITEMS = [
    { img: aws, position: 1, name: "Aws cloud service" },
    { img: react, position: 2, name: "React Js" },
    { img: docker, position: 3, name: "Docker" },
    { img: node, position: 4, name: "Node Js" },
    { img: express, position: 5, name: "Express Js" },
    { img: electron, position: 6, name: "Electron Js" },
    { img: java, position: 7, name: "Java" },
    { img: nest, position: 8, name: "Nest Js" },
    { img: next, position: 9, name: "Next Js" },
  ];
  const { t } = useTranslation();


  return (
    <>
      <div className={style.banner}>
        <div className={style.slider} style={{ "--quantity": ITEMS.length }}>
          {ITEMS?.map((item) => {
            return (
              <div
                key={item?.img}
                className={style.item}
                style={{ "--position": item.position }}
              >
                <img
                  src={item?.img}
                  alt="artifacs"
                  className={style.artifact}
                  title={item.name}
                />
              </div>
            );
          })}
        </div>
        <div className={style.content}>
          <h1 data-content={`${t("utkarsh")} ${t("sharma")}`}>{t("utkarsh")} {t("sharma")}</h1>
          <div className={style.model}></div>
        </div>
      </div>
    </>
  );
};

export default Animation;
