import Testimonialcard from "./Testimonialcard";

export default function Testimonialsection() {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center gap-10 px-4">
                <h2 className="text-[32px] sm:text-5xl text-white font-bold text-center sm:mb-10 font-display">Real Results from Real Founders</h2>
                <div className="flex sm:max-w-[1360px] gap-8 flex-col sm:flex-row">
                    <Testimonialcard role="Sarah B., Healthtech Founder" title="Raised $50K angel investment within 10 days." description="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed。”"/>
                    <Testimonialcard role="Sarah B., Healthtech Founder" title="Raised $50K angel investment within 10 days." description="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed。”"/>
                    <Testimonialcard role="Sarah B., Healthtech Founder" title="Raised $50K angel investment within 10 days." description="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed。”"/>
                </div>

                <div className="flex sm:max-w-[1360px] gap-8 flex-col sm:flex-row">
                    <Testimonialcard role="Sarah B., Healthtech Founder" title="Raised $50K angel investment within 10 days." description="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed。”"/>
                    <Testimonialcard role="Sarah B., Healthtech Founder" title="Raised $50K angel investment within 10 days." description="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed。”"/>
                    <Testimonialcard role="Sarah B., Healthtech Founder" title="Raised $50K angel investment within 10 days." description="“I pitched my MVP the same week I hired them. It worked flawlessly, and investors loved the speed。”"/>
                </div>
            </div>
        </>
    )
}
