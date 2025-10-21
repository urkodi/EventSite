import Sidenav from '../features/Sidenav';
import MailWhiteBlue from '../assets/images/MailWhiteBlue.png';
import HelpDuck from '../assets/images/HelpDuck.png';

const ContactUsPage = () => {
    return (
        <>
            <div className="flex">
                <Sidenav />
            </div>

            <div className="flex-grow flex-col p-6 bg-lightermoonstone h-auto shadow-md overflow-y-scroll"
                style={{
                    scrollbarColor: '#4C9DB0 transparent',
                }}>  
                <div className="flex justify-center w-full bg-bluewhite p-4 rounded-2xl shadow-md flex-col mb-8">
                <h1 className="text-5xl font-bold text-moonstone mb-4 text-center">Contact Us</h1>
                {/*Decorative divider*/}
                <div className="mx-auto w-1/2 rounded-xl h-2 bg-darkervanilla"></div>
                {/*Introductory text*/}
                <p className="mt-5 text-[16px] text-moonstone text-bold mb-6 text-center">
                    You’re not just a visitor, you’re a part of our community. We’re here to listen and help so feel free to reach out!</p>
                </div>

                <div className="mt-4 flex flex-row flex-wrap justify-center gap-10">
                {/*Decorative containers*/}
                <div className="flex mr-auto flex-col gap-10 w-2/7">
                    <div className="p-6 rounded-4xl shadow-md h-70 bg-bluewhite bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${HelpDuck})`,
                        backgroundSize: '280%',
                        backgroundPosition: 'center -180px',
                        }}>
                    </div>
                    <div className="bg-moonstone p-6 rounded-4xl shadow-md h-70"></div>
                </div>

                {/*Contact form container*/}
                <div className="h-auto w-2/3 min-w-[300px] bg-moonstone p-6 rounded-4xl shadow-md ml-auto">
                    <div className="flex flex-row">
                        <img src={MailWhiteBlue} alt="Mail" className="w-10 h-10 mb-4" />
                        <h2 className="text-2xl text-whiteblue ml-4">Please fill out the form below</h2>
                    </div>
                    <form className="mt-4">
                        <div className="mb-6 space-y-4">

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
                                        className="rounded-lg h-40 p-2 bg-bluewhite w-full text-moonstone focus:outline-vanilla overflow-y-scroll resize-none"
                                        style={{
                                            scrollbarWidth: 'thin',
                                            scrollbarColor: '#FFEBAF transparent',
                                        }}
                                    />

                                    <div className="flex justify-center items-center">
                                        <button type="submit" className="px-10 py-2 text-[20px] font-bold rounded-full bg-vanilla text-moonstone shadow-md cursor-pointer hover:ring-3 hover:ring-lightermoonstone mt-4">
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default ContactUsPage