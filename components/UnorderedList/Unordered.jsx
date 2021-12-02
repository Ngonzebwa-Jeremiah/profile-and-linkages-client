import listStyle from "./Unordered.module.css";

export default function Unordered({ listItem }) {
  return (
    <div className={listStyle.item}>
      <ul>
        {listItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
