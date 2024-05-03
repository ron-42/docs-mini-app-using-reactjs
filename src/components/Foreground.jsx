import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Gleaming silver moon hangs amidst velvet night.",
      filesize: ".4 Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Cascading waterfall echoes through lush canyon, kissed by golden sunlight and serenading songbirds.",
      filesize: "1.9 Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Mystical fog blankets sleepy valley under starlit sky.",
      filesize: "1.38 Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Tangerine sunset spills across tranquil horizon.",
      filesize: ".9 Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <div>
      <div
        ref={ref}
        className="fixed z-[3] p-5 w-full h-full top-0 left-0 flex gap-10 flex-wrap"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
