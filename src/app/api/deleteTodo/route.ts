import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import dbConnect from "@/helpers/Db";

export async function DELETE(req: Request) {
    const { id } = await req.json();
    console.log("The id is", id);
    try {
        await dbConnect();

        const task = await prisma.todo.delete({
            where: {
                id
            }
        });
        console.log(task);
        return NextResponse.json({ data: "Task Deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: "Failed to Delete Task" }, { status: 500 })
    }
}