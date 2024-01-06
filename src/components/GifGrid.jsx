import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export default function GifGrid({categoria}) {

    const {images, isLoading} = useFetchGifs(categoria);


  return (
    <div className="flex flex-col items-start">
        <h3 className="text-3xl">{categoria}</h3>
        {
            isLoading
            ? (
                <h2 className="text-lg italic">Cargando Gifs...</h2>
            )
            : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {
                        images.map(gif => (
                            <GifItem
                                key={gif.id}
                                {...gif}
                            />
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}
