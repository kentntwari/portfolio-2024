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
    <article className="w-full xl:w-[56rem] 3xl:w-[64rem] lg:w-fit space-y-2">
      <div className="max-h-[17rem] sm:max-h-[32rem] 3xl:max-h-[35.75rem] overflow-hidden">
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

      <div className="w-full max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-full mx-auto flex items-start justify-between font-medium">
        <span className="block">{year}</span>
        <span className="block">{name}</span>
        <div className="block max-w-40 sm:max-w-[13.25rem] lg:max-w-[16.625rem] 3xl:max-w-full text-right text-balance">
          Tech used: {tech.join(", ")}
        </div>
      </div>
    </article>
  );
}
