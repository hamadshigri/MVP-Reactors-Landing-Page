import Button from "./Button";

export default function Contactform() {
  return (
    <>
    <div className="bg-[linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01)),linear-gradient(170deg,rgba(133,124,255,0.3)_0%,rgba(80,74,153,0)_32.45%),linear-gradient(348deg,rgba(133,124,255,0.3)_0.0%,rgba(80,74,153,0)_0.34%),linear-gradient(1deg,rgba(133,124,255,0.3)_1.21%,rgba(80,74,153,0)_20.66%)] rounded-xl flex flex-col gap-8 w-full sm:max-w-[854px] p-4 sm:p-10 bg-transparent text-white">
        <h3 className="text-[32px] font-bold hidden sm:block">Contact at:</h3>
        <p className="text-[22px]  hidden sm:block"><u><a href="mailto:howdy@mvpreactors.com">howdy@mvpreactors.com</a></u> OR drop a message.</p>
        <form action="" className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="bg-white/10 p-[32px] rounded-xl placeholder:text-[#CBD5E1] text-xl focus:outline-none"/>
            <textarea name="message" rows="4" id="message" placeholder="Message" className="bg-white/10 p-[32px] rounded-xl placeholder:text-[#CBD5E1] text-xl focus:outline-none"></textarea>
            <div className="flex justify-end">
            <Button name="Submit"/>
            </div>
        </form>
    </div>
    </>
  )
}
