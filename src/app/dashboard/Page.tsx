import { FaTachometerAlt } from "react-icons/fa";
import { FaLaughWink } from "react-icons/fa";
import React from "react";
import {Dropdown, DropdownMenu, DropdownItem, Button, DropdownTrigger} from "@nextui-org/react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
export default function Page() {
    return (

        <div className={"flex "}>

            {/*sidebar*/}

            <div className={"flex bg-[#4e73df] w-2/12 h-screen"}>



                <div className={"flex flex-col p-2 "}>

                    <div className={"flex flex-nowrap mt-6 mb-10 text-4xl p-2"}><FaLaughWink className={"-rotate-12"}/><h1 className={"font-bold text-4xl ml-2"}>SB ADMIN</h1></div>
                    <hr className={"opacity-50 mb-3"}/>

                    <div className={"flex flex-nowrap  gap-3 opacity-65 hover:opacity-100"}><FaTachometerAlt/><button className={"font-semibold"}>Dashboard</button></div>
                    <hr className={"opacity-50 mb-3 mt-3"}/>

                    <h1 className={"opacity-50 mb-5"}>INTERFACE</h1>

                    {/*{/Dropdown Menu 1/}*/}
                    <div className={"flex mt-4 opacity-65 hover:opacity-100"}>
                        <IoSettingsSharp className={"mr-2 mt-0.5"}/> <Dropdown>
                        <Button>
                            Components
                        </Button>
                        <DropdownMenu>
                            <DropdownItem>New file</DropdownItem>
                            <DropdownItem>Copy link</DropdownItem>
                            <DropdownItem>Edit file</DropdownItem>
                            <DropdownItem className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>

                    {/*{/Dropdown Menu 2/}*/}
                    <div className={"flex mt-8 opacity-65 hover:opacity-100"}>
                        <AiFillTool className={"mr-2 mt-0.5"}/> <Dropdown>
                        <Button>
                            Utilities
                        </Button>
                        <DropdownMenu>
                            <DropdownItem>New file</DropdownItem>
                            <DropdownItem>Copy link</DropdownItem>
                            <DropdownItem>Edit file</DropdownItem>
                            <DropdownItem className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>

                    <hr className={"opacity-50 mt-6 mb-2"}/>


                    <div >
                        <h1 className={"text-[12px] opacity-50"}>ADDONS</h1>
                    </div>


                    <div className={"flex mt-4 opacity-65 hover:opacity-100"}>
                        <FaFolder className={"mr-2 mt-0.5"}/> <Dropdown>
                        <Button>
                            Pages
                        </Button>
                        <DropdownMenu>
                            <DropdownItem>New file</DropdownItem>
                            <DropdownItem>Copy link</DropdownItem>
                            <DropdownItem>Edit file</DropdownItem>
                            <DropdownItem className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>


                    <div className={"flex mt-8 opacity-65 hover:opacity-100"}>
                        <FaChartArea className={"mr-2 mt-0.5"}/>
                        <Button>
                            Charts
                        </Button>

                    </div>


                    <div className={"flex mt-8 opacity-65 hover:opacity-100"}>
                        <FaTable className={"mr-2 mt-0.5"}/>
                        <Button>
                            Tables
                        </Button>

                    </div>


            <hr className={"opacity-50 mb-2 mt-2"}/>


                </div>


            </div>

            {/*sidebar end*/}

            {/*middle*/}

            <div className={"flex-row w-10/12 bg-gray-100 "}>

                {/*search*/}

                <div className={"flex flex-row bg-black w-full h-24"}><h2>Search</h2></div>


                {/*Boxes*/}

                <div className="flex flex-nowrap w-full gap-5 p-6 justify-center">

                    <div className="flex  w-full h-28 p-4 border-l-8 border-[#4e73df] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"text-[#4e73df] text-[14px] "}>EARNINGS (MONTHLY)</p>
                            <p className={"text-gray-600 font-bold"}>$40,000</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <FaCalendar />
                        </div>
                    </div>

                    <div className="flex w-full h-28 p-4 border-l-8 border-[#1cc88a] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"text-[#1cc88a] text-[14px] "}>EARNINGS (ANNUAL)</p>
                            <p className={"text-gray-600 font-bold"}>$215,000</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <MdOutlineAttachMoney />
                        </div>
                    </div>

                    <div className="flex w-full h-28 p-4 border-l-8 border-[#36b9cc] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"flex-row w-full text-[#36b9cc] text-[14px]  "}>TASKS</p>
                            <p className={"flex-row w-full text-gray-600 font-bold "}>50%
                                {/*<div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">*/}
                                {/*    <div className="relative h-6 flex items-center justify-center">*/}
                                {/*        <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[50%] bg-[#36b9cc]"></div>*/}
                                {/*        <div className="relative text-blue-900 font-medium text-sm"></div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </p>

                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <FaClipboardList />
                        </div>
                    </div>

                    <div className="flex w-full h-28 p-4 border-l-8 border-[#f6c23e] rounded-lg shadow-2xl bg-white border-e-gray-300">
                        <div className={"flex flex-wrap w-10/12 "}>
                            <p className={"flex-row w-full text-[#f6c23e] text-[14px]  "}>PENDING REQUESTS</p>
                            <p className={"flex-row w-full text-gray-600 font-bold "}>18</p>
                        </div>

                        <div className={"flex w-2/12 text-gray-600 text-4xl justify-center items-center opacity-50"}>
                            <TiMessages />
                        </div>
                    </div>

                </div>

            </div>
        {/*    middle end*/}

        </div>
    );
}

