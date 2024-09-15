import { HiUser } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
// import css from "./Contact.module.css";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div>
      <div>
        <HiUser />
        <p>{item.name}</p>
      </div>
      <div>
        <AiFillPhone />
        <p>{item.number}</p>
      </div>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}
