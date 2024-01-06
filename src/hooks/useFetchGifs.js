import getGifs from "../helpers/getGifs";
import { useState, useEffect } from "react";

export default function useFetchGifs(categoria) {
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImagenes = async () => {
        const gifs = await getGifs(categoria);
        setImages(gifs);
        setIsLoading(false);
    }

    useEffect( () => {
        getImagenes();
    }, [])

    return {
        images,
        isLoading
    }
}
