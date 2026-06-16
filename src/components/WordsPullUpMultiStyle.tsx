"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Segment = { text: string; className?: string };

export default function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const words = segments.flatMap((seg) =>
    seg.text.split(" ").map((word) => ({ word, className: seg.className }))
  );

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((item, i) => (
        <span key={i} className="mr-[0.25em] overflow-hidden">
          <motion.span
            className={`relative inline-block ${item.className ?? ""}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
