import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
   const { id } = params; // Validate id is a number
 if (!id || !/^[0-9]+$/.test(id)) {
   return NextResponse.json({ error: "Invalid project ID format" }, { status: 400 });
 }

 // Convert id to number for getProjectById
 const numericId = Number(id);
 if (Number.isNaN(numericId)) {
   return NextResponse.json({ error: "Invalid project ID" }, { status: 400 });
 }

// Fetch project by ID
 const project = getProjectById(numericId);
 if (!project) {
   return NextResponse.json({ error: "Project not found" }, { status: 404 });
 }

 return NextResponse.json(project, { status: 200 });
}