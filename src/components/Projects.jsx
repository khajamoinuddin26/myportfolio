import React, { useEffect } from "react";
import Lungc from "../assets/projects/Lungs-rafiki.svg";
import Chatbot from "../assets/projects/Chat bot-rafiki (1).svg";
import ocr from "../assets/projects/scan-svgrepo-com.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const Projects = () => [
    {
      id: 1,
      src: Lungc,
      title: "Lung Cancer Detection",
      desc: "Lung cancer detection using Convolutional Neural Networks (CNNs) involves leveraging deep learning algorithms to analyze medical images such as CT scans.",
      code: "https://github.com/khajamoinuddin26/Lung-Cancer-Detection-using-CNN",
    },
    {
      id: 3,
      src: Chatbot,
      title: "ChatBot",
      desc: "Computer Science chatbot is an AI-powered conversational interface designed to assist users in understanding and discussing various computer science concepts and terms.",

      code: "https://github.com/khajamoinuddin26/Computer-Science-Bot",
    },
    {
      id: 4,
      src: ocr,
      title: "OCR",
      desc: "OCR (Optical Character Recognition) using PyTesseract involves leveraging the PyTesseract library in Python to extract text from images or scanned documents. ",

      code: "https://github.com/khajamoinuddin26/TextRecognition",
    },
  ];

  return (
    <div
      name="projects"
      className="h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </h2>
          <p className="py-2">Check out some of my work </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {Projects().map(({ id, src, desc, demo, code, title }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="relative rounded-lg h-72 overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={src}
                alt="Ai"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Bottom Section with Blur Effect */}
              <div className="absolute bottom-0 w-full h-20 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-b-lg before:absolute before:bottom-0 before:left-0 before:w-1/3 before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-transparent before:blur-lg after:absolute after:bottom-0 after:right-0 after:w-1/3 after:h-full after:bg-gradient-to-l after:from-blue-600 after:to-transparent after:blur-lg">
                {/* Code Button */}

                <button className="px-6 py-2 duration-200 hover:scale-105 bg-gradient-to-l text-black  from-purple-400 to-cyan-300 rounded-md">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
