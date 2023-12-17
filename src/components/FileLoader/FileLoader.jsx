import React from "react";
import css from "./FileLoader.module.scss";

const FileLoader = () => {
  return (
    <div className={css.loader}>
      <div className={css.animationWrapper}>
        <div className={css.letter}>P</div>
        <div className={css.letter}>O</div>
        <div className={css.letter}>R</div>
        <div className={css.letter}>T</div>
        <div className={css.letter}>F</div>
        <div className={css.letter}>O</div>
        <div className={css.letter}>L</div>
        <div className={css.letter}>I</div>
        <div className={css.letter}>O</div>
      </div>
      <span className={css.text}>waiting for download</span>
    </div>
  );
};

export default FileLoader;
