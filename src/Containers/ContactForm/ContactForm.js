import React from "react";
import { useTranslation } from "react-i18next";

import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./ContactForm.module.css";

const ContactForm = ({ customContainerStyles, customHeadingStyles }) => {
  const { t } = useTranslation();

  return (
    <form
      action="https://formspree.io/f/xnqwwdwz"
      method="POST"
      className={[styles.formContainer, customContainerStyles].join(" ")}
    >
      <h2 className={customHeadingStyles}>{t('sendMeAnEmail')}</h2>
      <div className={styles.inputFieldSContainer}>
        <div className={styles.nameAndEmailContainer}>
          <div className={styles["form-group"]}>
            <label htmlFor="exampleInputEmail1">{t("name")}</label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder={`${t("enter")} ${t("name")}`}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="exampleInputEmail1">
              {t("email")} {t("address")}
            </label>
            <div className={styles.fullWidth}>
              <input
                required
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={`${t("enter")} ${t("email")}`}
              />
              <small id="emailHelp" className={styles.bottomText}>
                {t("email_helper_info")}
              </small>
            </div>
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="exampleInputEmail1">{t("description")}</label>
          <div className={styles["form-group"]}>
            <textarea
              name="message"
              required
              rows="4"
              cols="60"
              className={styles.textArea}
            ></textarea>
          </div>
        </div>
      </div>
      <CustomButton text={t("submit")} type="submit" customStyles={styles.btn} />
    </form>
  );
};

export default ContactForm;
