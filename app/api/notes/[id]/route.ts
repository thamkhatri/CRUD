// import { NextResponse } from "next/server";
// const notes = [
//     { id: "1", title: "Learn Next.js", content: "App Router basics" },
//     { id: "2", title: "CRUD Project", content: "Build notes app" },
// ];
// export async function GET(
//     req: Request,
//     { params }: { params: { id: string } }
// ) {
//     const note = notes.find((n) => n.id === params.id);


//     if (!note) {
//         return NextResponse.json({ message: "not found " }, { status: 404 });
//     }
//     return NextResponse.json(note);
// }
import { NextResponse } from "next/server";

let notes = [
    { id: "1", title: "Learn Next.js", content: "App Router basics" },
    { id: "2", title: "CRUD Project", content: "Build notes app" },
];

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const note = notes.find((n) => n.id === id);

    if (!note) {
        return NextResponse.json(
            { message: "Not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(note);
}
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

export async function PUT(req: Request,
    context: { params: Promise<{ id: string }> }
) {

    const { params } = context;
    const { id } = await params;
    const body = await req.json();
    notes = notes.map((note) =>
        (note.id === id ? { ...note, ...body } : note))
    return NextResponse.json({ message: "Updated", notes });
}
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {

    notes = notes.filter((note) => note.id !== params.id)
    return NextResponse.json({ message: "Deleted" });


}