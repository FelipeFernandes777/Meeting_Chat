import { ReactNode } from "react";

interface InputLoginProps {
  text: string;
  icon: ReactNode;
  secundaryIcon?: ReactNode;
  type: string
  change?: React.ChangeEventHandler<HTMLInputElement> | undefined
  click?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export function InputLogin({ text, icon, type, change, secundaryIcon, click }: InputLoginProps) {
  return (
    <div className="flex flex-col w-10/12">
      <label className="flex gap-2 text-2xl items-center ">{icon} {text}</label>
      <div className="relative flex items-center">
        <span className="absolute right-3" onClick={click}> {secundaryIcon} </span>
        <input type={type} className="w-full rounded-md p-2 border" onChange={change} />
      </div>
    </div>
  )
}
