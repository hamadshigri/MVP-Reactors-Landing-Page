import Button from "./Button";

export default function Herosection() {
  return (
    <>
      <div className="pt-[213px] flex flex-col justify-center items-center space-y-4 max-w-[327px] sm:max-w-[1360px] m-auto">
        <img src="/logo.png" alt="MVP Reactors Logo" className="max-w-[125.47px] flex lg:hidden mb-[40px]"/>
        <h3 className="font-display font-normal text-base lg:text-2xl text-white">Welcome to MVP Reactors.com</h3>
        <h1 className="font-display font-bold text-white text-center text-[32px] lg:text-[48px] xl:text-[64px] ">From Idea to MVP in Just 3 Days 😜</h1>
        <p className="font-display font-normal text-white text-lg lg:text-[32px] text-center">Powered by AI and built for bold Founders</p>
        <Button name="Book a Free Discovery Call"/>
      </div>
    </>
  );
}