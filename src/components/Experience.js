import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white items-center justify-center">
      <div className="container text-gray-200 mx-auto px-4 py-6 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Experience</p>
        <div className="cursor-pointer mt-10 mx-auto max-w-lg p-8 rounded-lg hover:mb-[-20px] hover:scale-110 hover:border-y-white hover:border-y-8 hover:shadow-xl duration-300">
          <h2 className="text-2xl font-bold mb-4">Jio Platforms Limited</h2>
          <h3 className="text-lg font-bold mb-4">Software Developement Engineer 1</h3>
          <p className="text-base leading-relaxed">
                <ul>
                  <li><strong>API Development:</strong> Architected high-performance APIs in Golang to process up to 80 million records in 12 hours.</li>
                  <li><strong>API Development:</strong> Developed CRUD and REST APIs in Node.js, reducing response times by 40%.</li>
                  <li><strong>Performance Optimization:</strong> Enhanced performance by implementing caching mechanisms and optimizing database queries in MySQL and MongoDB.</li> 
                  <li><strong>Performance Optimization:</strong> Reducing data retrieval time by 30% and improving application responsiveness.</li>
                  <li><strong>Advanced Technologies:</strong> Leveraged Redis and Kafka to optimize data processing throughput by 60%, significantly enhancing system efficiency and performance.</li>
                  <li><strong>Agile Methodology:</strong> Delivered high-quality projects within the SDLC while meeting deadlines and aligning with organizational goals.</li>
                  <li><strong>Collaboration</strong> Collaborated with cross-functional teams to design and implement robust, maintainable codebases. </li>
                  <li><strong>Mentorship:</strong> Conducted code reviews and mentored junior developers to ensure adherence to best practices.</li>
</ul>    
        </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
