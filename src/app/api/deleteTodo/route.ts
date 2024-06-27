import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import dbConnect from "@/helpers/Db";

export async function DELETE(req: Request) {
    const { id } = await req.json();
    console.log(id);
    try {
        await dbConnect();

        const task = await prisma.todo.delete({
            where: {
                id
            }
        });

        return NextResponse.json({ data: task }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: "Failed to Delete Task" }, { status: 500 })
    }
}