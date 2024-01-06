
export default function GifItem({url, title}) {
  return (
    <>
        <div className="flex flex-col gap-2 justify-between bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
                className="h-full object-cover"
                src={url}
                alt={title}
            />
            <p className="text-sm p-3 mb-2 text-gray-800">{title}</p>
        </div>
    </>
  )
}
