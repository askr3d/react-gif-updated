import { useState } from "react"

export default function AgregarCategoria({handleAgregarCategoria}) {
    const [inputValue, setInputValue] = useState('')
    const handleChangeInput = ({target}) => {
        setInputValue(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        handleAgregarCategoria(inputValue.trim());
        setInputValue('');
    }
  return (
    <form
        className="flex flex-col md:flex-row justify-center items-center gap-4 w-full"
        onSubmit={handleSubmit}
    >
        <input
            type="text"
            placeholder="Buscar GIF"
            value={inputValue}
            onChange={(handleChangeInput)}
            className="p-2 border border-black rounded-md w-full md:w-1/2 lg:w-1/3 text-center font-medium text-gray-600"
        />
        <button
            className="bg-blue-500 rounded py-2 px-4 text-white font-bold border border-gray-400 shadow-md hover:bg-blue-700 cursor-pointer w-full md:w-auto"
            type="submit"
        >
            Agregar
        </button>
    </form>
  )
}
