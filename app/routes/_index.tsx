import type { MetaFunction } from "@remix-run/node";

import { IKContext, IKImage } from "imagekitio-react";

import { Project } from "~/components/Project";

export const meta: MetaFunction = () => {
  return [
    { title: "Kent Ntwari's Portfolio - Front End Web Developer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="px-5 text-5xl space-y-16">
        <h1 className="space-y-16">
          <span
            className="block ml-[66px] text-ghost-light-maroon"
            style={{ lineHeight: "0px" }}
          >
            Front End
          </span>
          <span
            className="block ml-10 text-ghost-light-maroon"
            style={{ lineHeight: "0px" }}
          >
            Web
          </span>
          <span
            className="block ml-6 text-very-light-maroon"
            style={{ lineHeight: "0px" }}
          >
            Developer
          </span>
        </h1>

        <div className="grid grid-cols-[repeat(24px_1fr)] gap-x-2 gap-y-3">
          <span className="block col-span-2 text-base">
            I specialize in Typescript/Javascript to build beautiful user
            interfaces that convert
          </span>
          <div className="row-start-2 col-start-1 mt-1 w-6 h-6 bg-very-dark-maroon opacity-20"></div>
          <span className="block row-start-2 col-start-2 text-base">
            I’m currently looking for a position where my skills can add value
            to the business
          </span>
        </div>
      </header>

      <section id="experience" className="px-5">
        <h2 className="max-w-[350px] text-2xl">
          With 3+ years of experience, I have worked on complex projects with
          multiple requirements ranging from designing the user interface to
          coding the full project{" "}
        </h2>
      </section>

      <section id="projects" className="space-y-6">
        <h2 className="px-5 text-2xl">Some of my recent projects</h2>
        <IKContext urlEndpoint="https://ik.imagekit.io/2rtor9l9w">
          <Project
            path="/portfolio/project-journey.png"
            title="Journey"
            tech={[
              "Remix",
              "React",
              "Typescript",
              "KindeAuth",
              "Prisma ORM",
              "Supabase",
            ]}
          />
          <Project
            path="/portfolio/project-bossladydigital.png"
            title="Boss Lady Digital"
            tech={[
              "Nuxt",
              "Vue",
              "Trpc",
              "KindeAuth",
              "Prisma ORM",
              "Postgres",
            ]}
            className="object-[60%]"
          />

          <Project
            path="/portfolio/project-kanban.png"
            title="Kanban"
            tech={[
              "Nuxt",
              "Vue",
              "Typescript",
              "KindeAuth",
              "Prisma ORM",
              "Postgres",
            ]}
            className="object-[35%] scale-[1.35] overflow-hidden"
          />
        </IKContext>
      </section>

      <section id="contact" className="px-5 space-y-16">
        <div className="flex gap-2">
          <div className="mt-1 w-6 h-6 bg-very-dark-maroon opacity-20"></div>
          <h2 className="max-w-[320px] text-2xl">
            The tech space is so wide and there’s always something better to
            make and novel to discover or hone. I would love to have a
            conversation and see how we can make it work
          </h2>
        </div>
        <div className="space-y-12">
          <p
            className="font-bold text-[86px] text-ghost-light-maroon tracking-[1.5px] text-nowrap"
            style={{ lineHeight: "0px" }}
          >
            Let's talk
          </p>
          <button className="w-[296px] h-16 px-2 py-1 bg-ghost-light-maroon/5 text-[#918EA4] rounded-full">
            ntwarikent@gmail.com
          </button>
        </div>
      </section>
    </>
  );
}
