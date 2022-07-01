import { Header } from "./header/Header"

export const Layout = ({children}: any) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}
