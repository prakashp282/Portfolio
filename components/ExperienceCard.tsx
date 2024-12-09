import { Experience } from "types/experience";

const Experience = ({
  id,
  company,
  position,
  description,
  duration,
}: Experience) => {
  return (
    <div
      className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${"md:flex-row-reverse left-timeline"}`}
    >
      <div className="order-1 md:w-5/12"></div>

      <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4">
        <h3 className="mb-2 font-medium text-lg md:text-xl">{company}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {position} | {duration}
        </p>
        <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
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
