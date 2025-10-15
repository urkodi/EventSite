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

                <h1 className="text-5xl font-bold text-moonstone mb-4 text-center">How can we help?</h1>
                {/*Decorative divider*/}
                <div className="mx-auto w-130 rounded-xl h-2 bg-vanilla"></div>

                <div className="mt-4 text-white text-center">
                    <p className="mb-4">Browse through our FAQ or contact us for assistance.</p>
                </div>

                <div className="mt-8 flex flex-row justify-center gap-10">
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                </div>

                <div className="mt-8 flex flex-row justify-center gap-10">
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                    <div className="h-60 w-60 bg-whiteblue p-6 rounded-4xl shadow-md"></div>
                </div>

                <div className="mt-8 mx-auto w-130 rounded-xl h-2 bg-vanilla"></div>


            </div>
        </>
    );
};

export default HelpPage