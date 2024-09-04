"use client"
import { useTheme } from "../components/theme-provider";
export default function ClientRoutePage() {
    const theme = useTheme();
    return (
        
      
        <>
          <h1
         style={{ color: theme.colors.terciary }}
         >
            Client Route
        </h1>
        <h1
         
         >
            Lang : {theme.colors.lang}
        </h1>
        </>
    );
}
