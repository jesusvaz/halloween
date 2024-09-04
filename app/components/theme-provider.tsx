"use client"

import { createContext, useContext } from "react";

type Theme = {
    colors: {
        primary: string
        secondary: string
        terciary: string
        lang:string
    }
}
const defaultTheme: Theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        terciary: 'yellow',
        lang: 'en'
    }
}

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider =({ children } : { children: React.ReactNode}) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}



console.log("Que tiene al iniciar:",ThemeContext)
export const useTheme = () => useContext(ThemeContext);
