import Button from "./Button";

export default function Herosection() {
  return (
    <>
      <div className="pt-6 flex flex-col justify-center items-center space-y-4 h-screen">
        <h3 className="font-semibold text-2xl text-white">Welcome to MVP Reactors.com</h3>
        <h1 className="text-[64px] font-bold text-white">From Idea to MVP in Just 3 Days 😜</h1>
        <p className="text-white text-[32px] font-semibold">Powered by AI and built for bold Founders</p>
        <Button className="text-xl" name="Book a Free Discovery Call"/>
      </div>
    </>
  );
}