import { prisma } from "@/utils/prisma";

export async function GET(): Promise<Response> {
  const users = await prisma.user.findMany();

  if (users.length === 0) {
    return Response.json({
      users: users,
      message: "No users found",
    });
  }

  return Response.json({
    users,
  });
}