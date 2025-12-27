
type NoteCardProps = {
    id: string;
    title: string;
    content: string;

};
export default function NoteCard({ id, title, content }: NoteCardProps) {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </>
    );
}