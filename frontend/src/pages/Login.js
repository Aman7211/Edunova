import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credential, setCredential] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    function changeHandler(e) {
        setCredential(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const apiUrl = "http://localhost:8000/api/v1/user/login";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: credential.email,
                    password: credential.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Success case
                console.log('Success:', data);
                localStorage.setItem('name', data.userObject.name);
                toast.success("User successfully signed in");
                navigate('/');
            } else {
                // Error case
                console.log('Error:', data.message);
                toast.error(data.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Login failed. Please check your credentials.");
        }
    }

    return (
        <section className="relative flex flex-wrap mt-20 mx-[120px] w-[80%] rounded-xl shadow-2xl">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={credential.email}
                                onChange={changeHandler}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                value={credential.password}
                                onChange={changeHandler}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-[#6A41C6] px-5 py-3 mt-10 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div>
                    <Link to={'/signup'}>
                        <p className='text-sm p-2 mt-10 mb-[-50px] text-gray-800'>Create New Account</p>
                    </Link>
                </div>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-[600px] lg:w-1/2">
                <img
                    alt=""
                    src="https://img.freepik.com/free-vector/professional-office-worker-with-flat-design_23-2147900410.jpg?w=1380&t=st=1724093059~exp=1724093659~hmac=591184c70865ce2f9ef3685de1792eb9a6d217e89049a93244c1ad750a6e16fd"
                    className="absolute inset-0 h-full w-full object-cover rounded-r-xl shadow-xl"
                />
            </div>
        </section>
    );
}

export default Login;
