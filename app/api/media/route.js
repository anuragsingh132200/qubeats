import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import MediaPress from "@/models/MediaPress";

function parseBoolean(value) {
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  if (["true", "1", "yes"].includes(normalized)) return true;
  if (["false", "0", "no"].includes(normalized)) return false;
  return null;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedParam = searchParams.get("published");
    const isPublished = parseBoolean(publishedParam);

    const query = {};
    if (isPublished !== null) {
      query.isPublished = isPublished;
    }

    await connectDB();
    const items = await MediaPress.find(query).sort({ sortOrder: 1, createdAt: -1 });

    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch media items" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { date, source, title, description } = body;

    if (!date || !source || !title || !description) {
      return NextResponse.json(
        { error: "Date, source, title, and description are required" },
        { status: 400 }
      );
    }

    const itemData = {
      date: String(date).trim(),
      source: String(source).trim(),
      title: String(title).trim(),
      description: String(description).trim(),
      link: body.link ? String(body.link).trim() : "",
      sortOrder: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
      isPublished: typeof body.isPublished === "boolean" ? body.isPublished : true,
      updatedAt: new Date(),
    };

    await connectDB();
    const item = await MediaPress.create(itemData);

    return NextResponse.json({ item }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create media item" },
      { status: 500 }
    );
  }
}
