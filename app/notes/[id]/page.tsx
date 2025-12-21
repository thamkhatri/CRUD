"use client";
import { dummyNotes } from "@/lib/dummynotes";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/NoteForm";
// type Props = {
//     params: {
//         id: string;
//     };
// }
const dummyNote = {
    title: "Learn Next.js",
    content: "App Router basics",
};
export default function EditNotePage() {
    const router = useRouter();
    // const note = dummyNotes.find((n) => n.id === params.id);
    // if (!note) return <p>NOte not found </p>;

    function handleUpdate(data: { title: string; content: string }) {
        console.log("data updates ", data);
        alert("ote updatesssss");
        router.push("/notes");
    }
    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Edit Note
            </h1>
            <NoteForm initialTitle={dummyNote.title}
                initialContent={dummyNote.content}
                onSubmit={handleUpdate} />

        </div>
    )

} 