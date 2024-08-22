import css from "../SearchBox/";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className="css.box">
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </div>
  );
}
