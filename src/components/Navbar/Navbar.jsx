import React from "react";
import css from './Navbar.module.scss'

const buttonsData = [
  {
    title: "About Me",
    src: "https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png",
    alt: "folder-invoices--v1",
    width: "94",
    height: "94",
  },
  {
    title: "Project",
    src: "https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png",
    alt: "folder-invoices--v1",
    width: "94",
    height: "94",
  },
  {
    title: "Contacts",
    src: "https://img.icons8.com/3d-fluency/94/folder-invoices--v1.png",
    alt: "folder-invoices--v1",
    width: "94",
    height: "94",
  },
];

const Navbar = () => {
  return (
    <div className={css.wrapper}>
      {buttonsData?.map((i, key) => {
        return (
          <button key={key} className={css.button}>
            <img
              width={i?.width}
              height={i?.height}
              src={i?.src}
              alt={i?.alt}
            />
            <p className={css.title}>
              {i?.title}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
