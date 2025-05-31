import React from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//profilephoto.jpg"
            alt="Lerdi Salihi"
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Lerdi Salihi</h1>
          <h2 className="text-xl text-blue-600 mb-4">Student for now</h2>
          
          <div className="flex space-x-3 mb-6">
            <a href="https://github.com/lerthy"  className="text-gray-700 hover:text-gray-900">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="www.linkedin.com/in/lerdi-salihi-63a146273" className="text-gray-700 hover:text-gray-900">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-700 mb-4">
          A bachelor student in the University of Prishtina "Hasan Prishtina" and an
          exchange student at Hanze University Groningen, Faculty of Computer Science.
          Energetic, positive, hardworking person who likes to think outside the box and I
          am constantly seeking opportunities to challenge myself and push beyond my
          limits in order to grow both personally and professionally. I have a proven track
          record of effective leadership and communication skills, coupled with a creative
          approach to problem-solving that enables me to develop unique and practical
          solutions to challenges.         
          </p>
          <p className="text-gray-700 mb-4">
          As a computer science student, I've worked on several university projects that covered both front-end and back-end development. These include building full-stack web applications using technologies like HTML, CSS, JavaScript, and Java, as well as client-server applications and database integration. I'm eager to keep learning and apply my skills in real-world projects.          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <SkillItem name="React" />
          <SkillItem name="TypeScript" />
          <SkillItem name="JavaScript" />
          <SkillItem name="HTML/CSS" />
          <SkillItem name="Supabase" />
          <SkillItem name="Node.js" />
          <SkillItem name="Figma" />
          <SkillItem name="and more" />
        </div>
      </div>
      
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
    </div>
  );
};

interface SkillItemProps {
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-800">{name}</span>
      </div>
    </div>
  );
};

export default AboutContent;