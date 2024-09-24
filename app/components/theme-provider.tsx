"use client"
//uso del hook  como client server
import { createContext, useContext } from "react";
///
/// Declarndo variable Theme que contiene un objeto llamdo colors
/// que tiene 4 vriables de typo string
/// cada propiedad es de tipo stringn en este caso
type Theme = {
    colors: {
        primary: string
        secondary: string
        terciary: string
        lang:string
    }
}

/// para inicializar la varible defaultTheme
/// se especifica el tipo de variable Theme
/// y entonces se inicializan las variables con los valores
/// correspondientes
const defaultTheme: Theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        terciary: 'yellow',
        lang: 'es'
    }
}

/// crear contexto pasandole el tipo de vcariable
const ThemeContext = createContext(defaultTheme);

/// crear provider
export const ThemeProvider =({ children } : { children: React.ReactNode}) => {
    return (
        // crear provider pasandole el estado qu s vs utilizar en todas las pahuinas
        // que se representan por la variab le children
        // las s cuales tendran acceso  alas propiedades dentro de defaulTheme
        // que en este caso son:
        // primary: "#007bff",
        // secondary: "#6c757d",
        // terciary: 'yellow',
        // lang: 'en'
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
