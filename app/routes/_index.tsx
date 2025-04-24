import type { MetaFunction } from "@remix-run/node";

import { Copy } from "lucide-react";
import { IKContext, IKImage } from "imagekitio-react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

import React, { useRef } from "react";

import { Link } from "@remix-run/react";

import { Project } from "~/components/Project";
import { NDASnapshot } from "~/components/NDASnapshot";
import * as Animate from "~/components/Animate";

export const meta: MetaFunction = () => {
  return [
    { title: "Kent Ntwari Portfolio" },
    {
      name: "description",
      content:
        "Hi, My name is Kent and I am a front-end web developer based in Montreal, Canada.",
    },
  ];
};

export default function Index() {
  
  return (
<p className="text-center">Site in maintenance mode.</p>
  );
}
