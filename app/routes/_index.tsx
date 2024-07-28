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

export default function Index() {
  return (
    <>
      <IKContext urlEndpoint="https://ik.imagekit.io/2rtor9l9w">
        <header className="mt-[5.5rem] lg:mt-24 max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-full m-auto w-full grid grid-cols-4 3xl:grid-cols-12 gap-x-5">
          <span className="block relative sm:top-1.5 4xl:top-0.5 4xl:-right-6 -z-10 -ml-[2.7rem] sm:ml-0 row-start-1 row-end-1 col-start-2 sm:col-start-3 3xl:col-start-7 col-end-[-1] sm:col-end-5 2xl:col-end-4 3xl:col-end-10 bg-[#FFD5D2] w-[173px] lg:w-[187px] h-24 lg:h-[110px] 3xl:h-[120px] sm:justify-self-end 2xl:justify-self-start 3xl:justify-self-end">
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
              className="absolute w-[124px] lg:w-[144px] 4xl:w-[164px] bottom-0 left-5"
            />
          </span>
          <div className="-mt-8 sm:mt-0 col-span-4 sm:row-start-1 sm:col-start-1 displayText sm:self-end">
            front
          </div>
          <div className="mt-3 sm:mt-6 lg:mt-5 xl:mt-8 2xl:mt-0 -ml-6 sm:ml-4 lg:-ml-5 col-start-3 3xl:col-start-10 2xl:col-end-5 3xl:col-end-13 2xl:row-start-1 displayText justify-end 2xl:justify-self-end 2xl:self-end">
            end
          </div>
          <div className="block sm:hidden max-w-[22rem] mt-3 col-span-4 displayText text-end">
            Develo
            <br /> per
          </div>
          <div className="hidden sm:block sm:mt-6 lg:mt-5 xl:mt-8 max-w-[22rem] sm:max-w-full mt-3 col-span-4 3xl:col-span-3 3xl:col-start-3 displayText text-end 3xl:text-start">
            Developer
          </div>
          <div className="w-[20.5rem] lg:w-[27.875rem] xl:w-[39.625rem] mt-16 sm:mt-24 lg:mt-[7.5rem] xl:mt-[15rem] 3xl:row-start-3 flex justify-between items-start *:block *:max-w-[9.25rem] lg:*:max-w-[10.875rem] xl:*:max-w-[16.5rem] text-balance">
            <div>
              I specialize in Typescript/ <br />
              Javascript to build beautiful user interfaces that convert
            </div>
            <span>
              I’m currently looking for a position where my skills can add value
              to the business
            </span>
          </div>
          <span className="hidden sm:block mt-[4.375rem] sm:mt-24 lg:mt-[7.5rem] xl:mt-[15rem] col-start-1 sm:col-start-4 3xl:col-start-12 sm:row-start-4 2xl:row-start-3 uppercase sm:text-end">
            (scroll)
          </span>
        </header>
        <section
          id="experience"
          className="max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-full mx-auto mt-40 sm:mt-56 xl:mt-60"
        >
          <div className="flex items-start justify-between w-full">
            <div className="hidden xl:block w-6 h-6 bg-light"></div>
            <h2 className="xl:relative xl:-top-4 w-full xl:max-w-[42.5rem] 3xl:max-w-[63.5rem] text-3xl sm:text-4xl 3xl:text-5xl text-balance">
              With 3+ years of experience,
              <br /> I have worked on complex projects with multiple
              requirements ranging from designing the user interface to coding
              the full project
            </h2>
          </div>
        </section>
        <section
          id="past-design"
          className="mt-28 sm:mt-36 lg:mt-40 xl:mt-60 space-y-2"
        >
          <span className="block max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-full m-auto">
            My most recent work experience included the design with Figma of the
            customer portal of Easy Advance, a brand of the canadian microloan
            fintech firm FINSANA
          </span>
          <div className="relative w-full lg:max-w-full h-[17rem] sm:h-[26.688rem] bg-[url(/img/gradient-bg-1.jpg)] bg-no-repeat overflow-hidden">
            <span className="block absolute -top-[12.5rem] sm:-top-[5rem] left-20 sm:left-72 3xl:left-auto 3xl:right-52 scale-[74%] sm:scale-100 -rotate-[15deg]">
              <NDASnapshot />
            </span>
          </div>
          <div className="w-full max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-full m-auto flex justify-between items-start > *:block">
            <span>2023</span>
            <span>Finsana</span>
            <span className="max-w-[10.875rem] sm:max-w-[13.25rem] lg:max-w-[16.625rem] 3xl:max-w-full text-end text-balance">
              Tech used: Nuxt, Vue, Typeorm, MySQL, Microservices
            </span>
          </div>
        </section>
        <section
          id="projects"
          className="mt-28 sm:mt-36 lg:mt-40 xl:mt-60 lg:max-w-full space-y-10 sm:space-y-14 xl:space-y-20"
        >
          <div className="flex items-start justify-between w-full">
            <div className="hidden xl:block w-6 h-6 bg-light"></div>
            <h2 className="xl:relative xl:-top-4 w-full m-auto xl:m-0 max-w-[22.875rem] sm:max-w-[37.5rem] xl:max-w-[42.5rem] 3xl:max-w-[63.5rem] text-3xl sm:text-4xl 3xl:text-5xl text-balance">
              Some of my open source projects
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-20 2xl:flex 2xl:flex-col 2xl:items-end">
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
              className="xl:relative xl:-top-20"
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
              className="scale-150 xl:scale-125 xl:relative xl:-top-20 2xl:-top-32"
            />
          </div>
        </section>
        <section
          id="contact"
          className="max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-full mx-auto mt-40 sm:mt-56 xl:mt-60 space-y-24 sm:space-y-36 lg:space-y-120"
        >
          <div className="flex items-start justify-between w-full">
            <div className="hidden xl:block w-6 h-6 bg-light"></div>
            <h2 className="xl:relative xl:-top-4 w-full xl:max-w-[42.5rem] 3xl:max-w-[63.5rem] text-3xl sm:text-4xl 3xl:text-5xl text-balance">
              The tech space is so wide and there’s always something better to
              make and novel to discover. I would love to have a conversation
              and see how we can make it work
            </h2>
          </div>

          <div className="space-y-6 xl:space-y-0 xl:flex xl:flex-col 3xl:flex-row xl:items-end xl:justify-between xl:gap-10">
            <div className="displayText">Let's talk</div>
            <div className="px-2 py-1 w-[17.5rem] sm:w-[23rem] min-h-16 bg-light/10 flex items-center text-2xl sm:text-3xl text-center rounded-full">
              ntwarikent@gmail.com
            </div>
          </div>
        </section>
      </IKContext>
    </>
  );
}
