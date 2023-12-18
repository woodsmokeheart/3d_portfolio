import React from "react";
import css from "./CurvedTextComponent.module.scss";
import cn from "classnames";

const CurvedTextComponent = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.curvedTextContainer}>
        <img src="https://img.icons8.com/clouds/100/w.png" alt="w" />
        <img src="https://img.icons8.com/clouds/100/e.png" alt="e" />
        <img src="https://img.icons8.com/clouds/100/l.png" alt="l" />
        <img src="https://img.icons8.com/clouds/100/c.png" alt="c" />
        <img src="https://img.icons8.com/clouds/100/o.png" alt="o" />
        <img src="https://img.icons8.com/clouds/100/m.png" alt="m" />
        <img src="https://img.icons8.com/clouds/100/e.png" alt="e" />
      </div>
    </div>
  );
};

export default CurvedTextComponent;
