import Button from './Button'
import Offercard from './Offercard'


export default function OfferSection() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full py-[180px]">
        <h2 className="text-5xl text-white font-bold text-center mb-10 font-display">What We Offers</h2>
        <div className="flex justify-center items-center flex-col w-[1360px] gap-y-[80px]">
          <div className="flex justify-center items-center gap-x-[80px]">
            <Offercard image={"/offer-1.png"} title="Login, dashboard, and your key feature pages" description="We define your MVP’s must-haves on a quick call." />
            <Offercard image={"/offer-2.png"} title="Signup, login, logout — secure and fast" description="We define your MVP’s must-haves on a quick call." />
            <Offercard image={"/offer-3.png"} title="Stripe, OpenAI, or your must-have API" description="We define your MVP’s must-haves on a quick call." />
          </div>

          <div className="flex justify-center items-center gap-x-[80px]">
            <Offercard image={"/offer-1.png"} title="Login, dashboard, and your key feature pages" description="We define your MVP’s must-haves on a quick call." />
            <Offercard image={"/offer-2.png"} title="Signup, login, logout — secure and fast" description="We define your MVP’s must-haves on a quick call." />
            <Offercard image={"/offer-3.png"} title="Stripe, OpenAI, or your must-have API" description="We define your MVP’s must-haves on a quick call." />
          </div>
          <Button name="Book a Free Discovery Call"/>

        </div>


      </div>

    </>
  )
}
