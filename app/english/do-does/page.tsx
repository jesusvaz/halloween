"use client"
import Image from "next/image";
import Link from "next/link";
import Dodoes from "../../components/do-does"
import  Modal from "../../components/ModalVerbs";
/// se especifica que el componente es tipo client
//import { useTheme } from "../../components/theme-provider";
import { useTheme } from "../../components/theme-provider";
/// se exporta hook useTheme
export default function ModalVerbs () {
  /// se inicializa la vriable tipo theme
  const theme = useTheme();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1
         style={{ color: theme.colors.terciary }}
         >Modal verbs 1</h1>
        <h1>Modls cerbs 2</h1>
        {theme.colors.lang === 'en'?<h1>English</h1>:<h1>Español</h1>} */}
       <Dodoes/>
      </main>

    </>


  );
}



