import SearchColor from '../assets/images/SearchColor.png';
import LockColor from '../assets/images/LockColor.png';

import Sidenav from '../features/Sidenav';
import { useState } from 'react';

const HelpPage = () => {

    const [flippedBoxes, setFlippedBoxes] = useState<{ [key: string]: boolean }>({});

    const toggleFlip = (key: string) => {
    setFlippedBoxes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const flipCardStyle = {
    perspective: '1000px',
    cursor: 'pointer',
    width: '15rem',
    height: '15rem',
  };

  const flipInnerStyle = (flipped: boolean) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : 'none',
  });

  const flipFaceStyle = {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    borderRadius: '2rem',
    backfaceVisibility: 'hidden' as const,
    backgroundColor: '#e6f0fa',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const flipBackStyle = {
    ...flipFaceStyle,
    transform: 'rotateY(180deg)',
    backgroundColor: '#cfe3ff',
  };

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