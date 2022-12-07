import { JSXElementConstructor, ReactElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = Required<{
  readonly children: ReactElement<any, string | JSXElementConstructor<any>>
}>

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default DefaultLayout;
