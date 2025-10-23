import { useState } from 'react';

import GoogleLogo from '../assets/images/GoogleLogo.png';
import FacebookLogo from '../assets/images/FacebookLogo.png';
import AppleLogo from '../assets/images/AppleLogo.png';
import eventlogo from '../assets/images/eventlogo.png';

const CreateAccountPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword, terms } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (!terms) {
            setError('You must agree to the terms and conditions.');
            return;
        }

        setSubmitted(true);

        setTimeout(() => {
            window.location.href = '/verification';
        }, 2500);
    };

    if (submitted) {
        return (
            <div className="flex flex-col mx-auto h-auto">
                <div className="flex-grow flex flex-col items-center justify-center mt-10 mb-10">
                    <div className="w-full max-w-md rounded-2xl p-8 bg-lightermoonstone shadow-md text-center">
                        <h2 className="font-bold mb-6 text-5xl text-moonstone">Check Your Email!</h2>
                        <div className="mx-auto w-50 rounded-xl h-2 bg-vanilla mb-5"></div>
                        <p className="text-moonstone text-lg mb-3">
                            A confirmation email has been sent to
                        </p>
                        <p className="text-cyan-600 font-semibold">{formData.email}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col mx-auto h-auto">
            <header className="w-screen h-auto bg-moonstone p-4 shadow-md">
                <div className="flex items-left">
                    <a href="/">
                        <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                    </a>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center mt-10 mb-10">
                <div className="w-full max-w-md rounded-2xl p-8 bg-lightermoonstone shadow-md">
                    <h2 className="font-bold mb-6 text-center text-5xl text-moonstone">
                        Create Account
                    </h2>

                    <div className="mx-auto w-50 rounded-xl h-2 bg-vanilla mb-5"></div>

                    {error && (
                        <p className="text-cyan-600 text-center mb-4 font-semibold">{error}</p>
                    )}

                    <div className="flex flex-col mb-6">
                        <form className="flex justify-center gap-2">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="rounded-lg p-2 bg-bluewhite w-1/2 mr-2 text-moonstone focus:outline-vanilla"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="rounded-lg p-2 bg-bluewhite w-1/2 ml-2 text-moonstone focus:outline-vanilla"
                            />
                        </form>

                        <form className="flex flex-col mt-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-lg p-2 bg-bluewhite text-moonstone focus:outline-vanilla"
                            />
                        </form>

                        <form className="flex flex-col mt-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="rounded-lg p-2 bg-bluewhite text-moonstone focus:outline-vanilla"
                            />
                        </form>

                        <form className="flex flex-col mt-4">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="rounded-lg p-2 bg-bluewhite text-moonstone focus:outline-vanilla"
                            />
                        </form>
                    </div>

                    <form className="mt-3 text-[13px] text-white space-x-1 flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className="w-4 h-4 rounded accent-moonstone hover:ring-2 hover:ring-vanilla"
                        />
                        <label htmlFor="terms" className="ml-1">
                            I agree to the terms & conditions
                        </label>
                    </form>

                    <form className="flex justify-center items-center mt-3" onSubmit={handleSubmit}>
                        <button
                            type="submit"
                            className="px-10 py-2 text-[20px] font-bold rounded-full bg-moonstone text-bluewhite shadow-md cursor-pointer hover:ring-3 hover:ring-vanilla"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-5 w-auto h-px bg-moonstone flex items-center relative">
                        <span className="px-3 bg-lightermoonstone text-moonstone relative mx-auto">
                            Or continue with
                        </span>
                    </div>
                    
                    {/* alternative sign up methods buttons */}
                    <form className="flex-1 p-3 flex border-none cursor-pointer mt-3">
                        <button 
                            type = "button"
                            onClick={() => alert("FIXME")}
                            className="flex-1 flex justify-center items-center cursor-pointer">
                            <img src={GoogleLogo} alt="Google" className="w-10 h-10" />
                        </button>

                        <button 
                            type = "button"
                            onClick={() => alert("FIXME")}
                            className="flex-1 flex justify-center items-center cursor-pointer">
                            <img src={AppleLogo} alt="Apple" className="w-10 h-10" />
                        </button>

                        <button 
                            type = "button"
                            onClick={() => alert("FIXME")}
                            className="flex-1 flex justify-center items-center cursor-pointer">
                            <img src={FacebookLogo} alt="Facebook" className="w-10 h-10" />
                        </button>
                    </form>

                    <div className="px-3 text-center text-moonstone">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="text-moonstone font-bold underline cursor-pointer"
                        >
                            Log In
                        </a>
                    </div>
                </div>

                <footer className="mt-10 h-screen w-full bg-lightermoonstone p-4 shadow-md"></footer>
            </main>
        </div>
    );
};

export default CreateAccountPage;
