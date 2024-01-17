import { User } from "lucide-react";

export default function MeetingChat() {
  return (
    <section className="max-w-screen max-h-screen bg-gradient-to-br from-[#f7f7f7] to-slate-700/40">
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
    </section>
  )
}
