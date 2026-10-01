export default function FeatureBox({ day, title, description }) {
  return (
    <>
    <div className="w-full max-w-[418.67px] gap-8 text-white rounded-4xl p-8 flex justify-center items-center bg-[linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(170deg,rgba(133,124,255,0.3)_0%,rgba(80,74,153,0)_32.45%),linear-gradient(348deg,rgba(133,124,255,0.3)_0.0%,rgba(80,74,153,0)_0.34%),linear-gradient(1deg,rgba(133,124,255,0.3)_1.21%,rgba(80,74,153,0)_20.66%)] flex-col border border-purple-400/30">
        <h4 className="text-xl font-display">Day {day}</h4>
        <h2 className="text-2xl font-bold font-display">{title}</h2>
        <p className="text-white text-center font-display">{description}</p>
    </div>
    </ >
  )
}
