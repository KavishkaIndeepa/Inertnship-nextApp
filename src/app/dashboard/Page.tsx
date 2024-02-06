import { FaTachometerAlt } from "react-icons/fa";
import { FaLaughWink } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
// import {Dropdown, DropdownItem, DropdownMenu} from "react-bootstrap";
// import {IoSettingsSharp} from "react-icons/io5";
import React from "react";
// import {Button} from "@restart/ui";
// import {AiFillTool} from "react-icons/ai";
// import {FaChartArea, FaFolder, FaTable} from "react-icons/fa6";

import {Dropdown, DropdownMenu, DropdownItem, Button, DropdownTrigger} from "@nextui-org/react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";

export default function Page() {
    return (

        <div className={"flex "}>

            <div className={"flex bg-blue-600 w-2/12 h-screen"}>



                <div className={"flex flex-col p-2"}>

                    <div className={"flex flex-nowrap mt-6 mb-10 text-4xl p-2"}><FaLaughWink className={"-rotate-12"}/><h1 className={"font-bold text-4xl ml-2"}>SB ADMIN</h1></div>
                    <hr className={"opacity-50 mb-3"}/>

                    <div className={"flex flex-nowrap  gap-3"}><FaTachometerAlt/><button className={"font-semibold"}>Dashboard</button></div>
                    <hr className={"opacity-50 mb-3 mt-3"}/>

                    <h1 className={"opacity-50 mb-5"}>INTERFACE</h1>

                    {/*{/Dropdown Menu 1/}*/}
                    <div className={"flex mt-4"}>
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
                    <div className={"flex mt-8"}>
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


                    <div className={"flex mt-4"}>
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


                    <div className={"flex mt-8"}>
                        <FaChartArea className={"mr-2 mt-0.5"}/>
                        <Button>
                            Charts
                        </Button>

                    </div>


                    <div className={"flex mt-8"}>
                        <FaTable className={"mr-2 mt-0.5"}/>
                        <Button>
                            Tables
                        </Button>

                    </div>


            <hr className={"opacity-50 mb-2 mt-2"}/>


                </div>


            </div>

            <div className={"flex flex-row w-10/12 bg-white "}>



                <div className="flex flex-row w-screen gap-5 p-6">
                    <div className="w-full h-20 p-4 bg-blue-300">1</div>
                    <div className="w-full h-20 p-4 bg-green-300">2</div>
                    <div className="w-full h-20 p-4 bg-yellow-300">3</div>
                    <div className="w-full h-20 p-4 bg-red-600">4</div>
                </div>

            </div>

        </div>
    );
}

