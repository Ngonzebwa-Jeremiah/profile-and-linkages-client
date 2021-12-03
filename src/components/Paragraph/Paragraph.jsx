import React from "react";
import ParagraphCss from "./Paragraph.module.css";

export function Paragraph({ text }) {
  return (
    <div className={ParagraphCss.paragraph}>
      <p>{text}</p>
    </div>
  );
}

export function ParagraphBasic({ text }) {
  return (
    <div className="w-75 mx-4 text-secondary">
      <p>{text}</p>
    </div>
  );
}
