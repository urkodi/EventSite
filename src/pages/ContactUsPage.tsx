import Sidenav from '../features/Sidenav';
import MailWhiteBlue from '../assets/images/MailWhiteBlue.png';
import HelpDuck from '../assets/images/HelpDuck.png';

import { Link } from "react-router-dom";
import Panels from '../features/Panels';

const ContactUsPage = () => {

    return (
        <Panels>
            <div className="overflow-y-scroll h-[calc(100vh-90px)] px-6 py-4"
                style={{
                    scrollbarColor: '#E9CC73 transparent',
                }}>  
                <div className="flex justify-items-center bg-bluewhite p-4 rounded-2xl shadow-md flex-col mb-4 w-[95%] mx-auto">
                <h1 className="text-5xl font-bold text-moonstone mb-4 text-center">Contact Us</h1>
                {/*Decorative divider*/}
                <div className="mx-auto w-[90%] rounded-xl h-1 bg-darkervanilla"></div>
                {/*Introductory text*/}
                <p className="mt-2 px-6 text-lg text-moonstone mb-2 text-center">
                    You’re not just a visitor, you’re a part of our community. We’re here to listen and help so feel free to reach out!</p>
                </div>

                <div className="mt-2 flex flex-col lg:flex-row justify-center gap-10 px-4 max-w-screen-2xl mx-auto">

                {/*Contact form container*/}
                <div className="w-full lg:w-[60%] min-w-[300px] bg-lightermoonstone p-6 rounded-4xl h-[100%] shadow-md">
                    <div className="flex flex-row">
                        <img src={MailWhiteBlue} alt="Mail" className="w-10 h-10 mb-4" />
                        <h2 className="text-2xl text-whiteblue ml-5">Please fill out the form below</h2>
                    </div>
                    <form className="">
                        <div className="mb-1 space-y-4">
                            <div className="flex justify-center gap-4 max-w-3xl mx-auto">
                                <input
                                    type="text"
                                    id="first-name"
                                    placeholder="First Name"
                                    className="rounded-lg p-2 bg-bluewhite w-1/2 text-bold text-moonstone focus:outline-vanilla"
                                />
                                <input
                                    type="text"
                                    id="last-name"
                                    placeholder="Last Name"
                                    className="rounded-lg p-2 bg-bluewhite w-1/2 text-moonstone focus:outline-vanilla"
                                />
                            </div>
                            
                            <div className="flex gap-4 max-w-3xl mx-auto">
                                <div className="flex flex-col gap-5 w-full">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="h-10 rounded-lg p-2 bg-bluewhite w-full text-moonstone focus:outline-vanilla"
                                    />
                                    <input 
                                        type="text"
                                        id="phone-number"
                                        placeholder="Phone Number (Optional)"
                                        className="rounded-lg p-2 bg-bluewhite w-2/3 text-moonstone focus:outline-vanilla"
                                    />
                                    <input 
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        className="rounded-lg p-2 bg-bluewhite w-1/2 text-moonstone focus:outline-vanilla"
                                    />
                                    <textarea
                                        id="message"
                                        placeholder="Message"
                                        className="rounded-lg h-30 p-2 bg-bluewhite w-full text-moonstone focus:outline-vanilla overflow-y-scroll resize-none"
                                        style={{
                                            scrollbarWidth: 'thin',
                                            scrollbarColor: '#FFEBAF transparent',
                                        }}
                                    />

                                    <div className="flex justify-items-center w-full">

                                        <div className="flex justify-center">
                                            <button
                                                type="submit"
                                                className="px-12 py-3 text-[22px] font-bold rounded-full bg-vanilla text-moonstone shadow-md hover:ring-3 hover:ring-vanilla hover:bg-darkervanilla transition"
                                            >
                                                Submit
                                            </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
                {/*Decorative containers*/}
                <div className="flex flex-col gap-8 w-full lg:w-[35%]">
                            <div className="relative w-full max-w-3xl h-[40%] bg-bluewhite rounded-4xl shadow-md overflow-hidden group">
                                <img
                                    src={HelpDuck}
                                    alt="Help Duck"
                                    className="absolute bottom-0 left-0 w-full h-auto object-bottom transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                    <div className="bg-lightermoonstone p-6 rounded-4xl shadow-md h-[30%] flex justify-center items-center">
                        <h2 className="text-xl text-bluewhite text-center font-bold">Thank you for reaching out!</h2>
                    </div>

                    <div className="bg-bluewhite p-6 rounded-4xl shadow-md h-[30%] flex justify-center items-center">
                        <h3 className="text-2xl font-bold text-moonstone">Need Quick Answers?</h3>
                        <Link 
                            to="/help"
                            className="mx-auto bg-vanilla text-center text-moonstone font-semibold px-6 py-2 rounded-3xl shadow-md hover:ring-3 hover:ring-vanilla hover:bg-darkervanilla transition"
                            >
                            Visit Help
                        </Link>
                    </div>


                </div>
            </div>
            </div>
        </Panels>
    );
};

export default ContactUsPage