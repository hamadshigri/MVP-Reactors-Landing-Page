import emoji from "/emoji.png";

export default function Pricingsection() {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center text-white max-w-[1360px]">
                <h4 className="text-sm sm:text-2xl">Our Pricing</h4>
                <img src={emoji} alt="" className="w-[48px] h-[48px]" />
                <h2 className="text-[32px] sm:text-[64px] text-center font-bold">Love at first click? Great. Until then, it’s on us.</h2>
                <p className="text-base sm:text-2xl text-center">We charge <b>4500 USD</b> per project—but only if you’re <b>smiling</b> at the end. Don’t like what we built? <b>Full refund. No drama, no awkward silence,</b> just good vibes.</p> <br />

                <p className="text-base sm:text-2xl text-center"><b>Our secret sauce?</b> A mix of AI magic (yes, we let it do the vibe coding) and our in-house design + dev team who make sure everything not only looks great but actually works. We don’t just hand over code—we shape it, polish it, and make it dance. </p> <br />

                <p className="text-base sm:text-2xl text-center"> <b>You only pay when it does exactly what you imagined.</b></p>
                    <p className="text-base sm:text-2xl text-center">Simple. Easy. Understood! </p> <br />

                <p className="text-base sm:text-2xl text-center"> Now go on—<b>book a discovery call.</b> We’re not just ready... we’re desperately waiting for you.</p>
            </div>
        </>
    )
}
