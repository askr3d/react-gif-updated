import { useState } from "react"
import {AgregarCategoria, GifGrid} from "./components";

export default function GifExpertApp() {
    const [categorias, setCategorias] = useState(['Drift Car']);

    const handleAgregarCategoria = categoria => {
        if(categorias.find(cat => cat.toLowerCase() === categoria.toLowerCase())) return;
        setCategorias([categoria])
    }
  return (
    <div className="p-5 flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-center p-3">
            Gif Expert App
        </h1>

        <AgregarCategoria handleAgregarCategoria={handleAgregarCategoria} />

        <div className="md:w-10/12 flex flex-col gap-3 text-center mt-10 divide-y-2 divide-stone-300">
            {
                categorias.map( (categoria) => (
                    <GifGrid key={categoria} categoria={categoria} />
                ))
            }
        </div>
    </div>
  )
}
