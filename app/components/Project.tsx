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
    <article className="w-full lg:w-fit space-y-2">
      <div className="max-h-[17rem] sm:max-h-[32rem] xl:max-h-[35.75rem] overflow-hidden">
        <IKImage
          path={path}
          transformation={[
            {
              width: "0.7",
              crop: "at_max",
              format: "webp",
            },
          ]}
          lqip={{ active: true, quality: 10, blur: 10 }}
          className={cn("w-full object-cover object-[50%]", className)}
        ></IKImage>
      </div>

      <div className="description sm:px-5 md:px-0 flex items-start justify-between">
        <span className="block">{year}</span>
        <span className="block max-w-[3.75rem]">{name}</span>
        <div className="block max-w-[10.75rem] sm:max-w-[13.25rem] md:max-w-64 text-right text-balance">
          Tech used: {tech.join(", ")}
        </div>
      </div>
    </article>
  );
}
