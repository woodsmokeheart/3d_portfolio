import React from "react";
import css from "./Navbar.module.scss";

const Navbar = ({
  isAboutMe,
  setIsAboutMe,
  isProjects,
  setIsProjects,
  isContacts,
  setIsContacts,
}) => {
  return (
    <div className={css.wrapper}>
      <>
        <button className={css.button} onClick={setIsAboutMe}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/clouds/100/a.png"
            alt="a"
          />
        </button>
        <button className={css.button} onClick={setIsProjects}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/clouds/100/p.png"
            alt="p"
          />
        </button>
        <button className={css.button} onClick={setIsContacts}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/clouds/100/c.png"
            alt="c"
          />
        </button>
      </>
    </div>
  );
};

export default Navbar;
