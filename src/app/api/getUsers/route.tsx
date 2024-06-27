import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import dbConnect from "@/helpers/Db";
export async function GET(req: Request) {
    try {
        await dbConnect();

        const users = await prisma.todo.findMany();

        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: "Failed to Get Todos" }, { status: 500 })
    }
}