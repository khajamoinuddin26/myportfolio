import React, { useEffect } from "react";
import html from "../assets/experience/html.png";
import javascript from "../assets/experience/javascript.png";
import node from "../assets/experience/node.png";
import java from "../assets/experience/java-logo.png";
import react from "../assets/experience/react.png";
import sql from "../assets/experience/sql.png";
import python from "../assets/experience/python.png";
import cpp from "../assets/experience/c++.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const techs = () => [
    {
      id: 9,
      scr: python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      scr: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 6,
      scr: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 1,
      scr: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      scr: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      scr: react,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      scr: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      scr: sql,
      title: "SQL",
      style: "shadow-blue-800",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full"
    >
      <div className="max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs().map(({ id, scr, title, style }) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              key={id}
              className={`shadow-md hover:shadow-2xl duration-500  py-2 rounded-lg ${style}`}
            >
              <img src={scr} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
