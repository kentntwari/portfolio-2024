import type { MetaFunction } from "@remix-run/node";

import { IKContext, IKImage } from "imagekitio-react";

import React, { useRef } from "react";

import { Project } from "~/components/Project";
import { NDASnapshot } from "~/components/NDASnapshot";
import * as Animate from "~/components/Animate";

export const meta: MetaFunction = () => {
  return [
    { title: "Kent Ntwari's Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const experienceRef = useRef(null);
  const pitchRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const pastDesignRef = useRef(null);

  return (
    <Animate.FadeInOut
      targetRefs={[experienceRef, headerRef, pitchRef, contactRef]}
    >
      <IKContext urlEndpoint="https://ik.imagekit.io/2rtor9l9w">
        <header
          ref={headerRef}
          className="m-auto sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] w-full max-w-[22.875rem] sm:container grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5"
        >
          <span className="block relative sm:top-1.5 md:top-5 xl:top-6 2xl:top-9 sm:left-24 md:-left-11 lg:left-2 xl:left-8 2xl:left-20 -z-10 sm:z-10 -ml-[2.7rem] sm:ml-0 row-start-1 sm:row-start-2 xl:row-start-1 row-end-1 sm:row-end-auto col-start-2 sm:col-start-1 md:col-start-4 xl:col-start-8 col-end-[-1]  bg-[#FFD5D2] w-[173px] md:w-[187px] h-24 md:h-[120px]">
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
              className="absolute w-[124px] md:w-[164px] bottom-0 left-5 md:left-0"
            />
          </span>
          <div className="-mt-8 sm:mt-0 md:ml-[3.125rem] lg:ml-0 col-span-4 lg:col-start-1 displayText sm:self-end">
            front
          </div>
          <div className="mt-3 sm:mt-6 md:mt-12 lg:mt-8 -ml-6 sm:-ml-9 md:-ml-11 lg:-ml-7 xl:ml-0 col-start-3 md:col-start-6 lg:col-start-7 xl:col-start-10 xl:col-end-13 sm:row-start-2 xl:row-start-1 displayText justify-end xl:justify-self-end">
            end
          </div>
          <div className="block sm:hidden max-w-[22rem] mt-3 col-span-4 displayText text-end">
            Develo
            <br /> per
          </div>
          <div className="hidden sm:block max-w-[22rem] sm:max-w-fit mt-3 sm:mt-6 md:mt-12 lg:mt-8 2xl:mt-10 col-span-4 md:col-start-auto xl:col-start-3 lg:col-span-12 xl:col-span-9 md:row-start-3 displayText justify-self-end md:justify-self-start lg:justify-self-end xl:justify-self-start">
            Developer
          </div>
          <div className="w-[20.5rem] md:w-[446px] lg:w-[634px] mt-14 sm:mt-[7.5rem] xl:mt-48 md:row-start-4 flex justify-between items-start *:block *:max-w-[9.25rem] md:*:max-w-[12.25rem] lg:*:max-w-[16.5rem] text-balance">
            <div>
              I specialize in Typescript/ Javascript to build beautiful user
              interfaces that convert
            </div>
            <span>
              I’m currently looking for a position where my skills can add value
              to the business
            </span>
          </div>
          <span className="mt-[4.375rem] sm:mt-[7.5rem] xl:mt-48 col-start-1 sm:col-start-4 md:col-start-8 lg:col-start-12 sm:col-end-5 md:col-end-9 lg:col-end-13 sm:row-start-4 sm:justify-self-end uppercase">
            (scroll)
          </span>
        </header>
        <section
          ref={experienceRef}
          id="experience"
          className="mt-60 sm:mt-80 md:mt-[22.5rem] xl:mt-[30rem] sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] grid grid-cols-1 lg:grid-cols-12 lg:gap-x-5"
        >
          <div className="hidden lg:block lg:col-start-1 w-6 h-6 bg-light"></div>
          <h2 className="lg:relative lg:-top-2 lg:max-w-[42.5rem] xl:max-w-[64rem] lg:col-span-10 lg:col-start-3 2xl:col-start-4 lg:justify-self-end 2xl:justify-self-start font-normal text-3xl sm:text-4xl xl:text-5xl text-balance">
            With 3+ years of experience,
            <br /> I have worked on complex projects with multiple requirements
            ranging from designing the user interface to coding the full project{" "}
          </h2>
        </section>
        <Animate.FadeInOut
          targetRefs={[pastDesignRef]}
          offset={["start start", "end start"]}
          opacity={[1, 1, 1, 0]}
        >
          <section
            id="past-design"
            ref={pastDesignRef}
            className="mt-32 sm:mt-60 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] flex xl:grid flex-col xl:grid-cols-12 gap-2 xl:gap-5"
          >
            <span className="block description sm:px-5 xl:col-start-1 xl:col-span-3 xl:max-w-[17.75rem]">
              My most recent work experience included the design with Figma of
              the customer portal of Easy Advance, a brand of the canadian
              microloan fintech firm Finsana
            </span>
            <div className="xl:col-start-4 xl:col-span-9 w-full flex flex-col gap-2">
              <div className="relative w-full h-[17rem] sm:h-[427px] bg-[url(/img/gradient-bg-1.jpg)] bg-no-repeat overflow-hidden">
                <span className="block absolute -top-[12.5rem] sm:-top-20 left-auto -right-20 sm:right-0 lg:right-32 scale-[74%] sm:scale-100 -rotate-[15deg]">
                  <NDASnapshot />
                </span>
              </div>
              <span className="sm:px-5 md:px-0 flex description justify-between items-center *:text-base sm:*:text-lg">
                <small>2023</small>
                <small className="max-w-64 text-end text-balance">
                  Designed with Figma
                </small>
              </span>
            </div>
          </section>
        </Animate.FadeInOut>

        <Animate.FadeInOut
          targetRefs={[projectsRef]}
          offset={["start end", "end start"]}
          opacity={[0, 1, 1, 0.5]}
        >
          <section
            id="projects"
            ref={projectsRef}
            className="mt-40 sm:mt-60 md:mt-[22.5rem] xl:mt-[30rem] md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] grid grid-cols-1 lg:grid-cols-12 gap-14 sm:gap-y-20 lg:gap-x-5"
          >
            <div className="hidden lg:block w-6 h-6 bg-light col-start-1"></div>
            <h2 className="lg:relative lg:-top-2 m-auto md:m-0 max-w-[22.875rem] lg:max-w-[42.5rem] xl:max-w-[64rem] sm:container md:w-full sm:px-5 md:px-0 col-start-1 lg:col-start-4 xl:col-start-3 2xl:col-start-4 lg:col-span-9 xl:col-span-10 xl:justify-self-end 2xl:justify-self-start font-normal text-3xl sm:text-4xl xl:text-5xl text-balance">
              Some of my open source projects
            </h2>
            <div className="space-y-20 lg:col-span-12 xl:col-start-4 xl:col-span-9 xl:justify-self-end">
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
                className="lg:relative lg:-top-5 2xl:-top-10"
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
                className="scale-150 md:scale-125 lg:relative lg:-top-20 2xl:-top-32"
              />
            </div>
          </section>
        </Animate.FadeInOut>

        <section
          id="pitch"
          ref={pitchRef}
          className="mt-60 sm:mt-80 md:mt-[22.5rem] xl:mt-[30rem] sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] lg:grid lg:grid-cols-12 lg:gap-x-5"
        >
          <div className="hidden lg:block w-6 h-6 bg-light col-start-1"></div>
          <h2 className="lg:relative lg:-top-2 lg:max-w-[42.5rem] xl:max-w-[64rem] lg:col-span-10 lg:col-start-3 lg:justify-self-end font-normal text-3xl sm:text-4xl xl:text-5xl text-balance">
            The tech space is so wide and there’s always something better to
            make and novel to discover. I would love to have a conversation and
            see how we can make it work
          </h2>
        </section>
        <section
          id="contact"
          ref={contactRef}
          className="mt-60 xl:mt-[22.5rem] sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] flex flex-col gap-32"
        >
          <div className="flex flex-col xl:flex-row lg:items-end xl:justify-between gap-6">
            <h2 className="font-medium displayText text-balance">
              <span className="block sm:hidden">Let's</span>
              <span className="block sm:hidden mt-2">Talk</span>
              <span className="hidden sm:block lg:text-end">Let's talk</span>
            </h2>
            <div className="px-2 py-1 w-[17.5rem] sm:w-[23rem] min-h-16 bg-light/10 flex justify-center items-center font-normal text-2xl sm:text-3xl text-center rounded-full">
              ntwarikent@gmail.com
            </div>
          </div>
        </section>
      </IKContext>
    </Animate.FadeInOut>
  );
}
