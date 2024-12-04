import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/authProvider";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (error) {
            console.error("Google login failed:", error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const imageURL = e.target.imageURL.value;

        if (password.length < 6) {
            toast.error("Password too short! Minimum length 6", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: `${fname} ${lname}`,
                photoURL: imageURL,
            });

            localStorage.setItem(
                "userProfile",
                JSON.stringify({
                    displayName: `${fname} ${lname}`,
                    photoURL: imageURL,
                    email: user.email,
                    fname,
                    lname,
                })
            );

            console.log("User created:", user);
            navigate("/");
        } catch (error) {
            console.error("Error creating user:", error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div>
            <form onSubmit={handleRegister} className="w-full max-w-lg mx-auto my-7">
                <h1 className="text-5xl font-bold mb-5 ml-2">Register here!</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="fname"
                            placeholder="Your first name"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lname"
                            placeholder="Your last name"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Image URL
                    </label>
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Enter your image URL"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-3 text-gray-700"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">
                    Register Now
                </button>
                <div className="mt-3">
                    <hr />
                    <button onClick={handleGoogleSignIn} className="btn mt-5 btn-ghost">
                        Login with Google
                    </button>
                </div>
                <div className="mt-6 text-xl">
                    Already have an account? <Link to="/login">Login now</Link>
                </div>
            </form>

            {/* Toastify container */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="bounce"
            />
        </div>
    );
};

export default Register;
