import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'KosovAR',
    name: 'KosovAR',
    description: 'Kosovari is a web platform that allows users to report and discuss social and community issues in Kosovo. Users can sign up or log in, post issues by category, upload photos, comment, like posts, and engage with others. The platform uses Supabase for data storage and authentication, offering a simple and user-friendly interface to raise awareness and promote dialogue around local concerns.',
    icon: 'public/assets/kosovarilogo.png',
    githubUrl: 'https://github.com/lerthy/KosovAR',
    demoUrl: 'https://kosovar.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Leaflet Maps', 'Adobe Aero', "Node"],
    screenshots: [
      'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//kosovari1.png',
      'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//kosovari2.png'
    ],
    logo: "https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//kosovarilogo.png"
  }, 
  {
    id: 'Appointly-ks',
    name: 'Appointly-ks',
    description: 'Appointed is a digital platform that connects businesses and customers in Kosovo, making it easier to book appointments in a fast, organized, and professional way. Many businesses in Kosovo still rely on phone calls or messages for scheduling, which leads to confusion, missed appointments, and wasted time.With Appointed, businesses can manage their schedules online, and customers can book appointments instantly, anytime. The platform sends reminders, avoids double bookings, and improves customer service. From salons and dentists to mechanics and freelancers, Appointed helps everyone work smarter.Kosovo needs this now more than ever, as digital tools are essential for growth, efficiency, and professionalism. Appointed is the bridge to a more organized and modern service economy.',
    icon: 'public/assets/logo.png',
    githubUrl: 'https://github.com/lerthy/Appointly-ks',
    demoUrl: 'https://appointly-ks.netlify.app/',
    technologies: ['React', 'Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    screenshots: [
      'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv/Screenshot%202025-09-29%20at%2016.20.29.png',
      'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv/Screenshot%202025-09-29%20at%2016.20.38.png'
    ],
    logo: "https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv/Appointly_Logo.png"
  },
  {
    id: 'gymlift',
    name: 'GymLift',
    description: 'GymLift is a modern, responsive gym and fitness website created in 2020. Built using HTML5, CSS, and JavaScript, it features a clean design with sections for classes, services, team members, and a blog. The site includes a BMI calculator, class timetables, and motivational content to engage users. Developed as a frontend-only project, GymLift showcases your skills in web design and user experience.',
    icon: 'Dumbbell',
    githubUrl: 'https://github.com/lerthy/GYM',
    demoUrl: 'https://gymlift.netlify.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    screenshots: [
      'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//gymlift1.png',
      'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//gymlift2.png'
    ],
    logo: "https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//gymlogo.png"
  }  
  
];

export default projects;
