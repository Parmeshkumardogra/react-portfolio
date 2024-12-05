import React from "react"
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            iconHtml: (
                <>
                    LinkdeIn <FaLinkedin size={20} />
                </>
            ),
            href: "https://www.linkedin.com/in/parmeshkumarapu143",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            iconHtml: (
                <>
                    Github <FaGithub size={20} />
                </>
            ),
            href: "https://www.github.com/Parmeshkumardogra"
        },
        {
            id: 3,
            iconHtml: (
                <>
                    Email <HiOutlineMail size={20} />
                </>
            ),
            href: "mailto:parmeshdogra9999@gmail.com"
        },
        {
            id: 4,
            iconHtml: (
                <>
                    Resume <BsFillPersonLinesFill size={20} />
                </>
            ),
            href: "/ParmeshKumar.pdf",
            download: true,

        },
        {
            id: 5,
            iconHtml: (
                <>
                    Hackerrank <FaHackerrank size={20} />
                </>
            ),
            href: "https://www.hackerrank.com/godcoderankpu99",
            style: "rounded-br-md",

        }
    ]
    
    return <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {
                links.map(({ id, href, iconHtml, style, download}) => {
                   return(
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                        <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer"
                        >
                            {iconHtml}
                        </a>
                    </li>
                   )
                })
            }
        </ul>
    </div>
}
export default SocialLinks
