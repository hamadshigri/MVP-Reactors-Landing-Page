import Button from './Button'

export default function Navbar() {
  return (
    <div className="w-[644.09px] h-[88px] [background-image:linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(180deg,rgba(133,124,255,0.3)_0%,rgba(80,74,153,0)_32.45%),linear-gradient(114.89deg,rgba(133,124,255,0.3)_3.24%,rgba(80,74,153,0)_27.34%),linear-gradient(286.96deg,rgba(133,124,255,0.3)_1.21%,rgba(80,74,153,0)_20.66%)] border border-white/20 backdrop-blur-md rounded-full flex items-center justify-between px-4 py-2 fixed top-4 z-40">
        <img src="../logo.png" alt="MVP Reactors Logo" className="h-[34px] w-[150px] pl-4"/>
        <Button name="Book a Free Discovery Call"/>
    </div>
  )
}
