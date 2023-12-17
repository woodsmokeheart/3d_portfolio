import React from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./Projects.module.scss";

const Projects = ({ onClose, isProjects }) => {
  return (
    <ModalWrapper
      onClose={onClose}
      classNames={(css.wrapper, isProjects && css.isOpen)}
    >
      <div className={css.header}>
        <div>
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/3d-fluency/94/snail.png"
            alt="snail"
          />
        </div>
        <h1 className={css.title}>Projects</h1>
        <button className={css.btnClose} onClick={onClose}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/3d-fluency/188/delete-sign.png"
            alt="delete-sign"
          />
        </button>
      </div>
    </ModalWrapper>
  );
};

export default Projects;
