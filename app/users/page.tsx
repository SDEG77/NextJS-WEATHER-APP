import { User } from "@/generated/prisma/client";
import { prisma } from "@/utils/prisma";
import "dotenv/config"

export default async function UsersPage() {
  const { APP_URL } = process.env;

  const response = await fetch(`${APP_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.users.length === 0) {
    return (
      <div>
        <h1>Users List:</h1>
        <p>{ data.message }</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Users List:</h1>
      <ul>
        { data.users.map((user: User) => {
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
