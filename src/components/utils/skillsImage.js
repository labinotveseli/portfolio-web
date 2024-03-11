import html from "../../assets/images/svg/html.svg";
import css from "../../assets/images/svg/css.svg";
import javascript from "../../assets/images/svg/javascript.svg";
import nextJS from "../../assets/images/svg/nextJS.svg";
import react from "../../assets/images/svg/react.svg";
import typescript from "../../assets/images/svg/typescript.svg";
import bootstrap from "../../assets/images/svg/bootstrap.svg";
import mongoDB from "../../assets/images/svg/mongoDB.svg";
import tailwind from "../../assets/images/svg/tailwind.svg";
import firebase from "../../assets/images/svg/firebase.svg";
import git from "../../assets/images/svg/git.svg";
import github from "../../assets/images/svg/github.svg";
import materialui from "../../assets/images/svg/materialui.svg";
import wordpress from "../../assets/images/svg/wordpress.svg";
import figma from "../../assets/images/svg/figma.svg";
import zustand from "../../assets/images/svg/zustand.svg";
import chakraui from "../../assets/images/svg/chakraui.svg";
import expressjs from "../../assets/images/svg/expressjs.svg";
import nodejs from "../../assets/images/svg/nodejs.svg";
import redux from "../../assets/images/svg/redux.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "zustand":
      return zustand;
    case "css":
      return css;
    case "chakraui":
      return chakraui;
    case "expressjs":
      return expressjs;
    case "nodejs":
      return nodejs;
    case "redux":
      return redux;
    case "javascript":
      return javascript;
    case "nextjs":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "tailwind":
      return tailwind;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "github":
      return github;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "wordpress":
      return wordpress;
    case "figma":
      return figma;
    default:
      break;
  }
};
