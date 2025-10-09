import Sidenav from '../features/Sidenav';
import MailSVG from '../components/icons/MailSVG';  

const ContactUsPage = () => {
    return (
        <>
            <div className="flex">
                <Sidenav />
            </div>

            <div className="flex-grow flex-col p-6 bg-lightermoonstone h-auto rounded-xl shadow-md">
                <h1 className="text-5xl font-bold text-moonstone mb-4 text-center">Contact Us</h1>
                {/*Decorative divider*/}
                <div className="mx-auto w-100 rounded-xl h-2 bg-vanilla"></div>
                {/*Introductory text*/}
                <p className="mt-5 text-white mb-6 text-center">You’re not just a visitor, you’re a part of our community. 
We’re here to listen and help so feel free to reach out!</p>

                <div className="h-90 w-220 mx-auto bg-moonstone p-6 rounded-4xl shadow-md">
                    <MailSVG width="30" height="30" />
                    
                    <form className="mt-4">
                        <div className="mb-6 space-y-4">
                            {/*Name Inputs*/}
                            <div className="flex justify-center gap-4 max-w-3xl mx-auto">
                                <input
                                    type="text"
                                    id="first-name"
                                    placeholder="First Name"
                                    className="rounded-lg p-2 bg-bluewhite w-1/2 text-moonstone focus:outline-vanilla"
                                />
                                <input
                                    type="text"
                                    id="last-name"
                                    placeholder="Last Name"
                                    className="rounded-lg p-2 bg-bluewhite w-1/2 text-moonstone focus:outline-vanilla"
                                />
                            </div>

                            <div className="flex gap-4 max-w-3xl mx-auto">
                                <div className="flex flex-col gap-4 w-1/2">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="h-10 rounded-lg p-2 bg-bluewhite w-full text-moonstone focus:outline-vanilla mt-4"
                                    />
                                    <input 
                                        type="text"
                                        id="phone-number"
                                        placeholder="Phone Number (Optional)"
                                        className="rounded-lg p-2 bg-bluewhite w-full text-moonstone focus:outline-vanilla mt-4"
                                    />
                                </div>
                                <textarea
                                        id="message"
                                        placeholder="Message"
                                        className="rounded-lg h-40 p-2 bg-bluewhite w-1/2 text-moonstone focus:outline-vanilla overflow-y-scroll resize-none"
                                        style={{
                                            scrollbarWidth: 'thin',
                                            scrollbarColor: '#FFEBAF transparent',
                                        }}
                                    />
                                </div>

                                <div className="flex justify-center mt-4">
                                    <button type="submit" className="px-10 py-2 text-[20px] font-bold rounded-full bg-vanilla text-moonstone shadow-md cursor-pointer hover:ring-3 hover:ring-moonstone">
                                        Submit
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUsPage