import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import characterPng from "public/character.png";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { abouttext, abouttext2, abouttext3 } from "contents/about";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const { theme } = useTheme();

  const eduRef = useRef<HTMLDivElement>(null);

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    aboutSection ? onSectionChange!("who am i?") : onSectionChange!("");
  }, [aboutSection, onSectionChange]);

  return (
    <div
      ref={sectionRef}
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section id="whoami" className="section">
        <RoughNotationGroup>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color={`${
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
              }`}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">Who am I?</h2>
            </RoughNotation>
          </div>

          <div className="md:grid grid-rows-3 lg:grid-rows-3 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]">
              <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
                <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
                  <Image
                    src={characterPng}
                    width={1177}
                    height={1374}
                    priority
                    id="character-illustration"
                    aria-label=" character illustration"
                    alt="character illustration"
                  />
                </div>
              </div>
            </div>

            <p
              className="
                col-start-2 col-end-5
                row-start-4 row-end-6 
                lg:row-start-1 lg:row-end-4 
                lg:col-start-3 lg:col-end-6 
                lg:ml-8 lg:mt-auto about-intro"
            >
              {abouttext}
              <br />
              <br />
              {abouttext2}
              <br />
              <br />

              {abouttext3}
              {/* <br />
              <br />

              {abouttext4} */}
            </p>

            {/* <div>
              <p className="edu-bg my-4">Here is my educational background.</p>
              {education.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div> */}
          </div>
        </RoughNotationGroup>
      </section>
    </div>
  );
};

export default AboutSection;
