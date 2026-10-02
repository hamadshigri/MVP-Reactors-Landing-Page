
export default function Offercard({image, title, description}) {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left gap-[12px] 2xl:gap-[24px] max-w-[300px] 2xl:max-w-[400px]">
        <img src={image} alt={title} className="w-[56px] h-auto" />
        <h2 className="font-display font-bold text-white text-xl 2xl:text-[28px]">
          {title}
        </h2>
        <p className="text-gray-300 text-lg 2xl:text-xl font-normal font-display">{description}</p>
    </div>
    </>
  )
}
