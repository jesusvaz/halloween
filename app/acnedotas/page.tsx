
import Acnedota from "../components/acnecdota"
import Familia from "../components/amilia"
import Pablo from "../components/pablo"
import JoseAlfredo from "../components/AlfaredoJose"
import QRGenerator from "../components/qrGenerator"

export default function Acnedotas() {
    return (

        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <div className="text-xl font-bold mb-4">Historias</div>
                <Acnedota />
                <Familia />
                <Pablo />
                <JoseAlfredo />
                <QRGenerator/>
            </div>
        </>

     
   
        
    )
}
