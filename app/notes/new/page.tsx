"use client";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/NoteForm";
export default function NewNotePage() {
    const router = useRouter();
    async function handleCreate(data: { title: string; content: string }) {
        await fetch("/api/notes", {
            method: "Post",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify(data)
        });

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