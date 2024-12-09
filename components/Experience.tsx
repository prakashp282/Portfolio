import { MouseEventHandler, useState } from "react";

import ExperienceCard from "./ExperienceCard";

import { Education } from "types/education";
import { Experience } from "types/experience";
import { education, experience } from "contents/about";

interface Props {
  experienceData: Experience[];
  educationData: Education[];
}

export const ViewAll = ({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) => {
  return (
    <>
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        <button
          onClick={handleClick}
          className={`bg-violet-600 text-white px-4 ${
            title === "View All" ? "animate-bounce" : "animate-none"
          } py-1.5 rounded-md hover:shadow-xl transition-all`}
        >
          {title}
        </button>
      </div>
    </>
  );
};

const Experiences = () => {
  const experienceData = experience;
  const educationData = education;

  const [show, setShow] = useState("Experience");
  const [viewAll, setViewAll] = useState(false);

  const [experiences, setExperiences] = useState(
    [...experienceData].reverse() as Experience[]
  );
  const [educations, setEducations] = useState(
    [...educationData].reverse() as Education[]
  );

  return (
    <div id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Experience", "Education"].map((e, i) => (
          <button
            key={i}
            onClick={() => setShow(e)}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === e
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {experience.map((e, i) => (
            <ExperienceCard key={i} {...e} id={i} />
          ))}
        </div>
      </div>

      {(show === "Experience" ? experiences : educations).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </div>
  );
};

export default Experiences;
