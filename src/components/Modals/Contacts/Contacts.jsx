import React from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./Contacts.module.scss";

const Contacts = ({ onClose, isContacts }) => {
  return (
    <ModalWrapper
      onClose={onClose}
      classNames={(css.wrapper, isContacts && css.isOpen)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="https://vk.com/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="74"
            height="74"
            src="https://img.icons8.com/3d-fluency/94/telegram.png"
            alt="telegram"
          />
        </a>
        <a href="https://vk.com/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="84"
            height="84"
            src="https://img.icons8.com/3d-fluency/94/vk-circled.png"
            alt="vk-circled"
          />
        </a>
        <a
          href="https://github.com/woodsmokeheart"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={css.icon}
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/github.png"
            alt="github"
          />
        </a>
        <a href="https://vk.com/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="84"
            height="84"
            src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
            alt="twitter-circled"
          />
        </a>
        <a href="https://vk.com/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="74"
            height="74"
            src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
            alt="facebook-circled"
          />
        </a>
      </div>
    </ModalWrapper>
  );
};

export default Contacts;
