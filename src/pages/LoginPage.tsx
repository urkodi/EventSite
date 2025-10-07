import GoogleLogo from '../assets/images/GoogleLogo.png';
import FacebookLogo from '../assets/images/FacebookLogo.png';
import AppleLogo from '../assets/images/AppleLogo.png';
import eventlogo from '../assets/images/eventlogo.png';

const LoginPage = () => {
   return (
    <div className="flex flex-col mx-auto h-auto">

            <header className="w-screen h-auto bg-lightermoonstone p-4 shadow-md">
                <div className="flex items-left">
                    <a href = "/homepage">
                        <img src={eventlogo} alt="Event Logo" className="h-10" />
                    </a>
                </div>
            </header>

            <div className="flex flex-col items-center justify-center mt-10">
                <div className="w-full max-w-md rounded-2xl p-8 bg-lightermoonstone shadow-md">
                    <h2 className="font-bold mb-6 text-center text-5xl text-moonstone">Log In</h2>
                    
                    {/*User Inputs*/}
                    <div className="flex flex-col mb-6">
                        <div className="flex flex-col mt-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="rounded-lg p-2 bg-bluewhite text-moonstone"
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="rounded-lg p-2 bg-bluewhite text-moonstone"
                            />
                    </div>

                    {/*Log in button*/}
                    <div className="flex justify-center items-center mt-3">
                        <button type="submit" className="px-10 py-2 text-[20px] font-bold rounded-full bg-moonstone text-bluewhite shadow-md cursor-pointer">
                            Log In
                        </button>
                    </div>
                    
                    {/*divider for dramatic effect*/}
                    <div className="mt-5 w-auto h-px bg-moonstone flex items-center relative">
                        <span className="px-3 bg-lightermoonstone text-moonstone relative mx-auto">
                            Or continue with
                        </span>
                    </div>

                    {/*Socials buttons -- Google, Apple, Facebook*/}
                    <div className="flex-1 p-3 flex border-none cursor-pointer mt-3">
                        <button className="flex-1 flex justify-center items-center cursor-pointer">
                            <img src={GoogleLogo} alt="Google" className="w-10 h-10" />
                        </button>

                        <button className="flex-1 flex justify-center items-center cursor-pointer">
                            <img src={AppleLogo} alt="Apple" className="w-10 h-10" />
                        </button>

                        <button className="flex-1 flex justify-center items-center cursor-pointer">
                            <img src={FacebookLogo} alt="Facebook" className="w-10 h-10" />
                        </button>
                    </div>

                    {/*Link to signup page if user wants to make an account*/}
                    <div className="px-3 text-center text-moonstone">
                        Dont have an account? Create one <a href="/create-account" className="text-moonstone font-bold underline cursor-pointer">here!</a>
                    </div>

                </div>
            </div>  
        </div>
      </div>
    );
};

    export default LoginPage