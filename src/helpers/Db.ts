export const dynamic = "force-dynamic";
import prisma from "../../prisma";
import { cookies } from 'next/headers'

const dbConnect = async () => {
    try {

        await prisma.$connect();
        const cookieStore = cookies()
        const theme = cookieStore.get('theme');
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed", error);
        throw new Error("Database connection failed");
    }
}

export default dbConnect;