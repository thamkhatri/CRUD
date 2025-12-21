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
    // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     onSubmit({
    //         title: formData.get("title") as string,
    //         content: formData.get("content") as string,
    //     });

    return (

        <form
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                onSubmit({
                    title: formData.get("title") as string,
                    content: formData.get("content") as string,
                });
            }}
            className="space-y-4"
        >
            <input
                name="title"
                defaultValue={initialTitle}
                placeholder="Title"
                className="w-full border p-2 rounded"
            />

            <textarea
                name="content"
                defaultValue={initialContent}
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

        // <form onSubmit={handleSubmit} className="bg-amber-200">
        //     <input
        //         name="title"
        //         type="text"
        //         placeholder="text"
        //         required />
        //     <textarea name="content"
        //         placeholder="iddd" rows={5} required></textarea>
        //     <button className="bg-black text-white px-4 py-2 rounded">save note</button>
        // </form>
    )
}