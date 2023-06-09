import React  from "react"
const Contact =()=>{
    return <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="flex flex-col p-4 justify-center text-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="pt-6 pb-2">Submit the form below to get in touch with me or</p>
                <p>If you want to give review or suggestions for my portfolio please share through contact form</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <form action = "https://getform.io/f/63367537-ee58-4997-a0dd-d2600519d73c"
             method= "POST"
             className="flex flex-col w-full md:w-1/2">
                <input type="text" 
                name="name" 
                placeholder="Enter your Name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></input>
                <input type="text" name="email" placeholder="Enter your Email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></input>
                <textarea
                name="message"
                rows={10}
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                >
                </textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300">
                    Let's talk
                </button>
            </form>
            </div>
        </div>
    </div>
}
export default Contact