"use client";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/NoteForm";
export default function NewNotePage() {
    const router = useRouter();
    function handleCreate(data: { title: string; content: string }) {
        console.log("created note", data);
        alert("notecreated ");
        router.push("/notes");
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="te">
                Add a note
            </h1>
            <NoteForm onSubmit={handleCreate} />
        </div>

    )
}