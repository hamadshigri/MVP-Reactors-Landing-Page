
export default function Offercard({image, title, description}) {
  return (
    <>
    <div className="flex flex-col justify-center gap-4 w-[400px]">
        <img src={image} alt={title} className="w-[56px] h-auto" />
        <h2 className="font-bold text-white text-[28px] font-display font-ultra-bold">
          {title}
        </h2>
        <p className="text-gray-300 text-xl font-normal font-display">{description}</p>
    </div>
    </>
  )
}
