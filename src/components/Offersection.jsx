import Button from './Button'
import Offercard from './Offercard'


export default function OfferSection() {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-[80px] md:py-[180px]">
        <h2 className="text-[32px] md:text-5xl leading-[1.2] text-white font-bold text-center mb-10 font-display">What We Offers</h2>
        <div className="flex justify-center items-center flex-col max-w-[1360px]">
          <div className="flex flex-wrap gap-[40px] justify-center mb-[40px] sm:mb-[80px] xl:gap-[80px]">
            <Offercard image={"/offer-1.png"} title="Login, dashboard, and your key feature pages" description="We define your MVP’s must-haves on a quick call." />
            <Offercard image={"/offer-2.png"} title="Signup, login, logout — secure and fast" description="We define your MVP’s must-haves on a quick call." />
            <Offercard image={"/offer-3.png"} title="Stripe, OpenAI, or your must-have API" description="We define your MVP’s must-haves on a quick call." />
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
