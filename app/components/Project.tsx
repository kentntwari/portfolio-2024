import { IKImage } from "imagekitio-react";

import { cn } from "~/utils/cn";

interface IProjectProps extends React.ComponentPropsWithoutRef<"img"> {
  path: string;
  name: string;
  tech: string[];
  year?: string;
}

export function Project({
  path,
  year = "2024",
  name,
  tech,
  className,
}: IProjectProps) {
  return (
    <article key={name} className="w-full lg:w-fit space-y-2">
      <div className="max-h-[17rem] lg:max-h-[672px] overflow-hidden">
        <IKImage
          path={path}
          transformation={[
            {
              width: "0.7",
              crop: "at_max",
              format: "webp",
            },
          ]}
          loading="lazy"
          lqip={{ active: true, quality: 10, blur: 10 }}
          className={cn(
            "w-full h-[17rem] object-cover object-[50%]",
            className
          )}
        ></IKImage>
      </div>

      <div className="w-full max-w-[22.875rem] mx-auto flex items-start justify-between font-semibold">
        <span className="block">{year}</span>
        <span className="block">{name}</span>
        <div className="block max-w-40 md:max-w-[266px] text-right text-balance">
          Tech used: {tech.join(", ")}
        </div>
      </div>
    </article>
  );
}
