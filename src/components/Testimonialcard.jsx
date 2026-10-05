import star from "/star.png";

export default function Testimonialcard({ role, title, description }) {
  return (
    <>
    <div className="text-white max-w-[327px] flex flex-col gap-2 bg-[linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(170deg,rgba(133,124,255,0.3)_0%,rgba(80,74,153,0)_32.45%),linear-gradient(348deg,rgba(133,124,255,0.3)_0.0%,rgba(80,74,153,0)_0.34%),linear-gradient(1deg,rgba(133,124,255,0.3)_1.21%,rgba(80,74,153,0)_20.66%)] p-6 rounded-xl">
        <p className="font-display font-light text-xs sm:text-lg">{role}</p>
        <div className="flex gap-2">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
        </div>
        <h3 className="font-display font-bold text-xl">{title}</h3>
        <p className="font-display font-light text-sm">{description}</p>
    </div>
    </>
  )
}
