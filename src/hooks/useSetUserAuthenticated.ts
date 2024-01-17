import { useState } from "react";

interface usersModel {
  name: string;
  password: string;
}

function useSetUserAuthenticated(userData: usersModel) {

  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const users: Array<usersModel> = [
    { name: "felipe", password: "12345678" },
    { name: "felipe", password: "12345678" },
    { name: "felipe", password: "12345678" }
  ]

  const userFilter = users.filter(user => user.name || user.password === userData.name || userData.password, () => {
    console.log("funcionou")
  })

  if (userFilter) {
    setAuthenticated(true)
    return authenticated;
  }

  return false;
}

export { useSetUserAuthenticated }
