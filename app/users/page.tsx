import { User } from "@/generated/prisma/client";
import { prisma } from "@/utils/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  if (users.length === 0) {
    return (
      <div>
        <h1>Users List:</h1>
        <p>No users found</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Users List:</h1>
      <ul>
        { users.map((user: User) => {
          return (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
