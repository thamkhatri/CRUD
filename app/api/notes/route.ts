// import { NextResponse } from "next/server";
// import { dummyNotes } from "@/lib/dummyNotes";

// export async function GET() {
//     return NextResponse.json(dummyNotes);
// }
// export async function POST(req: Request) {
//     const body = await req.json();
//     const newNote = {
//         id: Date.now().toString(),
//         title: body.title,
//         content: body.content,
//     };
//     dummyNotes.push(newNote);
//     return NextResponse.json(newNote, { status: 201 });


// }
import { NextResponse } from "next/server";

// Temporary in-memory storage (for learning)
let notes: {
    id: string;
    title: string;
    content: string;
}[] = [];

// GET /api/notes → read all notes
export async function GET() {
    return NextResponse.json(notes);
}

// POST /api/notes → create a new note
export async function POST(req: Request) {
    const body = await req.json();

    const newNote = {
        id: Date.now().toString(),
        title: body.title,
        content: body.content,
    };

    notes.push(newNote);

    return NextResponse.json(newNote, { status: 201 });
}
