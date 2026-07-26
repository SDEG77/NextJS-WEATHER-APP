import { prisma } from "@/utils/prisma";

export async function GET(): Promise<Response> {
  const users = await prisma.user.findMany();

  if (!users) {
    return Response.json({
      message: "No users found",
      status: "error"
    });
  }

  return Response.json(users);
}