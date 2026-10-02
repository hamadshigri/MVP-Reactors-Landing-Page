import instagram from "/Instagram.png";
import facebook from "/Facebook.png"

export default function Footer() {
    return (
        <>
            <div className="w-full flex justify-center border-t border-[#FFFFFF1A] text-white relative">
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-[80%] py-8">
                    <p className="text-lg mt-5 sm:mt-0 text-center sm:text-left text-white">
                        2020 The Good Company. All Rights Reserved
                    </p>
                    <div className="flex justify-between items-center space-x-4">
                        <div className="flex hidden sm:flex space-x-4 justify-center items-center pr-4">
                            <img src={instagram} alt="Instagram-Icon" className="w-[38px] h-[38px]" />
                            <img src={facebook} alt="Facebook-Icon" className="w-[27px] h-[27px]" />
                            <span className="text-[#FFFFFF66] text-2xl mb-1">&#x007C;</span>
                        </div>
                        <ul className="flex flex-col sm:flex-row text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4 text-white text-lg">
                            <li>About</li>
                            <li>Terms of service</li>
                            <li>Privacy Policy</li>
                        </ul>

                    </div>
                </div>
                <div className="absolute w-full h-full left-1/2 top-0 -translate-x-1/2 bg-[#857cff99] blur-[82px] sm:rounded-t-full"></div>
            </div>
        </>
    )
}
