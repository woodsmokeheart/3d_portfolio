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
            width="94"
            height="94"
            src={
              isAboutMe
                ? "https://img.icons8.com/3d-fluency/94/opened-folder.png"
                : "https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png"
            }
            alt="folder"
          />

          <p className={css.title}>About Me</p>
        </button>
        <button className={css.button} onClick={setIsProjects}>
          <img
            width="94"
            height="94"
            src={
              isProjects
                ? "https://img.icons8.com/3d-fluency/94/opened-folder.png"
                : "https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png"
            }
            alt="folder"
          />
          <p className={css.title}>Projects</p>
        </button>
        <button className={css.button} onClick={setIsContacts}>
          <img
            width="94"
            height="94"
            src={
              isContacts
                ? "https://img.icons8.com/3d-fluency/94/opened-folder.png"
                : "https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png"
            }
            alt="folder"
          />
          <p className={css.title}>Contacts</p>
        </button>
      </>
    </div>
  );
};

export default Navbar;
