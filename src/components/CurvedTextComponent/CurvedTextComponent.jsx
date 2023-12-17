import React from "react";
import css from "./CurvedTextComponent.module.scss";
import cn from "classnames";

const CurvedTextComponent = () => {
  return (
    <div className={css.curvedTextContainer}>
      <p className={css.letter}>w</p>
      <p className={cn(css.secondChar, css.letter)}>e</p>
      <p className={cn(css.threeChar, css.letter)}>l</p>
      <p className={cn(css.fourChar, css.letter)}>c</p>
      <p className={cn(css.threeChar, css.letter)}>o</p>
      <p className={cn(css.secondChar, css.letter)}>m</p>
      <p className={css.letter}>e</p>
    </div>
  );
};

export default CurvedTextComponent;
