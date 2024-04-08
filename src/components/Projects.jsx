import React,{useEffect} from 'react'
import Lungc from '../assets/projects/lungcancer.png'
import Chatbot from '../assets/projects/chatbot.png'
import ocr from '../assets/projects/ocr.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Lungc,
      desc: "Lung cancer detection using Convolutional Neural Networks (CNNs) involves leveraging deep learning algorithms to analyze medical images such as CT scans.",
      code: "https://github.com/khajamoinuddin26/Lung-Cancer-Detection-using-CNN"
    },
    {
      id: 3,
      src: Chatbot,
      desc: "Computer Science chatbot is an AI-powered conversational interface designed to assist users in understanding and discussing various computer science concepts and terms.",
      
      code: "https://github.com/khajamoinuddin26/Computer-Science-Bot"
    },
    {
      id: 4,
      src: ocr,
      desc: "OCR (Optical Character Recognition) using PyTesseract involves leveraging the PyTesseract library in Python to extract text from images or scanned documents. ",
      
      code: "https://github.com/khajamoinuddin26/TextRecognition"
    },
    
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' style={{ objectFit: 'cover', width: '100%', height: '30%' }} />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects