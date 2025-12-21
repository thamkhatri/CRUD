"use client";

import NoteForm from "@/components/NoteForm";

export default function Home() {
  function handleSubmit(data: { title: string; content: string }) {
    console.log("Form submitted:", data);
    alert("Check console!");
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test Note Form</h1>

      <NoteForm onSubmit={handleSubmit} />
    </main>
  );
}
