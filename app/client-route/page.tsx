"use client"
/// se especifica que el componente es tipo client
import { useTheme } from "../components/theme-provider";
/// se exporta hook useTheme
export default function ClientRoutePage() {
    /// se inicializa la vriable tipo theme
    const theme = useTheme();
    return (
        
      
        <>
        {/* 
        se hace referencia al objeto color y se utiliza la variable terciary 
        tenemos acceso a estos gracias al procider
        */}
          <h1
         style={{ color: theme.colors.terciary }}
         >
            Client Route
        </h1>
        {/* se hace referencia al objeto color y se utiliza la variable lang */}
        {/* 
            cada pguina debe ser marcada como tipo client para indicar un componente 
            server cient y poder accesar sus propiedades entre corchetes ya que tenemos acceso a ellos
            gracias a que en el contexto pasamos defaultTheme que tiene la declarcion
            de las varibles on sus valores inicales
        */}
        <h1
         
         >
            {/* Variable--> objeto--> propiedad */}
            Lang : {theme.colors.lang}
        </h1>
        </>
    );
}
