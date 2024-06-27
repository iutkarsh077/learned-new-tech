import prisma from "../../prisma";

const dbConnect = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed", error);
        throw new Error("Database connection failed");
    }
}

export default dbConnect;