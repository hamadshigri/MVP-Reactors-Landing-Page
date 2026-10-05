import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Faqbar() {
   const [isOpen, setIsOpen] = useState(false);

   const handleFaq = () => {
    setIsOpen(isOpen => !isOpen);
    console.log(isOpen)
   }

    return (
        <>
            <div className="sm:max-w-[1360px] p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center w-full text-white">
                    <h3 className="font-display font-bold text-xl md:text-2xl">How can you build an MVP in just 3 days?</h3>
                    <button onClick={handleFaq} className="flex justify-center items-center rounded-full p-4 shadow-[inset_0px_3px_4px_0px_#A8A2FF80,inset_0px_-3px_4px_0px_#A8A2FF80]">
                        {
                            isOpen ? <Minus /> : <Plus />
                        }
                    </button>
                </div>
                <div className="w-[80%]">
                    <p className={`text-sm md:text-2xl text-[#CBD5E1] font-normal font-display ${isOpen ? 'block' : 'hidden'}`}>We use cutting-edge AI development tools, pre-built design systems, and a highly optimized build process. We focus only on core functionality — no fluff.</p>
                </div> 
                <hr className="text-[#ffffff33]" />
            </div>
        </>
    )
}