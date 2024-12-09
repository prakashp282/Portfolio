import Image from "next/image";

import project1 from "public/projects/Pets.png";
import { Project } from "types/project";

export const projectText = {
  title: "Featured Projects",
  desc: "Projects that I have worked on.",
  seeMore: "See more",
};

export const projects: Project[] = [
  {
    title: "Pet Simulator",
    type: "Frontend",
    image: (
      <Image
        src={project1 ?? ""}
        sizes="100vw"
        fill
        alt="Pet Simulator"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A minimal, accessible and SEO-friendly VGA themed Pet Simulator game.",
    tags: [
      "Pet similulator",
      "game",
      "nodejs",
      "vanilla-javascript",
      "vercel ",
    ],
    liveUrl: "https://prakashp282.github.io/Pets/PetsUI/",
    codeUrl: "https://github.com/prakashp282/Pets",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/prakashp282/pets",
  },
];
