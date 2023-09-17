import Watch from "@/models/watch";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
    const { title } = params

    await connectMongoDB()

    const watch = await Watch.findOne({ title })
    return NextResponse.json({ watch }, { status: 200 })
}