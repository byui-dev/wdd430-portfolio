import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
   const id  = Number(params.id); // Validate id is a number
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