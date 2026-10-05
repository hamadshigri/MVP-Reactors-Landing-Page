import Faqbar from "./Faqbar";

export default function Faqsection() {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full py-[80px] md:py-[180px]">
                <h2 className="text-[32px] md:text-5xl leading-[1.2] text-white font-bold text-center mb-[20px] font-display">Frequently Asked Questions</h2>
                <div className="max-w-[1360px] w-full">
                    <Faqbar />
                    <Faqbar />
                    <Faqbar />
                    <Faqbar />
                </div>

            </div>
        </>
    )
}
