import React from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./AboutMe.module.scss";

const AboutMe = ({ onClose, isAboutMe }) => {
  return (
    <ModalWrapper
      onClose={onClose}
      classNames={(css.wrapper, isAboutMe && css.isOpen)}
    >
      <div className={css.container}>
        <div className={css.header}>
          <div>
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/3d-fluency/94/user-male--v2.png"
              alt="user-male--v2"
            />
          </div>
          <h1 className={css.title}>About me</h1>
          <button className={css.btnClose} onClick={onClose}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/3d-fluency/188/delete-sign.png"
              alt="delete-sign"
            />
          </button>
        </div>
        <p className={css.description}>
          I am a developer with 3 years of experience. I started with, like most
          Landing Pages and ReactJS projects, now I'm working on a large-scale
          commercial project in which I'm running the WEB version alone using a
          hybrid bundle of ReactNative+ReactJS+TypeScript+NextJS.
          <br /> I actively use the APPOLO CLIENT, WYSIWYG TIPTAP (text editor),
          STORYBOOK (for component control and system design support). Stack:
          Html5, SCSS, JavaScript, TypeScript, ReactJS, React Native, REST API,
          APPOLO, Figma, Storybook, Git, Swagger. Briefly about everyday tasks:
          API connection, component layout (of course this is adaptive layout
          for all types of devices), component connection, working with logic,
          component optimization. Also, work with the backender to optimize
          fields.
          <br /> Briefly about general knowledge and skills: I understand how
          react-hooks are used. I know the React JS architecture and what
          firewalls are. I understand what a heap of memory is, how a garbage
          collector works and how not to fly into a cyclical dependence. I write
          code using YAGNI, KISS, DRY. If you can do without layering JS : with
          native tools and without compromising the architecture, I will do it.
          I understand how SSR works. I translated legacy to NEXT 13 myself. I
          work together with i18Next. <br />
          What about soft-skills? Sociable: constantly in touch with the team. I
          am punctual: I am never late for meetings and do not delay deadlines.
          I work remotely all the time, while always in touch and at my
          workplace. I adequately treat reasoned criticism of myself.
        </p>
      </div>
    </ModalWrapper>
  );
};

export default AboutMe;
