type UserProps = {
  id: number
  name: string
}

async function fetchUser(): Promise<UserProps[]> {
  const FETCH_DELAY_MS = 2000

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "Bob Doe" },
        { id: 4, name: "Alice Doe" },
      ])
    }, FETCH_DELAY_MS)
  })
}

async function UserList() {
  const userList = await fetchUser()

  // biome-ignore lint/suspicious/noConsole: debug
  console.log("USER LIST FROM SERVER: ", userList) // Só imprime no servidor (obs: acaba imprimindo no console do navegador também só durante o desenvolvimento, pois é uma feature do React, em produção isso nao acontece)

  return (
    <div className="flex max-w-2xl flex-col gap-2">
      {userList.map((user) => (
        <p
          key={user.id}
          className="rounded-lg bg-gray-600 p-4 text-gray-100 text-heading-xs transition-all duration-300 hover:bg-gray-400"
        >
          {user.name}
        </p>
      ))}
    </div>
  )
}

export default function UserPage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 pt-20">
      <h2 className="font-bold text-2xl">Users</h2>

      <UserList />
    </div>
  )
}
