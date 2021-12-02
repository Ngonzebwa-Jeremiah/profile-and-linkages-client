import liStyles from "./Tag.module.css";
export default function Tag({ text1, text2, text3 }) {
  return (
    <div>
      <ul className={liStyles.ulElement}>
        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">{text1}</li>
        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">{text2}</li>
        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">{text3}</li>

      </ul>
    </div>
  );
}
