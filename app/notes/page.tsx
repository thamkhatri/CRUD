import Link from "next/link";
const notes = [
    { id: "1", title: "Learn Next.js", content: "App Router basics" },
    { id: "2", title: "CRUD Project", content: "Build notes app" },
];

export default function NotePages() {
    return (
        <>
            <div>
                <div>
                    <h1>Notes</h1>
                    <Link href="/notes/new"
                        className="bg-black text-amber-50">Add notes</Link>
                </div>

                <div className="grid gap-4">
                    {notes.map((note) => (
                        <div key={note.id}
                            className="border p-4 rounded shadow-sm">
                            <h2>{note.title}  </h2>
                            <p>{note.content}</p>
                            <div className="flex gap-4">
                                <Link href={`/notes/${note.id}`}>Edit</Link>
                                <button className="text-red-600">
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}