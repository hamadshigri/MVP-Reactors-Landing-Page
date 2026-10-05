import { ArrowRight } from "lucide-react";

export default function Button({name}) {
  return (
    <>
      <button className="flex cursor-pointer items-center gap-1 px-6 py-4 shadow-[inset_0px_3px_4px_0px_#A8A2FF40,inset_0px_3px_4px_0px_#A8A2FF66,inset_0px_-3px_4px_0px_#A8A2FF40,inset_0px_-3px_4px_0px_#857CFF66] rounded-full bg-white/5 border border-purple-400/30 hover:bg-purple-900/50 backdrop-blur-md text-xl w-auto font-display font-medium text-white justify-center">
        <p className="text-base font-medium">
          {name}
        </p>
        <ArrowRight className="sm:w-8 sm:h-8 text-white" />
      </button>
    </>
  );
}
