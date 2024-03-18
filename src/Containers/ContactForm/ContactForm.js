import React from "react";
import { useTranslation } from "react-i18next";

import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form
      action="https://formspree.io/f/xnqwwdwz"
      method="POST"
      className={styles.formContainer}
    >
      <h2>
        {t("contact")} {t("me")}
      </h2>
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
      <div className={styles["form-group"]}>
        <label htmlFor="exampleInputEmail1">{t("description")}</label>
        <div className={styles["form-group"]}>
          <textarea
            required
            rows="4"
            cols="60"
            className={styles.textArea}
          ></textarea>
        </div>
      </div>
      <CustomButton text={t("submit")} type="submit" />
    </form>
  );
};

export default ContactForm;
