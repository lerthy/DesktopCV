import React from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';

const AboutContent: React.FC = () => {
  const { isMobile, isTablet } = useMobile();

  const getImageSize = () => {
    if (isMobile) {
      return 'w-32 h-32';
    } else if (isTablet) {
      return 'w-36 h-36';
    }
    return 'w-40 h-40';
  };

  const getTitleSize = () => {
    if (isMobile) {
      return 'text-xl';
    }
    return 'text-2xl';
  };

  const getSubtitleSize = () => {
    if (isMobile) {
      return 'text-lg';
    }
    return 'text-xl';
  };

  const getSectionTitleSize = () => {
    if (isMobile) {
      return 'text-lg';
    }
    return 'text-xl';
  };

  const getGridCols = () => {
    if (isMobile) {
      return 'grid-cols-1';
    } else if (isTablet) {
      return 'grid-cols-2';
    }
    return 'grid-cols-2 md:grid-cols-4';
  };

  return (
    <div className="h-full overflow-auto">
      <div className={`flex flex-col ${isMobile ? 'gap-4' : 'md:flex-row gap-6'} items-start`}>
        <div className={`w-full ${isMobile ? 'flex justify-center' : 'md:w-1/3 flex justify-center'}`}>
          <img
            src="https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//profilephoto.jpg"
            alt="Lerdi Salihi"
            className={`${getImageSize()} object-cover rounded-full border-4 border-blue-500 shadow-lg`}
          />
        </div>
        
        <div className={`w-full ${isMobile ? '' : 'md:w-2/3'}`}>
          <h1 className={`${getTitleSize()} font-bold text-gray-800 mb-2`}>Lerdi Salihi</h1>
          <h2 className={`${getSubtitleSize()} text-blue-600 mb-4`}>Student for now</h2>
          
          <div className="flex space-x-3 mb-6">
            <a 
              href="https://github.com/lerthy"  
              className="text-gray-700 hover:text-gray-900 active:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lerdi-salihi-63a146273" 
              className="text-gray-700 hover:text-gray-900 active:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            A bachelor student in the University of Prishtina "Hasan Prishtina" and an
            exchange student at Hanze University Groningen, Faculty of Computer Science.
            Energetic, positive, hardworking person who likes to think outside the box and I
            am constantly seeking opportunities to challenge myself and push beyond my
            limits in order to grow both personally and professionally. I have a proven track
            record of effective leadership and communication skills, coupled with a creative
            approach to problem-solving that enables me to develop unique and practical
            solutions to challenges.         
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As a computer science student, I've worked on several university projects that covered both front-end and back-end development. These include building full-stack web applications using technologies like HTML, CSS, JavaScript, and Java, as well as client-server applications and database integration. I'm eager to keep learning and apply my skills in real-world projects.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className={`${getSectionTitleSize()} font-semibold text-gray-800 mb-4`}>Skills</h3>
        <div className={`grid ${getGridCols()} gap-3`}>
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
        <h3 className={`${getSectionTitleSize()} font-semibold text-gray-800 mb-4`}>Education and Training</h3>
        
        <div className="mb-6">
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start ${isMobile ? 'gap-1' : 'items-center'} mb-1`}>
            <h4 className="text-lg font-medium text-gray-800">Certificate of Completion</h4>
            <span className="text-sm text-gray-600">02/2020 - 08/2022</span>
          </div>
          <h5 className="text-md text-blue-600 mb-2">Pen (Peer Educators Network)</h5>
          <p className="text-gray-700">
            HTML,CSS,JS,MySQL and PHP
          </p>
        </div>
        
        <div className="mb-6">
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start ${isMobile ? 'gap-1' : 'items-center'} mb-1`}>
            <h4 className="text-lg font-medium text-gray-800">Certificate of Completion</h4>
            <span className="text-sm text-gray-600">10/12/2021-15/12/2022</span>
          </div>
          <h5 className="text-md text-blue-600 mb-2">IpkoFoundation</h5>
          <p className="text-gray-700">
            HTML,CSS,JS
          </p>
        </div>
        
        <div className="mb-6">
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start ${isMobile ? 'gap-1' : 'items-center'} mb-1`}>
            <h4 className="text-lg font-medium text-gray-800">AWS Cloud Clubs Infrastructure Camper</h4>
            <span className="text-sm text-gray-600">06/2024</span>
          </div>
          <h5 className="text-md text-blue-600 mb-2">Polymath Services</h5>
          <p className="text-gray-700">AWS Services & Cloud</p>
        </div>
        
        <div className="mb-6">
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start ${isMobile ? 'gap-1' : 'items-center'} mb-1`}>
            <h4 className="text-lg font-medium text-gray-800">Workshop Certificate - Data Privacy</h4>
            <span className="text-sm text-gray-600">15/02/2025</span>
          </div>
          <h5 className="text-md text-blue-600 mb-2">Cacttus Education</h5>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className={`${getSectionTitleSize()} font-semibold text-gray-800 mb-4`}>Education</h3>
        
        <div className="mb-4">
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start ${isMobile ? 'gap-1' : 'items-center'} mb-1`}>
            <h4 className="text-lg font-medium text-gray-800">Bachelor of Computer Science</h4>
            <span className="text-sm text-gray-600">2022 - present</span>
          </div>
          <h5 className="text-md text-blue-600">FSHMN-UP</h5>
        </div>
        
        <div>
          <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-start ${isMobile ? 'gap-1' : 'items-center'} mb-1`}>
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
  const { isMobile } = useMobile();
  
  return (
    <div className={`bg-gray-100 rounded-lg ${isMobile ? 'p-4' : 'p-3'}`}>
      <div className="flex justify-between items-center mb-1">
        <span className={`font-medium text-gray-800 ${isMobile ? 'text-sm' : ''}`}>{name}</span>
      </div>
    </div>
  );
};

export default AboutContent;