import Faqbar from "./Faqbar";

export default function Faqsection() {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full py-[180px]">
                <h2 className="text-5xl text-white font-bold text-center mb-[20px] font-display">Frequently Asked Questions</h2>
                <div className="mt-[80px]">
                    <Faqbar />
                    <Faqbar />
                    <Faqbar />
                    <Faqbar />
                </div>

            </div>
        </>
    )
}
