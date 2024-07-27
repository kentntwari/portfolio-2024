import type { MetaFunction } from "@remix-run/node";

import { IKContext, IKImage } from "imagekitio-react";

import { Project } from "~/components/Project";
import { NDASnapshot } from "~/components/NDASnapshot";

export const meta: MetaFunction = () => {
  return [
    { title: "Kent Ntwari's Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const projects = [
  {
    name: "Journey",
    year: "2024",
    path: "/portfolio/project-journey.png",
    tech: [
      "Remix",
      "React",
      "Typescript",
      "Kinde Auth",
      "Prisma ORM",
      "Supabase",
    ],
  },
  {
    name: "Boss Lady Digital",
    year: "2024",
    path: "/portfolio/project-bossladydigital.png",
    tech: [
      "Nuxt",
      "Vue",
      "Trpc",
      "Typescript",
      "Kinde Auth",
      "Prisma ORM",
      "Supabase",
    ],
  },
  {
    name: "Kanban",
    year: "2024",
    path: "/portfolio/project-kanban.png",
    tech: ["Nuxt", "Vue", "Typescript", "Kinde Auth", "Prisma ORM", "Neon DB"],
  },
] as const;

export default function Index() {
  return (
    <>
      <IKContext urlEndpoint="https://ik.imagekit.io/2rtor9l9w">
        <header className="mt-[5.5rem] max-w-[22.875rem] m-auto w-full grid grid-cols-4 gap-x-5">
          <span className="block relative -z-10 -ml-[2.7rem] row-start-1 row-end-1 col-start-2 col-end-[-1] bg-[#FFD5D2] w-[173px] h-24">
            <IKImage
              path="portfolio/closeup-2.png"
              transformation={[
                {
                  width: "0.9",
                  format: "webp",
                },
              ]}
              loading="lazy"
              lqip={{ active: true, quality: 10, blur: 10 }}
              className="absolute w-[124px] bottom-0 left-5"
            />
          </span>
          <div className="-mt-8 col-span-4 displayText">front</div>
          <div className="mt-3 -ml-6 col-start-3 displayText justify-end">
            end
          </div>
          <div className="max-w-[22rem] mt-3 col-span-4 displayText text-end">
            Develo
            <br /> per
          </div>
          <div className="w-[20.5rem] mt-16 flex justify-between items-start *:block *:max-w-[9.25rem] text-balance">
            <div>
              I specialize in Typescript/ <br />
              Javascript to build beautiful user interfaces that convert
            </div>
            <span>
              I specialize in Typescript/Javascript to build beautiful user
              interfaces that convert
            </span>
          </div>
          <span className="hidden mt-[4.375rem] col-start-1 uppercase">
            (scroll)
          </span>
        </header>
        <section id="experience" className="max-w-[22.875rem] mx-auto mt-40">
          <h2 className="text-3xl text-balance">
            With 3+ years of experience,
            <br /> I have worked on complex projects with multiple requirements
            ranging from designing the user interface to coding the full project
          </h2>
        </section>
        <section id="past-design" className="mt-28 space-y-2">
          <span className="block max-w-[22.875rem] m-auto">
            My most recent work experience included the design with Figma of the
            customer portal of Easy Advance, a brand of the canadian microloan
            fintech firm FINSANA
          </span>
          <div className="relative w-full h-[17rem] bg-[url(/img/gradient-bg-1.jpg)] bg-no-repeat overflow-hidden">
            <span className="block absolute -top-[12.5rem] left-20 scale-[74%] -rotate-[15deg]">
              <NDASnapshot />
            </span>
          </div>
          <div className="w-full max-w-[22.875rem] m-auto flex justify-between items-start > *:block">
            <span>2023</span>
            <span>Finsana</span>
            <span className="max-w-[174px] text-end text-balance">
              Tech used: Nuxt, Vue, Typeorm, MySQL, Microservices
            </span>
          </div>
        </section>
        <section id="projects" className="mt-28 space-y-10">
          <h2 className="max-w-[22.875rem] mx-auto text-3xl text-balance">
            Some of my open source projects
          </h2>

          <div className="space-y-16">
            <Project
              name="Journey"
              year="2024"
              path="/portfolio/project-journey.png"
              tech={[
                "Remix",
                "React",
                "Typescript",
                "Kinde Auth",
                "Prisma ORM",
                "Supabase",
              ]}
            />
            <Project
              name="Boss Lady Digital"
              year="2024"
              path="/portfolio/project-bossladydigital.png"
              tech={[
                "Nuxt",
                "Vue",
                "Trpc",
                "Typescript",
                "Kinde Auth",
                "Prisma ORM",
                "Supabase",
              ]}
            />
            <Project
              name="Kanban"
              year="2024"
              path="/portfolio/project-kanban.png"
              tech={[
                "Nuxt",
                "Vue",
                "Typescript",
                "Kinde Auth",
                "Prisma ORM",
                "Neon DB",
              ]}
              className="scale-150"
            />
          </div>
        </section>
        <section
          id="contact"
          className="max-w-[22.875rem] mx-auto mt-40 space-y-24"
        >
          <h2 className="text-3xl text-balance">
            The tech space is so wide and there’s always something better to
            make and novel to discover. I would love to have a conversation and
            see how we can make it work
          </h2>
          <div className="space-y-6">
            <div className="displayText">Let's talk</div>
            <div className="px-2 py-1 max-w-[17.5rem] min-h-16 bg-light/10 flex items-center text-2xl text-center rounded-full">
              ntwarikent@gmail.com
            </div>
          </div>
        </section>
      </IKContext>
    </>
  );
}
