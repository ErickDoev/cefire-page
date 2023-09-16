
import { Navbar } from "@/components/ui-components";
import { FC } from "react";

interface Props {
    children: JSX.Element,
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
        <Navbar />
        { children }
    </>
  )
}
