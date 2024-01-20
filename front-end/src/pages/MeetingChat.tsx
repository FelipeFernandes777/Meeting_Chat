import { Search, User } from "lucide-react";

export default function MeetingChat() {
  return (
    <section className="max-w-screen max-h-screen bg-gradient-to-br from-[#f7f7f7] to-slate-700/40 flex">
      <header className="w-[170px] h-screen border-r border-black relative">
        <h3>Online:  </h3>
        <div className="w-full flex items-center justify-center p-2 flex-col">
          <span className="text-sm flex justify-between w-full">
            <User size={14} />Felipe Fernandes
          </span>
        </div>
        <div className="w-full flex items-center justify-center p-2 flex-col">
          <span className="text-sm flex justify-between w-full">
            <User size={14} />Eduardo Oliveira
          </span>
        </div>
        <div className="w-full flex items-center justify-center p-2 flex-col">
          <span className="text-sm flex justify-between w-full">
            <User size={14} />Victor Teixeira
          </span>
        </div>
      </header>
      <main className="w-full h-screen relative">
        <div className="renderMessage">

        </div>
        <div className="input_message absolute bottom-5 flex w-full justify-center items-center">
          <div className="flex justify-center items-center">
            <textarea placeholder="Digite a sua pergunta" className="p-2 w-[600px] h-[200px] rounded-xl" />
          </div>
        </div>
      </main>
    </section>
  )
}
