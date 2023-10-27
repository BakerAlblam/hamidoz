import Watch from "@/models/watch";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";



export async function GET() {
    await connectMongoDB();
    const watches = await Watch.find({}).sort({ _id: -1}).limit(10);
    return NextResponse.json({ watches });
  }

  //hi