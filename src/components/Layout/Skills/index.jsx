import styles from "./style.module.css";
import React from "react";

function Skills() {
  const skills = [
    {
      name: "Frotend",
      content: [
        { name: "React", icon: "srg" },
        { name: "JavaScript", icon: "srg" },
        { name: "Next.JS 13", icon: "srg" },
        { name: "CSS3", icon: "srg" },
        { name: "Redux & Redux Toolkit", icon: "srg" },
        { name: "HTML5", icon: "srg" },
        { name: "Axios", icon: "srg" },
        { name: "Tailwind CSS", icon: "srg" },
      ],
    },
    {
      name: "Backend",
      content: [
        { name: "NodeJS", icon: "" },
        { name: "Express", icon: "srg" },
        { name: "MongoDB", icon: "srg" },
        { name: "SQL", icon: "srg" },
        { name: "Rest APIs", icon: "srg" },
        { name: "Bcrypt", icon: "srg" },
        { name: "Cors", icon: "srg" },
        { name: "JsonWebToken", icon: "srg" },
        { name: "Mongoose", icon: "srg" },
        { name: "JsonWebToken", icon: "srg" },
      ],
    },
    {
      name: "Soft",
      content: [
        { name: "Problem solver", icon: "sf" },
        { name: "Quick Learner", icon: "sf" },
        { name: "Multitasker", icon: "sf" },
        { name: "People person", icon: "sf" },
        { name: "Calm Under Pressure", icon: "sf" },
        { name: "Reliable", icon: "sf" },
        { name: "Adaptable", icon: "sf" },
      ],
    },
    {
      name: "Tools",
      content: [
        { name: "Git & GitHub", icon: "sf" },
        { name: "Jira", icon: "sf" },
        { name: "Figma", icon: "sf" },
        { name: "VSCode", icon: "sf" },
        { name: "PostMan", icon: "sf" },
        { name: "Netlify", icon: "sf" },
        { name: "Render", icon: "sf" },
      ],
    },
  ];
  return <div></div>;
}

export default Skills;
