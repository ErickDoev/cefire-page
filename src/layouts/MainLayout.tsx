
import { Navbar } from "@/components/ui-components";
import { FC } from "react";
import '../app/globals.css';
interface Props {
    children: JSX.Element,
    title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
      <div className="relative">
        <Navbar />
        { children }
      </div>
  )
}
