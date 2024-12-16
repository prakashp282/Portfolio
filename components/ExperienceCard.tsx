import { useEffect, useState } from "react";
import { Experience } from "types/experience";

const Experience = ({
  id,
  company,
  position,
  description,
  duration,
}: Experience) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility after the component mounts
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  // Calculate the starting position (even IDs move right, odd IDs move left)
  const initialX = id % 2 === 0 ? "translate-x-5" : "-translate-x-5";
  const visibilityClass = visible
    ? "translate-x-0 opacity-100"
    : `${initialX} opacity-0`;

  return (
    <div
      className={`mb-6 md:mb-8 flex md:justify-between items-center w-full  ${
        id % 2 === 0 ? "md:flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 md:w-5/12"></div>

      <div
        className={`order-1 rounded-lg w-full ml-3 md:ml-0 py-2 px-2 bg-[#E2EFEF] dark:bg-carddark md:w-5/12 shadow-md duration-700 ease-in-out ${visibilityClass}`}
      >
        <h3 className="mb-2 font-medium text-lg md:text-xl">{company}</h3>
        <p className="text-sm font-medium">
          {position}
          <br />
          {duration}
        </p>

        <ul className="text-sm  mt-2 ml-4 list-disc">
          {description &&
            description.map((d, i) => (
              <li key={i} className="mb-0.5">
                {d}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
