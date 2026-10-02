import Faqbar from "./Faqbar";

export default function Faqsection() {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full py-[80px] sm:py-[180px]">
                <h2 className="text-[32px] sm:text-5xl text-white font-bold text-center mb-[20px] font-display">Frequently Asked Questions</h2>
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
