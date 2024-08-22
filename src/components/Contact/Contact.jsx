import { HiUser } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div>
      <p>
        <HiUser />
        {name}
      </p>
      <p>
        <AiFillPhone />
        {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
