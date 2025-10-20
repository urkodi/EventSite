import SearchColor from '../assets/images/SearchColor.png';
import LockColor from '../assets/images/LockColor.png';

import Sidenav from '../features/Sidenav';

const HelpPage = () => {
    return (
        <>
            <div className="flex">
                <Sidenav />
            </div>

            <div
                className="flex-grow flex-col p-6 bg-lightermoonstone h-auto rounded-xl shadow-md overflow-y-scroll"
                style={{
                    scrollbarColor: '#4C9DB0 transparent',
                }}>

                <div className="flex justify-center w-full max-w-3xl mx-auto bg-bluewhite p-4 rounded-2xl shadow-md flex-col mb-8">
                <h1 className="text-5xl font-bold text-moonstone mb-4 text-center">How can we help?</h1>
                {/*Decorative divider*/}
                <div className="mx-auto w-130 rounded-xl h-2 bg-darkervanilla"></div>

                <div className="mt-4 text-moonstone text-center">
                    <p className="mb-4">Need a hand? Find answers to common questions below.</p>
                </div>
                </div>

                <div className="mt-8 flex flex-row justify-center gap-10">
                    {/* Account Access*/}
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md">
                        <img src={LockColor} alt="Login" className="w-20 h-20 mx-auto" />
                        <h2 className="text-2xl font-bold text-moonstone mt-2 text-center">Account Access</h2>
                        <p className="mt-1 text-moonstone text-center">Learn how to create, manage, and recover your account.</p>
                    </div>
                    
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                </div>

                <div className="mt-8 flex flex-row justify-center gap-10">
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md">
                        <img src={SearchColor} alt="Search" className="w-20 h-20 mx-auto" />
                        <h2 className="text-2xl font-bold text-moonstone mt-2 text-center">Browsing Events</h2>
                        <p className="mt-1 text-moonstone text-center">Find out how to search, filter, and explore events that match your interests.</p>
                    </div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                </div>

                <div className="mt-8 mx-auto w-130 rounded-xl h-2 bg-vanilla"></div>


            </div>
        </>
    );
};

export default HelpPage