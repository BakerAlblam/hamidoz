import Watch from "@/models/watch";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const {title} = await request.json()
    await connectMongoDB()
    await Watch.create({title})
    return NextResponse.json({ message: "done"})
}

export async function GET() {
    await connectMongoDB();
    const watches = await Watch.find({});
    return NextResponse.json({ watches });
  }