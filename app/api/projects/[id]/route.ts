import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
  const { id: rawId } = await params; // Validate id is a number
  const id = Number(rawId);
  
 if (Number.isNaN(id)) {
   return NextResponse.json({ error: "Invalid project ID format" }, { status: 400 });
 }

// Fetch project by ID
 const project = getProjectById(id);
 if (!project) {
   return NextResponse.json({ error: "Project not found" }, { status: 404 });
 }

  return NextResponse.json(project);
}