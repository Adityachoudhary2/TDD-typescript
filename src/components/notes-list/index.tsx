import { useEffect, useState } from "react";
import axios from "axios";

type Note = {
  id: number;
  title: string;
  desc: string;
};
type notes = Note[];

const NoteList = () => {
  const [notes, setNotes] = useState<notes | null>(null);
  useEffect(() => {
    axios.get("notes-list").then((response) => {
      const { data } = response;
      const { notes } = data;
      console.log(notes);
      setNotes(notes);
    });
  }, []);

  if (notes === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} data-testid="notes-list-item">
            <h3>{note.title}</h3>
            <p>{note.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NoteList;
