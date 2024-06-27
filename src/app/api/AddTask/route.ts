import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import dbConnect from "@/helpers/Db";

export async function POST(req: Request) {
    const { title } = await req.json();
    
    try {
        await dbConnect();

        const newTask = await prisma.todo.create({
            data: {
                title
            }
        });

        return NextResponse.json({data: newTask}, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: "Failed to Add Task" }, { status: 500 })
    }
}