'use client'

import {useState} from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaChartPie, FaDribbble, FaGithub, FaInstagram, FaKey, FaPinterest, FaTwitter, FaUser, FaUserCircle } from 'react-icons/fa';

export default function Signin() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        rememberme: false
    });

    const {username, password, rememberme} = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const onChangeRememberMe = (e) => setUser({ ...user, [e.target.name]: e.target.checked });

    const onSubmit = (e)=>{
        console.log(username, password);
        toast.error(username);
        e.preventDefault();
        if (username !== '' || password !== '') {
            // login({
            //   username,
            //   password
            // });
          }
    }

    return (
        <>
            <div className="container sticky top-0 z-sticky">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 flex-0">
                        {/* <!-- Navbar --> */}
                        <nav className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
                            <div className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                                <a className="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0" href="/dashboard"> Soft UI Dashboard </a>
                                <button className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                                        <span className="w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                                        <span className="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                                        <span className="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                                    </span>
                                </button>
                                <div className="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                                    <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                        <li>
                                            <a className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" 
                                            aria-current="page" 
                                            href="/dashboard"
                                            >
                                                <FaChartPie className="mr-1 opacity-60"/>
                                                Dashboard
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="/profile">
                                                <FaUser className="mr-1 opacity-60"/>
                                                Profile
                                            </a>
                                        </li> */}
                                        <li>
                                            <Link 
                                            className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" 
                                            href="/signup">
                                                {/* <i className="mr-1 fas fa-user-circle opacity-60"></i> */}
                                                <FaUserCircle className="mr-1 opacity-60"/>
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" 
                                                href="">
                                                {/* <i className="mr-1 fas fa-key opacity-60"></i> */}
                                                <FaKey className="mr-1 opacity-60"/>
                                                Sign In
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* <!-- online builder btn  --> */}
                                    {/* <li className="flex items-center">
                                        <a
                                            className="leading-pro ease-soft-in text-fuchsia-500 border-fuchsia-500 text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-fuchsia-500 hover:scale-102 hover:text-fuchsia-500 active:hover:border-fuchsia-500 active:hover:scale-102 active:hover:text-fuchsia-500 active:opacity-85 active:shadow-soft-xs active:bg-fuchsia-500 active:border-fuchsia-500 mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-2 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
                                            target="_blank"
                                            href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053"
                                        >Online Builder</a
                                        >
                                    </li> */}
                                    <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                                        <li>
                                            <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" target="_blank" className="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all">Free download</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <main className="container mt-0 transition-all duration-200 ease-soft-in-out">
                <section>
                    <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                        <div className="container z-10">
                            <div className="flex flex-wrap mt-0 -mx-3">
                                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                    <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                        <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                            <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Welcome back</h3>
                                            <p className="mb-0">Enter your username and password to sign in</p>
                                        </div>
                                        <div className="flex-auto p-6">
                                            <form role="form" onSubmit={onSubmit}>
                                                <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Username</label>
                                                <div className="mb-4">
                                                    <input type="text" 
                                                    className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" 
                                                    placeholder="UserName" 
                                                    aria-label="UserName" 
                                                    aria-describedby="username-addon" 
                                                    name='username'
                                                    value={username}
                                                    onChange={onChange}
                                                    />
                                                </div>
                                                <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Password</label>
                                                <div className="mb-4">
                                                    <input type="password" 
                                                    className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" 
                                                    placeholder="Password" 
                                                    aria-label="Password" 
                                                    aria-describedby="password-addon" 
                                                    name='password'
                                                    value={password}
                                                    onChange={onChange}
                                                    />
                                                </div>
                                                <div className="min-h-6 mb-0.5 block pl-12">
                                                    <input id="rememberme" 
                                                    className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" 
                                                    type="checkbox" 
                                                    name="rememberme"
                                                    onChange={onChangeRememberMe}
                                                    checked={rememberme} 
                                                    />
                                                    <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" 
                                                    className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                                                    >Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                            <div className="mx-auto mb-6 leading-normal text-sm">
                                                Don't have an account?
                                                <a href="/signup" className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text pl-1">Sign up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                    <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                                        <div className="BackGroundLogin absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="py-12">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
                            <a href="#" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Company </a>
                            <a href="#" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> About Us </a>
                            <a href="#" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Team </a>
                            <a href="#" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Products </a>
                            <a href="#" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Blog </a>
                            <a href="#" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Pricing </a>
                        </div>
                        <div className="flex justify-center w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
                            <a href="#" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg"><FaDribbble/></span>
                            </a>
                            <a href="#" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg"><FaTwitter /></span>
                            </a>
                            <a href="#" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg"><FaInstagram/></span>
                            </a>
                            <a href="#" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg"><FaPinterest/></span>
                            </a>
                            <a href="#" target="_blank" className="mr-6 text-slate-400">
                                <span className="text-lg"><FaGithub/></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                            <div className="mb-0 text-slate-400">
                                Copyright ©
                                {new Date().getFullYear() + " "}
                                Soft by Creative Tim.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}