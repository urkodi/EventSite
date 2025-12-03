import { useState } from 'react';
import { Link } from "react-router-dom";

import eventlogo from '../assets/images/eventlogo.png';
import useUserStore from '../lib/userStore';

const CreateAccountPage = () => {

    const { setUser } = useUserStore();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const [error, setError] = useState('');
    const [_loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        setError('');
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
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

        setLoading(true);

        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/register`, {
            method: "post",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "firstName": formData.firstName,
                "lastName": formData.lastName,
                "email": formData.email,
                "password": formData.password
            })
        });

        setLoading(false);

        if (res.ok) {
            let body = await res.json();
            console.log(body);

            setUser(body);

            setSubmitted(true);
        }
    };

    const handleInput = (e: any) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length === 1) {
            const next = e.target.nextElementSibling;
            if (next) next.focus();
        }
    };

    if (submitted) {
        return (
            <div className="flex flex-col mx-auto h-auto">
                <header className="w-screen h-auto bg-moonstone p-4">
                    <div className="flex items-center justify-between">
                        <a href="/">
                            <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                        </a>
                        <Link to="/help"
                            className="mr-3 font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Help
                        </Link>
                    </div>
                </header>

                <div className="flex flex-col mx-auto h-auto">
                    <div className="flex-grow flex flex-col items-center justify-center mt-10">
                        <div className="w-full max-w-md rounded-2xl p-8 bg-lightermoonstone shadow-md text-center">
                            <h2 className="font-bold mb-6 text-5xl text-moonstone">Check Your Email!</h2>
                            <div className="mx-auto w-50 rounded-xl h-2 bg-vanilla mb-5"></div>
                            <p className="text-white text-lg mb-3">
                                If we found an account with that email, your 6-digit code has been sent to:
                            </p>
                            <p className="text-moonstone font-semibold">{formData.email}</p>
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
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col mx-auto h-auto max-h-screen overflow-x-hidden">
            <header className="w-screen h-auto bg-moonstone p-4 shadow-md">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                    </a>
                    <Link to="/help"
                        className="mr-3 font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Help
                    </Link>
                </div>
            </header>

            <div className="overflow-y-scroll"
                style={{
                    scrollbarColor: '#4C9DB0 transparent',
                }}>

                <main className="flex flex-col items-center justify-center mt-10 mb-10 sm:mt-30 sm:mb-20 ">
                    <div className="w-full max-w-lg rounded-2xl sm:scale-120 p-10 bg-lightermoonstone shadow-md">
                        <h2 className="font-bold mb-6 text-center text-5xl text-moonstone">
                            Create Account
                        </h2>

                        <div className="mx-auto w-[30%] rounded-xl h-2 bg-vanilla my-5"></div>

                        {error && (
                            <p className="text-cyan-600 text-center mb-4 font-semibold">{error}</p>
                        )}

                        <form className="flex flex-col mb-6">
                            <fieldset className="flex justify-center gap-2" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="rounded-lg p-2 bg-white w-1/2 mr-2 text-moonstone focus:outline-vanilla"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="rounded-lg p-2 bg-white w-1/2 ml-2 text-moonstone focus:outline-vanilla"
                                />
                            </fieldset>

                            <fieldset className="flex flex-col mt-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="rounded-lg p-2 bg-white text-moonstone focus:outline-vanilla"
                                />
                            </fieldset>

                            <fieldset className="flex flex-col mt-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="rounded-lg p-2 bg-white text-moonstone focus:outline-vanilla"
                                />
                            </fieldset>

                            <fieldset className="flex flex-col mt-4">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="rounded-lg p-2 bg-white text-moonstone focus:outline-vanilla"
                                />
                            </fieldset>

                            <fieldset className="py-3 text-[13px] text-white space-x-1 flex items-center">
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
                            </fieldset>

                            <div className="mt-8 mb-4 w-auto h-px bg-moonstone flex items-center relative">
                                <span className="px-3 bg-lightermoonstone text-moonstone relative mx-auto">
                                    <fieldset className="flex justify-center items-center py-2">
                                        <button
                                            type="submit"
                                            className="px-10 py-2 text-lg font-bold rounded-full bg-moonstone text-bluewhite shadow-md cursor-pointer hover:ring-3 hover:ring-vanilla"
                                            onClick={handleSubmit}
                                        >
                                            Sign Up
                                        </button>
                                    </fieldset>
                                </span>
                            </div>
                        </form>

                        <div className="text-center text-moonstone">
                            Already have an account?{' '}
                            <a
                                href="/login"
                                className="text-white font-bold underline cursor-pointer"
                            >
                                Log In
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CreateAccountPage;