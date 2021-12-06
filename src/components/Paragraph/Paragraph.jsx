import React from "react";
import  "./Paragraph.css";

export function Paragraph({ text }) {
  return (
    <div className="paragraph">
      <p>{text}</p>
    </div>
  );
}

export function ParagraphBasic({ text }) {
  return (
    <div className="w-90 mx-4 text-secondary">
      <p>{text}</p>
    </div>
  );
}
