import React from "react";
import css from "./ModalWrapper.module.scss";
import cn from "classnames";

const ModalWrapper = ({ children, onClose, classNames }) => {
  return (
    <div className={css.overlay} onClick={onClose}>
      <div
        className={cn(css.wrapper, classNames)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
