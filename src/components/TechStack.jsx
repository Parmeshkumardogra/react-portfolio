import React from "react"
import javascript from "../assests/javascript.png"
import golang from "../assests/golang.png"
import python from "../assests/python.png"
import nodejs from "../assests/nodejs.png"
import reactjs from "../assests/reactjs.png"
import express from "../assests/express.png"
import mongodb from "../assests/mongodb.png"
import mysql from "../assests/mysql.png"
import redis from "../assests/redis.png"
import git from "../assests/git.png"
import github from "../assests/github.png"
import rest from "../assests/rest.png"
const TechStack = () => {
    const ProgramingLangArr = [
        {
            id: 1,
            techStack: "GoLang",
            pic: golang
        },
        {
            id: 2,
            techStack: "Python",
            pic: python
        },
        {
            id: 3,
            techStack: "Javascript",
            pic: javascript
        }
    ]
    const FrameWorkArr = [
        {
            id: 1,
            techStack: "Node.js",
            pic: nodejs
        },
        {
            id: 2,
            techStack: "Express.js",
            pic: express
        },
        {
            id: 3,
            techStack: "React.js",
            pic: reactjs
        }
    ]
    const DatabaseArr = [
        {
            id: 1,
            techStack: "Mysql",
            pic: mysql
        },
        {
            id: 2,
            techStack: "MongoDB",
            pic: mongodb
        },
        {
            id: 3,
            techStack: "Redis",
            pic: redis
        }

    ]
    const ExtraArr = [
        {
            id: 1,
            techStack: "Git",
            pic: git
        },
        {
            id: 2,
            techStack: "Git-Hub",
            pic: github
        },
        {
            id: 3,
            techStack: "REST full API with Node.js",
            pic: rest
        }

    ]
    return (
        <div name="techStack" className="bg-gradient-to-b from-black to-gray-800 min-h-screen text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="pb-14 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">My TechStack</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {FrameWorkArr.map(({ id, techStack, pic }) => (
                        <div key={id} className="flex flex-col items-center rounded-md transition duration-300 hover:bg-gray-200 hover:text-black p-4">
                            <img src={pic} alt={techStack} className="w-32 h-auto rounded-md" />
                            <p className="mt-2">{techStack}</p>
                        </div>
                    ))}
                    {DatabaseArr.map(({ id, techStack, pic }) => (
                        <div key={id} className="flex flex-col items-center rounded-md transition duration-300 hover:bg-gray-200 hover:text-black p-4">
                            <img src={pic} alt={techStack} className="w-32 h-auto rounded-md" />
                            <p className="mt-2">{techStack}</p>
                        </div>
                    ))}
                    {ExtraArr.map(({ id, techStack, pic }) => (
                        <div key={id} className="flex flex-col items-center rounded-md transition duration-300 hover:bg-gray-200 hover:text-black p-4">
                            <img src={pic} alt={techStack} className="w-32 h-auto rounded-md" />
                            <p className="mt-2">{techStack}</p>
                        </div>
                    ))}
                    {ProgramingLangArr.map(({ id, techStack, pic }) => (
                        <div key={id} className="flex flex-col items-center rounded-md transition duration-300 hover:bg-gray-200 hover:text-black p-4">
                            <img src={pic} alt={techStack} className="w-32 h-auto rounded-md" />
                            <p className="mt-2">{techStack}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default TechStack
