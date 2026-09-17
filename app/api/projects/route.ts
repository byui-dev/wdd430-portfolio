import { NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

const ALLOWED_TYPES = ["opensource", "school"] as const;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") as
    | (typeof ALLOWED_TYPES)[number]
    | undefined;

  if (type && !ALLOWED_TYPES.includes(type)) {
    return NextResponse.json(
      { error: "Invalid project type - allowed: opensource, school" },
      { status: 400 },
    );
  }

  const projects = getProjects(type);
  return NextResponse.json(projects, {
    status: 200,
    headers: { "Cache-control": "public, max-age=60" },
  });
}
