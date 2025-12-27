// import Link from "next/link";
// const notes = [
//     { id: "1", title: "Learn Next.js", content: "App Router basics" },
//     { id: "2", title: "CRUD Project", content: "Build notes app" },
// ];

// export default function NotePages() {
//     return (
//         <>
//             <div>
//                 <div>
//                     <h1>Notes</h1>
//                     <Link href="/notes/new"
//                         className="bg-black text-amber-50">Add notes</Link>
//                 </div>

//                 <div className="grid gap-4">
//                     {notes.map((note) => (
//                         <div key={note.id}
//                             className="border p-4 rounded shadow-sm">
//                             <h2>{note.title}  </h2>
//                             <p>{note.content}</p>
//                             <div className="flex gap-4">
//                                 <Link href={`/notes/${note.id}`}>Edit</Link>
//                                 <button className="text-red-600">
//                                     Delete
//                                 </button>
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }
"use client";
import NoteCard from "@/components/NoteCard";
import { useState, useEffect } from "react";
type Note = {
    id: string,
    title: string,
    content: string
};

export default function NotePages() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        async function fetchNotes() {
            const res = await fetch("/api/notes");
            const data = await res.json();
            setNotes(data);
            SetLoading(false);

        }
        fetchNotes();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        <main >
            <h1 className="text-2xl font-bold mb-4">NOtes</h1>
            {
                notes.length === 0 && <p>no new notes</p>
            }

            {notes.map((note) => (<NoteCard key={note.id} id={note.id} title={note.title}
                content={note.content}
            />))}
        </main>
    )
}