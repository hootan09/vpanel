'use client'

import Footer from '../footer';

export default function Tables() {
    return (
        <>
            <div className="w-full px-6 py-6 mx-auto">
                {/* <!-- table 1 --> */}

                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6>Authors table</h6>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 leading-normal text-sm">John Michael</h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">john@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-tight text-xs">Manager</p>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">Organization</p>
                                                </td>
                                                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                                    <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs text-slate-400">23/04/18</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user2" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 leading-normal text-sm">Alexa Liras</h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">alexa@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-tight text-xs">Programator</p>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
                                                </td>
                                                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                                    <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs text-slate-400">11/01/19</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user3" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 leading-normal text-sm">Laurent Perrier</h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">laurent@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-tight text-xs">Executive</p>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">Projects</p>
                                                </td>
                                                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                                    <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs text-slate-400">19/09/17</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user4" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 leading-normal text-sm">Michael Levi</h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">michael@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-tight text-xs">Programator</p>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
                                                </td>
                                                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                                    <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs text-slate-400">24/12/08</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user5" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 leading-normal text-sm">Richard Gran</h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">richard@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-tight text-xs">Manager</p>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">Executive</p>
                                                </td>
                                                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                                    <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs text-slate-400">04/10/21</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user6" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 leading-normal text-sm">Miriam Eric</h6>
                                                            <p className="mb-0 leading-tight text-xs text-slate-400">miriam@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-tight text-xs">Programtor</p>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
                                                </td>
                                                <td className="p-2 leading-normal text-center align-middle bg-transparent border-b-0 text-sm whitespace-nowrap shadow-transparent">
                                                    <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs text-slate-400">14/09/20</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card 2 --> */}

                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6>Projects table</h6>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Project</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Budget</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Completion</th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-spotify.svg" className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9" alt="spotify" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 leading-normal text-sm">Spotify</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-normal text-sm">$2,500</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs">working</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 font-semibold leading-tight text-xs">60%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400">
                                                        <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-invision.svg" className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9" alt="invision" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 leading-normal text-sm">Invision</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-normal text-sm">$5,000</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs">done</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 font-semibold leading-tight text-xs">100%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-jira.svg" className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9" alt="jira" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 leading-normal text-sm">Jira</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-normal text-sm">$3,400</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs">canceled</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 font-semibold leading-tight text-xs">30%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="duration-600 ease-soft bg-gradient-to-tl from-red-600 to-rose-400 -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-slack.svg" className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9" alt="slack" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 leading-normal text-sm">Slack</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-normal text-sm">$1,000</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs">canceled</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 font-semibold leading-tight text-xs">0%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-0 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-webdev.svg" className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9" alt="webdev" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 leading-normal text-sm">Webdev</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-normal text-sm">$14,000</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs">working</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 font-semibold leading-tight text-xs">80%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-4/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-xd.svg" className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 rounded-full ease-soft-in-out text-sm h-9 w-9" alt="xd" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 leading-normal text-sm">Adobe XD</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 font-semibold leading-normal text-sm">$2,300</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className="font-semibold leading-tight text-xs">done</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 font-semibold leading-tight text-xs">100%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="leading-tight fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <Footer/>
            </div>
        </>
    )
}