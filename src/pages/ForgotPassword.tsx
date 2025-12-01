import { useState } from 'react';
import eventlogo from '../assets/icons/eventlogo.svg';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const customErrorText = "Please enter a valid email address.";
    const customSuccessText = " ";

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError(customErrorText);
            return;
        }

        setSubmitted(true);
    };

    const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.length === 1) {
        const next = e.target.nextElementSibling;
        if (next) next.focus();
    }
    };


    return (
        <>
        {/* Header */}
        <div className="flex flex-col mx-auto h-auto">
            <header className="w-screen h-auto bg-moonstone p-4">
                <div className="flex items-left">
                    <a href="/">
                        <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center mt-10 mb-10 sm:mt-30 sm:mb-20">
                <div className="max-w-lg rounded-2xl sm:scale-120 p-10 bg-lightermoonstone shadow-md">
                    <h2 className="font-bold mb-5 text-center text-5xl text-moonstone">
                        {submitted ? "Check Your Email" : "Forgot Password?"}
                    </h2>
                    <div className="mx-auto w-[30%] rounded-xl h-2 bg-vanilla mb-5 mt-5"></div>
                    <div className="mb-5 text-center text-white text-lg">
                        {submitted
                            ? "If we found an account with that email, your 6-digit code has been sent to:"
                            : "Enter your email address below to receive verification code."
                        }
                    </div>

                    {/* Confirmation View */}
                    {submitted ? (
                        <div className="text-moonstone text-center text-lg">
                            {customSuccessText} <span className="font-semibold">{email}</span>.

                            {/* Input verification code  */}
                            <div className="flex flex-col p-2 mt-5 "> 
                                <form className="flex justify-center gap-3"> 
                                    <input 
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="text-center text-2xl text-moonstone bg-bluewhite w-12 h-15 rounded-xl focus:outline-none focus:ring-2 focus:ring-vanilla"
                                        onInput={handleInput}>
                                    </input>
                                    <input 
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="text-center text-2xl text-moonstone bg-bluewhite w-12 h-15 rounded-xl focus:outline-none focus:ring-2 focus:ring-vanilla"
                                        onInput={handleInput}>
                                    </input>
                                    <input 
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="text-center text-2xl text-moonstone bg-bluewhite w-12 h-15 rounded-xl focus:outline-none focus:ring-2 focus:ring-vanilla"
                                        onInput={handleInput}>
                                    </input>
                                    <input 
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="text-center text-2xl text-moonstone bg-bluewhite w-12 h-15 rounded-xl focus:outline-none focus:ring-2 focus:ring-vanilla"
                                        onInput={handleInput}>
                                    </input>
                                    <input 
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="text-center text-2xl text-moonstone bg-bluewhite w-12 h-15 rounded-xl focus:outline-none focus:ring-2 focus:ring-vanilla"
                                        onInput={handleInput}>
                                    </input>
                                    <input 
                                        type="text"
                                        maxLength={1}
                                        inputMode="numeric"
                                        className="text-center text-2xl text-moonstone bg-bluewhite w-12 h-15 rounded-xl focus:outline-none focus:ring-2 focus:ring-vanilla"
                                        onInput={handleInput}>
                                    </input>
                                </form>  
                            </div>
                            
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Error Message */}
                            {error && (
                                <p className="text-cyan-600 text-center mb-4">{error}</p>
                            )}

                            {/* Email Input */}
                            <form className="flex flex-col mb-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-lg p-2 text-moonstone focus:outline-vanilla border-2 border-moonstone"
                                />
                            </form>

                            {/* Submit Button */}
                            <div className="flex justify-center items-center mt-3">
                                <button
                                    type="submit"
                                    className="px-10 py-2 text-lg font-bold rounded-full bg-moonstone text-bluewhite shadow-md cursor-pointer hover:ring-3 hover:ring-vanilla"
                                >Reset Password</button>
                            </div>
                        </form>
                    )}
                </div>
            </main>

        </div>
        </>
    );
};

export default ForgotPassword;