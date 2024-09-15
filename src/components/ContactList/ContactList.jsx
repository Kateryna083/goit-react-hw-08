import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

// import css from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
