export default function FeatureBox({ day, title, description }) {
  return (
    <>
    <div className="max-w-[392px] sm:max-w-[418.67px] lg:h-[267px] gap-4 text-white rounded-4xl p-8 flex justify-start items-center bg-[linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(170deg,rgba(133,124,255,0.3)_0%,rgba(80,74,153,0)_32.45%),linear-gradient(348deg,rgba(133,124,255,0.3)_0.0%,rgba(80,74,153,0)_0.34%),linear-gradient(1deg,rgba(133,124,255,0.3)_1.21%,rgba(80,74,153,0)_20.66%)] flex-col border border-purple-400/30">
        <h4 className="text-base md:text-xl xl:text-2xl font-display">Day {day}</h4>
        <h2 className="text-xl md:text-2xl xl:text-[32px] font-bold font-display">{title}</h2>
        <p className="text-lg md:text-xl xl:text-2xl text-white text-center font-display">{description}</p>
    </div>
    </ >
  )
}
