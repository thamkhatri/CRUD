import Link from "next/link";
type NoteCardProps = {
    id: string;
    title: string;
    content: string;

};
export default function NoteCard({ id, title, content }: NoteCardProps) {
    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <div>
                    <Link href={`/notes/${id}`}>Edit</Link>
                    <button onClick={() => ("delete")} className="text-red-700">
                        delete
                    </button>
                </div>
            </div>
        </>
    );
}