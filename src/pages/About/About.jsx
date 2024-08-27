import { useEffect, useState } from "react";
import './About.css';
const About = () => {
  const ppPercent = 90;
  const phPercent = 90;
  const ilPercent = 95;
  const inPercent = 90;
  const xdPercent = 80;
  const motionPercent = 80;

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 350) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  console.log(isScrolling);

  return (
    <>
      <div className="hero bg-dark-color min-h-[80vh]">
        <div className="hero-content lg:gap-60 aboutContainer">
          
          <div className="text-text-color aboutTitle">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            {/* My skills */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                quibusdam.
              </p>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mt-2">Premium Pro</h3>

                {/*Premium Pro line */}
                <div
                  className="bg-primary-color py-1 pl-1 h-4 rounded-full flex justify-start items-center"
                  style={{ width: `${100}%` }}
                >
                  <div
                    className={`bg-light-color h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isScrolling ? `${ppPercent}%` : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mt-2">Motion Gtaphics</h3>

                {/*Motion Graphics line */}
                <div
                  className="bg-primary-color py-1 pl-1 h-4 rounded-full flex justify-start items-center"
                  style={{ width: `${100}%` }}
                >
                  <div
                    className={`bg-light-color h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isScrolling ? `${motionPercent}%` : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mt-2">Adobe Ptotoshop</h3>
                {/*Photoshop line */}
                <div
                  className="bg-primary-color py-1 pl-1 h-4 rounded-full flex justify-start items-center"
                  style={{ width: `${100}%` }}
                >
                  <div
                    className={`bg-light-color h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isScrolling ? `${phPercent}%` : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mt-2">
                  Adobe Itlustrator
                </h3>
                {/*Illustrator line */}
                <div
                  className="bg-primary-color py-1 pl-1 h-4 rounded-full flex justify-start items-center"
                  style={{ width: `${100}%` }}
                >
                  <div
                    className={`bg-light-color h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isScrolling ? `${ilPercent}%` : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mt-2">Adobe ItDesign</h3>

                {/*Indesign line */}
                <div
                  className="bg-primary-color py-1 pl-1 h-4 rounded-full flex justify-start items-center"
                  style={{ width: `${100}%` }}
                >
                  <div
                    className={`bg-light-color h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isScrolling ? `${inPercent}%` : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mt-2">Atobe XD</h3>
                {/*Adobe XD line */}
                <div
                  className="bg-primary-color py-1 pl-1 h-4 rounded-full flex justify-start items-center"
                  style={{ width: `${100}%` }}
                >
                  <div
                    className={`bg-light-color h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isScrolling ? `${xdPercent}%` : "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Image With Circle Text */}
          <div className="relative">
            <img src="https://i.ibb.co/5YywmzK/about.jpg" className="w-[40rem] shadow-2xl " />
            <div className="textCircle absolute -bottom-28 -left-28 bg-circle-bg h-60 w-60 rounded-full flex justify-center items-center hover:shadow-[0_0_3rem_var(--primary-color)]">
              <h3 className="text-xl text-primary-color font-semibold text-center -rotate-[25deg]">
                <span className="text-6xl">6+</span> <br /> Years of Experience
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
