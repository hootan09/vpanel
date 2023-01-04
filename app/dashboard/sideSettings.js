'use Client'


import {FaCog, FaFacebookSquare, FaTimes, FaTwitter} from 'react-icons/fa'

export default function SideSettings({open, onToggle, onToggleFixedNavbar, fixedNavbar, OnChangeMenuItemColor}) {

    return (
        <div>
            <div className="bottom-7.5 right-7.5 text-xl z-990 shadow-soft-lg rounded-circle fixed cursor-pointer bg-white px-4 py-2 text-slate-700" onClick={onToggle}>
                <div className='py-2 pointer-events-none'><FaCog /></div>
            </div>
            {/* <!-- -right-90 in loc de 0--> */}
            <div className={`z-sticky shadow-soft-3xl w-90 ease-soft ${open ? 'right-0' : '-right-90'} fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200`}>
                <div className="px-6 pt-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                    <div className="float-left">
                        <h5 className="mt-4 mb-0">Soft UI Configurator</h5>
                        <p>See our dashboard options.</p>
                    </div>
                    <div className="float-right mt-6" onClick={onToggle}>
                        <button className="inline-block p-0 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-slate-700">
                            {/* <i className="fa fa-close"></i> */}
                            <FaTimes/>
                        </button>
                    </div>
                    {/* <!-- End Toggle Button --> */}
                </div>
                <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <div className="flex-auto p-6 pt-0 sm:pt-4">
                    {/* <!-- Sidebar Backgrounds --> */}
                    <div>
                        <h6 className="mb-0">Sidebar Colors</h6>
                    </div>
                    <a href="#">
                        <div className="my-2 text-left">
                            <span onClick={()=>OnChangeMenuItemColor('from-purple-700 to-pink-500')} className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-purple-700 to-pink-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="purple-700" data-color-to="pink-500"></span>
                            <span onClick={()=>OnChangeMenuItemColor('from-gray-900 to-slate-800')} className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-gray-900 to-slate-800 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="gray-900" data-color-to="slate-800"></span>
                            <span onClick={()=>OnChangeMenuItemColor('from-blue-600 to-cyan-400')} className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-blue-600 to-cyan-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="blue-600" data-color-to="cyan-400"></span>
                            <span onClick={()=>OnChangeMenuItemColor('from-green-600 to-lime-400')} className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-green-600 to-lime-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="green-600" data-color-to="lime-400"></span>
                            <span onClick={()=>OnChangeMenuItemColor('from-red-500 to-yellow-400 ')} className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-red-500 to-yellow-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="red-500" data-color-to="yellow-400"></span>
                            <span onClick={()=>OnChangeMenuItemColor('from-red-600 to-rose-400')} className="py-2.2 text-xs px-3.6 rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-red-600 to-rose-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color-from="red-600" data-color-to="rose-400"></span>
                        </div>
                    </a>
                    {/* <!-- Sidenav Type --> */}
                    <div className="mt-4">
                        <h6 className="mb-0">Sidenav Type</h6>
                        <p className="leading-normal text-sm">Choose between 2 different sidenav types.</p>
                    </div>
                    <div className="flex">
                        <button className="inline-block w-full px-4 py-3 mb-2 font-bold text-center text-white uppercase align-middle transition-all border border-transparent border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-purple-700 to-pink-500 bg-fuchsia-500 hover:border-fuchsia-500" >Transparent</button>
                        <button className="inline-block w-full px-4 py-3 mb-2 ml-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 border-fuchsia-500 bg-none text-fuchsia-500 hover:border-fuchsia-500">White</button>
                    </div>
                    <p className="block mt-2 leading-normal text-sm xl:hidden">You can change the sidenav type just on desktop view.</p>
                    {/* <!-- Navbar Fixed --> */}
                    <div className="mt-4">
                        <h6 className="mb-0">Navbar Fixed</h6>
                    </div>
                    <div className="min-h-6 mb-0.5 block pl-0">
                        <input 
                        className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" 
                        type="checkbox"
                        checked={fixedNavbar}
                        onChange={onToggleFixedNavbar}
                        />
                    </div>
                    <hr className="h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent sm:my-6" />
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer leading-pro text-xs ease-soft-in hover:shadow-soft-xs hover:scale-102 active:opacity-85 tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800" href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" target="_blank">Free Download</a>
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none" href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/" target="_blank">View documentation</a>
                    <div className="w-full text-center">
                        {/* <a className="github-button" href="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub">Star</a> */}
                        <h6 className="mt-4">Thank you for sharing!</h6>
                        <div className='flex items-center justify-center'>
                            <a href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20Tailwind%20made%20by%20%40CreativeTim&hashtags=webdesign,dashboard,tailwindcss&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-tailwind" className="flex items-center justify-center px-6 py-3 mb-0 mr-2 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700" target="_blank"> <FaTwitter className="mr-1"/> Tweet </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" className="flex items-center justify-center px-6 py-3 mb-0 mr-2 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700" target="_blank"> <FaFacebookSquare className="mr-1 fab fa-facebook-square"/> Share </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}