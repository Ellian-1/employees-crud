import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const employee = await prisma.employees.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(employee);
}

export async function POST(request, { params }) {
  const { first_name, last_name, job_description } = await request.json();
  const newEmployee = await prisma.employees.create({
    data: {
      first_name,
      last_name,
      job_description,
    },
  });

  return NextResponse.json(newEmployee);
}
export async function PUT(request, { params }) {}
export async function DELETE(request, { params }) {}
