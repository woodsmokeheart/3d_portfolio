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
        <a href="https://t.me/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="60"
            height="60"
            src="https://img.icons8.com/3d-fluency/94/telegram.png"
            alt="telegram"
          />
        </a>
        <a href="https://vk.com/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="70"
            height="70"
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
            width="80"
            height="80"
            src="https://img.icons8.com/3d-fluency/94/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://twitter.com/my1ncognito"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={css.icon}
            width="70"
            height="70"
            src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
            alt="twitter-circled"
          />
        </a>
        <a href="https://vk.com/my1ncognito" target="_blank" rel="noreferrer">
          <img
            className={css.icon}
            width="60"
            height="60"
            src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
            alt="facebook-circled"
          />
        </a>
      </div>
    </ModalWrapper>
  );
};

export default Contacts;
