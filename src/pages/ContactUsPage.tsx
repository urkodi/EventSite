import Sidenav from '../features/Sidenav';

const ContactUsPage = () => {
    return (
        <>
        <div className="flex">
            <Sidenav />
        </div>

        <div className="flex-grow p-6 bg-lightermoonstone min-h-screen rounded-xl shadow-md">
            <h1 className="text-4xl font-bold text-moonstone mb-4 text-center">Contact Us</h1>
                <p className="text-moonstone mb-6 text-center">If you have any questions, feedback, or need assistance, please reach out to us using the form below or via email alt</p>
                <div className="h- w-220 mx-auto bg-moonstone p-6 rounded-lg shadow-md">
            </div>
        </div>
            </>
    );
};

export default ContactUsPage