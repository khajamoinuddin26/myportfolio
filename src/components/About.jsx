import React, { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <h2 className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          I'm a Computer Science and Engineering student at Vignan Institute of
          Technology and Science, passionate about technology and
          problem-solving. My fascination with computers began at a young age
          through video games, sparking my curiosity about how machines process
          complex tasks. During my Intermediate years at Sri Chaitanya Junior
          College, this interest deepened, leading me to pursue Computer
          Science. With a strong foundation from Yara International School
          (CBSE), I’m eager to innovate, build, and contribute to the tech
          world. Let’s create something amazing! 🚀
        </p>
        <br />
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          In a constant pursuit of sharing knowledge and fostering growth, I've
          organized numerous technical workshops, imparting valuable insights on
          technologies like Python and Artificial Intelligence to aspiring
          learners. With a commitment to personal development and a drive for
          making a positive impact within the tech community.
        </p>
        {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="-mb-4 fade-in flex mx-auto items-center justify-center transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.3)] rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2"
        >
          <AiOutlineCloudDownload />
          <a
            href="https://drive.google.com/uc?export=download&id=1533f79IxboFgiWpX58CqcFN-ODzEue61"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
