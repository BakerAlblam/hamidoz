import Watch from "@/models/watch";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";



export async function GET() {
    await connectMongoDB();
    const watches = await Watch.find({});
    return NextResponse.json({ watches });
  }