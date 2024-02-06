import { FaTachometerAlt } from "react-icons/fa";
import { FaLaughWink } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {DropdownItem, DropdownMenu} from "react-bootstrap";
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

                    {/*Drop Down*/}

                    <button className="flex space-x-4 "> jj <IoIosArrowForward />
                        <DropdownMenu title="Dropdown">
                            <DropdownItem href="#">Item 1</DropdownItem>
                            <DropdownItem href="#">Item 2</DropdownItem>
                            <DropdownItem href="#">Item 3</DropdownItem>
                        </DropdownMenu>

                    </button>


                    <div> <button>gdg</button></div>

                    <hr className={"opacity-50 mb-2 mt-2"}/>
                </div>


            </div>

            <div className={"flex w-10/12 bg-white"}>

            </div>

        </div>
    );
}

