import React from "react";

function Leftbar() {
    const UiData = {
        aside: [{
            icon: "",
            name: "apple",
            link: "",
        },
        {
            icon: "",
            name: "profile",
            link: "",
        },
        {
            icon: "",
            name: "notifications",
            link: "",
        },
        {
            icon: "",
            name: "setting",
            link: "",
        }]
    }
    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div className="relative border-b border-white/20">
                <a className="flex items-center gap-4 py-6 px-8" href="#/">
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Material Tailwind Dashboard</h6>
                </a>
            </div>
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    {UiData.aside.map((item, id) => {
                        return (
                            <li>
                                <a className="" href="#">
                                    <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">

                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{item.name}</p>
                                    </button>
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        <a aria-current="page" className="active" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">

                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">dashboard</p>
                            </button>
                        </a>
                    </li>
                </ul>
                <ul className="mb-4 flex flex-col gap-1">
                    <li className="mx-3.5 mt-4 mb-2">
                        <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
                    </li>
                    <li>
                        <a className="" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">

                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign in</p>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a className="" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">

                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign up</p>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Leftbar;