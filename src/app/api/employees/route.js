import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const employees = await prisma.employees.findMany();
  return NextResponse.json(employees);
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
