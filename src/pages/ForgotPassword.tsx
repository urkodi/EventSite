import { useState } from 'react';
import eventlogo from '../assets/icons/eventlogo.svg';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const customErrorText = "Please enter a valid email address.";
    const customSuccessText = "A confirmation email has been sent to";

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError(customErrorText);
            return;
        }

        setSubmitted(true);
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
            <main className="flex flex-col items-center justify-center mt-10 mb-10">
                <div className="w-full max-w-md rounded-2xl p-8 bg-bluewhite shadow-md border-12 border-lightermoonstone">
                    <h2 className="font-bold mb-6 text-center text-5xl text-moonstone">
                        {submitted ? "Check Your Email" : "Forgot Password?"}
                    </h2>
                    <div className="mx-auto w-50 rounded-xl h-2 bg-vanilla mb-5"></div>
                    <div className="mb-6 text-center text-moonstone text-bold text-lg">
                        {submitted
                            ? "If an account with that email exists, you will receive a 6-digit code."
                            : "Enter your email address below to receive verification code ."
                        }
                    </div>

                    {/* Confirmation View */}
                    {submitted ? (
                        <p className="text-cyan-600 text-center text-lg">
                            {customSuccessText} <span className="font-semibold">{email}</span>.
                        </p>
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
                                    className="px-10 py-2 text-[20px] font-bold rounded-full bg-moonstone text-bluewhite shadow-md cursor-pointer hover:ring-3 hover:ring-vanilla"
                                >Reset Password</button>
                            </div>
                        </form>
                    )}
                </div>
            </main>
            <footer className="h-screen w-screen bg-moonstone p-4 shadow-md"></footer>
        </div>
        </>
    );
};

export default ForgotPassword;