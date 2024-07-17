import { IKImage } from "imagekitio-react";

import { cn } from "~/utils/cn";

interface IProjectProps extends React.ComponentPropsWithoutRef<"img"> {
  path: string;
  title: string;
  tech: string[];
  year?: string;
}

export function Project({
  path,
  year = "2024",
  title,
  tech,
  className,
}: IProjectProps) {
  return (
    <article className="w-full space-y-2">
      <div className="max-h-[373px] overflow-hidden">
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
          className={cn("h-[373px] object-cover object-[55%]", className)}
        ></IKImage>
      </div>

      <div className="px-5 w-full flex items-start justify-between font-semibold">
        <span className="block">{year}</span>
        <span className="block">{title}</span>
        <div className="block max-w-40 text-right text-balance">
          Tech used:{tech.join(", ")}
        </div>
      </div>
    </article>
  );
}
