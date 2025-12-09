import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BannerSettings from "@/models/BannerSettings";

export async function GET() {
  try {
    await connectDB();
    const settings = await BannerSettings.getSettings();
    return NextResponse.json({ settings });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch banner settings" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { isVisible, content } = await request.json();

    if (typeof isVisible !== "boolean") {
      return NextResponse.json(
        { error: "isVisible must be a boolean" },
        { status: 400 }
      );
    }

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required and must be a string" },
        { status: 400 }
      );
    }

    await connectDB();
    let settings = await BannerSettings.findOne();

    if (!settings) {
      settings = await BannerSettings.create({ isVisible, content });
    } else {
      settings.isVisible = isVisible;
      settings.content = content.trim();
      settings.updatedAt = new Date();
      await settings.save();
    }

    return NextResponse.json({ settings });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update banner settings" },
      { status: 500 }
    );
  }
}

