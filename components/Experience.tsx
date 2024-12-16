import { MouseEventHandler, useState } from "react";

import ExperienceCard from "./ExperienceCard";
import { Experience } from "types/experience";
import { education, experience } from "contents/about";
import Button from "./Button";

interface Props {
  experienceData: Experience[];
  educationData: Experience[];
}

const Experiences = () => {
  const experienceData = experience;
  const educationData = education;

  const [category, setCategory] = useState("Experience");
  const [viewAll, setViewAll] = useState(false);

  const [experiences, setExperiences] = useState(
    [...experienceData].reverse() as Experience[]
  );
  const [educations, setEducations] = useState(
    [...educationData].reverse() as Experience[]
  );

  const ViewButton = (
    <div id="view-all" className="text-center -translate-y-10">
      <Button
        scrollTo={viewAll ? "about" : "experience"}
        title={viewAll ? "Okay, I got it" : "View more"}
        handleClick={() => setViewAll(!viewAll)}
        className={!viewAll ? "animate-bounce" : "animate-none"}
      />
    </div>
  );

  return (
    <div id="experience">
      <div className="w-4/5 mx-auto blur-xl z-20 h-16"></div>

      {ViewButton}

      {viewAll && (
        <>
          <h2 className="text-4xl text-center">{category}</h2>

          <div className="w-fit mx-auto  p-2 dark:bg-grey-800 rounded-md flex gap-2 items-center">
            {["Experience", "Education"].map((e, i) => (
              <Button
                // key={i}
                scrollTo="experience"
                handleClick={() => setCategory(e)}
                className={`py-2 px-4 rounded-md transition-colors ${
                  category === e
                    ? "bg-accent"
                    : "hover:bg-gray-100 hover:dark:bg-grey-900 opacity-50"
                }`}
                title={e}
              />
            ))}
          </div>

          <div className="lg:container sm:mx-4 lg:mx-auto">
            <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
              <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>
              {(category === "Experience" ? experiences : educations).map(
                (e, i) => (
                  // @ts-ignore
                  <ExperienceCard key={i} {...e} id={i} />
                )
              )}
            </div>
          </div>

          <div className="w-4/5 mx-auto blur-xl z-20 h-16"></div>

          {ViewButton}
        </>
      )}
    </div>
  );
};

export default Experiences;
