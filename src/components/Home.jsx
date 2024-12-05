import React from "react"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import MyImage from "../assests/myImage2.jpg"
import {Link} from "react-scroll"
const Home = () => {
    return (
        <div name= "home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Software Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    Software Engineer with 2+ years of experince in developing scalable applications and high-volume APIs. Proficient in Golang, MongoDB & MySQL with a proven track record of optimizing performance & delivering impactful solutions through innovative discovery.</p>
                    <div>
                        <Link to="techStack" smooth duration={500}  offset={-100} className="group text-white w-fit px-6 py-3 my-2 rounded-md flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            TechStack
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardDoubleArrowRight size={20} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={MyImage} alt="my pic" className="rounded-2xl mx-auto w-2/3 md:w-96"></img>
                </div>
            </div>
        </div>
    )
}
export default Home
