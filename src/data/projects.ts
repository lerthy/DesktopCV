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
  //   {
  //   id: 'Pokedox',
  //   name: 'Pokedox',
  //   description: 'This is a modern, visually appealing Pokédex web app built with Next.js and React.It was made while learning AWS Services and doing a challange. It allows you to browse, search, and view details for all Pokémon, with a beautiful and responsive design, also added my own pokedex just becouse I wanted to add a personal touch.',
  //   icon: 'public/assets/kosovarilogo.png',
  //   githubUrl: 'https://github.com/lerthy/Pokemon',
  //   demoUrl: 'https://pokemonchallange.netlify.app/',
  //   technologies: ['React', 'Next.js', 'AWS Services'],
  //   screenshots: [
  //     'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//poke0.png',
  //     'https://ijdizbjsobnywmspbhtv.supabase.co/storage/v1/object/public/percv//poke1.png'
  //   ],
  //   logo: "https://vanilla-web-pokedex.pages.dev/assets/images/pokedex-logo.png"
  // },
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
