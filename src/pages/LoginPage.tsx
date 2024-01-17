import { Copyright, EyeIcon, EyeOffIcon, Lock, MessageCircle, User } from "lucide-react";
import { InputLogin } from "../components/InputLogin";
import { useState } from "react";

export default function LoginPage() {

  const [userData, setUserData] = useState({
    userName: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <section className="max-w-screen max-h-screen bg-gradient-to-br from-[#f7f7f7] to-slate-700/40">
      <div className="w-screen h-screen flex items-center justify-center relative">
        <header className="w-full h-14 flex absolute top-1">
          <h3 className="text-xl text-slate-900 flex w-full items-center justify-center gap-2"><MessageCircle size={20} /> Chat de Reunião Tech Growth</h3>
        </header>
        <form className="bg-slate-100 w-[600px] h-[550px] rounded-md flex flex-col relative items-center justify-center gap-4 shadow-xl" onSubmit={() => console.log("Foi")}>
          <h1 className="absolute top-2 text-xl">Sign In</h1>
          <InputLogin
            type="text"
            text="UserName"
            icon={<User />}
          />
          <InputLogin
            type={!showPassword ? "password" : "text"}
            text="Password"
            icon={<Lock />}
            secundaryIcon={!showPassword ? <EyeIcon /> : <EyeOffIcon />}
            click={() => setShowPassword(!showPassword)}
          />
          <button className="border-2 p-2 w-[250px] rounded-md self-center mt-14 text-lg hover:transition hover:ease-in-out hover:delay-150 hover:bg-gradient-to-br from-slate-700/40 to-[#f7f7f7]" onClick={() => alert("Seja bem vindo: " + userData.userName)}>Login</button>
        </form>
        <footer className="absolute bottom-0 flex gap-2 items-center justify-center">
          <Copyright size={12} /> <span className="font-[12px]"> Direitos reservados  2024</span>
        </footer>
      </div>
    </section>
  )
}
