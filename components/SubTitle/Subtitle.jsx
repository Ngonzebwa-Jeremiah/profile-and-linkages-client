import titleStyles from "./Subtitle.module.css";

export default function Subtitle({ text }) {
  return (
    <div className={titleStyles.textStyle}>
      <p>{text}</p>
    </div>
  );
}
