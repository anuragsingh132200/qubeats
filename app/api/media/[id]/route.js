import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import MediaPress from "@/models/MediaPress";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Media id is required" }, { status: 400 });
    }

    await connectDB();
    const item = await MediaPress.findById(id);

    if (!item) {
      return NextResponse.json({ error: "Media item not found" }, { status: 404 });
    }

    return NextResponse.json({ item });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch media item" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Media id is required" }, { status: 400 });
    }

    const body = await request.json();
    const updates = {};

    if (body.date !== undefined) updates.date = String(body.date).trim();
    if (body.source !== undefined) updates.source = String(body.source).trim();
    if (body.title !== undefined) updates.title = String(body.title).trim();
    if (body.description !== undefined) updates.description = String(body.description).trim();
    if (body.link !== undefined) updates.link = body.link ? String(body.link).trim() : "";
    if (body.sortOrder !== undefined) {
      updates.sortOrder = Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0;
    }
    if (body.isPublished !== undefined) {
      if (typeof body.isPublished !== "boolean") {
        return NextResponse.json(
          { error: "isPublished must be a boolean" },
          { status: 400 }
        );
      }
      updates.isPublished = body.isPublished;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No valid fields to update" },
        { status: 400 }
      );
    }

    updates.updatedAt = new Date();

    await connectDB();
    const item = await MediaPress.findByIdAndUpdate(id, updates, { new: true });

    if (!item) {
      return NextResponse.json({ error: "Media item not found" }, { status: 404 });
    }

    return NextResponse.json({ item });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update media item" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Media id is required" }, { status: 400 });
    }

    await connectDB();
    const item = await MediaPress.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json({ error: "Media item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete media item" },
      { status: 500 }
    );
  }
}
