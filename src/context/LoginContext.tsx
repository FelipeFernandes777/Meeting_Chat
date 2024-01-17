import { useContext, createContext, ReactNode, useState } from "react";

interface dataProps {
  name: string,
  password: string
}

const LoginContext = createContext({});

function LoginContextProvider(children: ReactNode, data: dataProps) {

  const [setData, useSetData] = useState<dataProps>({ name: data.name, password: data.password })

  return (
    <LoginContext.Provider value={{ setData, useSetData }}>
      {children}
    </LoginContext.Provider>
  )
}

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    console.log("Use this context inside LoginContextProvider")
    return false;
  }
  return context;
}

export default LoginContextProvider;
export { useLoginContext }
