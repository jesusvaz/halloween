"use client"
import React from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';                                
// import Lang from "../LanguageSelector";


export default function Navbar() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("language")
  console.log('Navbar lang',lang)
  return (
    <nav className="w-full text-white flex justify-between items-center px-8 py-3 rounded-lg" style={{ backgroundColor: '#172554' }}>
      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        <Link
         href={{
          pathname: '/',
          query: { language:{lang} },
          
        }}
        >
          <h1>Hiaki</h1>
          </Link>
        <span>Knowledge is all around us</span>
        {/* <Image
          alt="ABUELO"
          src={abuelo}
          width={200}
          height={200}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        /> */}
      </div>
      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        {/* <Image
          alt="ABUELA"
          src={abuela}
          width={200}
          height={200}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        /> */}
      </div>


      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        {/* <Lang /> */}
        {/* <Image
        priority
          alt="framboyan"
          src={framboyan}
          width={200}
          height={200}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        /> */}
      </div>


    </nav>
  )
}
