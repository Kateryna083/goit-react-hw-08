import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filtersSlice";
import { FaSearch } from "react-icons/fa";

// import css from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <label htmlFor="searchbox">
        <FaSearch size="12" /> Find contacts by name
      </label>
      <input type="text" value={filterValue} onChange={handleChange}></input>
    </div>
  );
}
