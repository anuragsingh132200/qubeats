import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Resource from "@/models/Resource";

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
    const category = searchParams.get("category");
    const publishedParam = searchParams.get("published");
    const isPublished = parseBoolean(publishedParam);

    const query = {};

    if (category) {
      query.category = category;
    }

    if (isPublished !== null) {
      query.isPublished = isPublished;
    }

    await connectDB();
    const resources = await Resource.find(query).sort({ sortOrder: 1, createdAt: -1 });

    return NextResponse.json({ resources });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { category, title, description } = body;

    if (!category || !title || !description) {
      return NextResponse.json(
        { error: "Category, title, and description are required" },
        { status: 400 }
      );
    }

    const resourceData = {
      category,
      title: String(title).trim(),
      description: String(description).trim(),
      date: body.date ? String(body.date).trim() : "",
      link: body.link ? String(body.link).trim() : "",
      sortOrder: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
      isPublished: typeof body.isPublished === "boolean" ? body.isPublished : true,
      updatedAt: new Date(),
    };

    await connectDB();
    const resource = await Resource.create(resourceData);

    return NextResponse.json({ resource }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create resource" },
      { status: 500 }
    );
  }
}
