import React from 'react';
import {DownloadIcon } from 'lucide-react';

const ResumeContent: React.FC = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Resume</h1>
        <a 
          href="/assets/resume.pdf" 
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          download
        >
          <DownloadIcon className="w-4 h-4" />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="space-y-8">
        {/* Professional Summary */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Professional Summary
          </h2>
          <p className="text-gray-700">
           As a computer science student, I've worked on several university projects that covered both front-end and back-end development. These include building full-stack web applications using technologies like HTML, CSS, JavaScript, and Java, as well as client-server applications and database integration. I'm eager to keep learning and apply my skills in real-world projects.    
          </p>
        </section>

        {/* Work Experience */}
        <section>
          <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Education and Training</h3>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-lg font-medium text-gray-800">Certificate of Completion</h4>
            <span className="text-sm text-gray-600">02/2020 - 08/2022</span>
          </div>
          <h5 className="text-md text-blue-600 mb-2">Pen (Peer Educators Network)</h5>
          <p className="text-gray-700">
          HTML,CSS,JS,MySQL and PHP          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-lg font-medium text-gray-800">Certeficate of Completion</h4>
            <span className="text-sm text-gray-600">10/12/2021-15/12/2022</span>
          </div>
          <h5  className="text-md text-blue-600 mb-2">IpkoFoundation</h5>
          <p className="text-gray-700">
HTML,CSS,JS           </p>
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-lg font-medium text-gray-800">AWS Cloud Clubs Infrastructure Camper</h4>
            <span className="text-sm text-gray-600">06/2024</span>
          </div>
          <h5  className="text-md text-blue-600 mb-2">Polymath Services</h5>
          <p className="text-gray-700">AWS Services & Cloud  </p>
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-lg font-medium text-gray-800">Workshop Certeficate - Data Privatcy</h4>
            <span className="text-sm text-gray-600">15/02/2025</span>
          </div>
          <h5  className="text-md text-blue-600 mb-2"> Cacttus Education</h5>
          
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-lg font-medium text-gray-800">Bachelor of  Computer Science</h4>
            <span className="text-sm text-gray-600">2022 - presnet</span>
          </div>
          <h5 className="text-md text-blue-600">FSHMN-UP</h5>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-lg font-medium text-gray-800">Exchange Student</h4>
            <span className="text-sm text-gray-600">01/09/2024- 27/01/2025</span>
          </div>
          <h5 className="text-md text-blue-600">Hanze University Groningen</h5>
        </div>
      </div>
        </section>

      

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Technical Skills</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>JavaScript / TypeScript</li>
                <li>React </li>
                <li>HTML5 / CSS3</li>
                <li>CSS </li>
                <li>Node.js / Express</li>
                <li>Git / GitHub</li>
                <li>Java</li>
                <li>MySQL / MongoDB</li>
                <li>Supabase</li>
                <li>Adobe Aero</li>
                <li>Leaflet Maps</li>
                <li>Figma / Adobe XD</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Soft Skills</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Team Leadership</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Certifications
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <div className="font-medium">AWS Cloud Clubs Infrastructure Camper</div>
              <div className="text-sm text-gray-600">Polymath Services, 2024</div>
            </li>
            <li>
              <div className="font-medium"> Data Privatcy</div>
              <div className="text-sm text-gray-600">Cacttus Education, 2025</div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumeContent;
