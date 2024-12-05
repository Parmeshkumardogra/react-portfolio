import React from "react"
const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-10">
                    Hello! My name is Parmesh Kumar, and I am a dedicated software developer with over 2 years of experience. My expertise spans a range of technologies, including Golang, Gin, JavaScript, Node.js, Express.js, MongoDB, MySQL, Redis, Kafka, Azure DevOps, Data Structures and Algorithms, Low-Level Design, React.js, Python, C++, Linux, and Git. These technologies have been crucial in shaping my journey as a proficient developer.
                    <br />I am passionate about coding and constantly strive to stay updated with emerging technologies. Beyond technical skills, I enjoy collaborating within a team, brainstorming ideas, and contributing to the development of innovative solutions.
                    <br />I believe that the combination of strong technical expertise and effective teamwork results in outstanding outcomes.
                    Thank you for visiting My Portfolio!
                </p>

            </div>
        </div>
    )
}
export default About
