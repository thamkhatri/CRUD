"use client";
import { useState } from "react";
type NoteFormProps = {
    initialTitle?: string;
    initialContent?: string;
    onSubmit: (data: { title: string, content: string }) => void;
}
export default function NoteForm({
    initialTitle = "",
    initialContent = "",
    onSubmit,
}: NoteFormProps) {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onSubmit({ title: formData.get("title") as string, content: formData.get("cotent") as string });

    }
    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <input
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full border p-2 rounded"
            />

            <textarea
                value={content}
                name="content"
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                className="w-full border p-2 rounded"
                rows={5}
            />

            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
            >
                Save Note
            </button>
        </form>


    )
}