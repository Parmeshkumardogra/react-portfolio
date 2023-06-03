import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white items-center justify-center">
      <div className="container text-gray-200 mx-auto px-4 py-6 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Experience</p>
        <div className="cursor-pointer mt-10 mx-auto max-w-lg p-8 rounded-lg hover:mb-[-20px] hover:scale-110 hover:border-y-white hover:border-y-8 hover:shadow-xl duration-300">
          <h2 className="text-2xl font-bold mb-4">Jio Platforms Limited</h2>
          <h3 className="text-lg font-bold mb-4">Graduate Engineer Trainee <br/>(Software Developer)</h3>
          <p className="text-base leading-relaxed">
            Currently, I am actively involved in a project where I am utilizing my expertise in JavaScript, Node.js, Express.js, and MongoDB to develop robust and scalable web applications. Additionally, I am also expanding my knowledge by exploring Docker, Kubernetes, and Kafka and also interested in cloud-based technologies like AWS and Azure. I have a keen interest in deployment and messaging systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
