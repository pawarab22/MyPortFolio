import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Education, Experience, Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 // Portfolio data
  private portfolioOwner = {
    name: 'Abhishek Pawar',
    title: 'Software Engineer & Full Stack Developer',
    email: 'abhipawar0366@gmail.com',
    phone: '+91 (899) 906-5622',
    location: 'Hinjewadi, Pune',
    about: `I'm a passionate software engineer and UI designer with over 2 years 8 months of experience creating beautiful, functional web applications. I specialize in front-end development with a focus on creating intuitive user experiences that solve real problems.
    
    My approach combines technical expertise with design thinking to build products that are not only visually appealing but also highly functional and user-friendly. I'm constantly learning and exploring new technologies to stay at the forefront of web development.`,
    social: {
      github: 'https://github.com/pawarab22',
      linkedin: 'https://www.linkedin.com/in/abhishek-pawar-050a8a1b4',
      twitter: 'https://x.com/abhi_6805?s=21',
      dribbble: 'https://dribbble.com'
    }
  };

 // Projects data
  private projectsSubject = new BehaviorSubject<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with a sleek UI, integrated payment processing, and inventory management.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular','HTML','CSS','Bootstrap','Material UI', 'Node.js', 'MongoDB','Express JS', 'Postman API'],
      category: 'Web Development',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Application (CBS) Core Banking System',
      description: 'Interactive Application for tracking investments, expenses, and financial goals with data visualization.',
      image: './assets/cbs.png',
      technologies: ['Angular', 'Nest.js', 'PostgreSQL', 'Material UI','TypeORM','Thunder Client','Type Script'],
      category: 'Web Application',
      link: 'https://s.patsevacompservtech.com/COMPSERV/CBS/auth/login/simple',
      featured: true
    },
    {
      id: 3,
      title: 'Customer App',
      description: 'Mobile app for Banking Customers show their scheme accounts and Account statement histories.',
      image: './assets/app.jpg',
      technologies: ['IONIC', 'PostgreSQL', 'NestJS', 'Postman API'],
      category: 'Mobile App',
      link: 'https://s.patsevacompservtech.com/GSTKOP/CBS/auth/login/header-footer',
      featured: true
    },
    {
      id: 4,
      title: 'Health & Fitness Gym Management System',
      description: 'Comprehensive health tracking application with workout plans, nutrition logs, and progress visualization.',
      image: './assets/gym.jpg',
      technologies: ['Angular','NodeJS', 'TypeScript', 'MongoDB', 'Express.js'],
      category: 'Web Application',
      link: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Vendor Shop Management System',
      description: 'Vendor Shop management tool with team collaboration features, deadlines, and priority settings.',
      image: './assets/shop managmnt.jpg',
      technologies: ['ReactJS', 'NodeJS', 'Express.js', 'MongoDB'],
      category: 'Web Development',
      link: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Studio',
      description: 'Unified dashboard for managing multiple social media accounts with analytics and scheduling.',
      image: './assets/camerashop.jpg',
      technologies: ['React.js', 'Redux', 'Express','MongoDB', 'Social APIs'],
      category: 'Web Application',
      link: '#',
      featured: false
    }, 
    {
      id: 7,
      title: 'PortFolio Site',
      description: 'Portfolio site for Introduce Self Introduction with career track records track.',
      image: './assets/portfolio.png',
      technologies: ['Angular', 'CSS', 'HTML','Bootstrap', 'angular libraries'],
      category: 'Web Application',
      link: '#',
      featured: false
    }
  ]);

  // Skills data
  private skillsSubject = new BehaviorSubject<Skill[]>([
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Angular', level: 95, category: 'Frontend' },
    { name: 'ReactJs', level: 85, category: 'Frontend' },
    { name: 'Admin/Material UI Template', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'PHP', level: 75, category: 'Frontend' },
    { name: 'Bootstrap', level: 80, category: 'Frontend' },
    { name: 'Tailwind/SCSS', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Nest.js', level: 80, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 85, category: 'Backend' },
    { name: 'TypeORM', level: 80, category: 'Backend' },
    { name: 'SQL/MySql', level: 80, category: 'Backend' },
    { name: 'Oracle', level: 80, category: 'Backend' },
    { name: 'UI Design', level: 85, category: 'Design' },
    { name: 'Figma', level: 90, category: 'Design' },
    // { name: 'Adobe XD', level: 85, category: 'Design' },
    { name: 'Sketch', level: 80, category: 'Design' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' },
    { name: 'Docker', level: 60, category: 'Tools' },
    // { name: 'CI/CD', level: 75, category: 'Tools' }
  ]);

  // Testimonials data
  private testimonialsSubject = new BehaviorSubject<Testimonial[]>([
    {
      id: 1,
      name: 'Abhijit Gatade',
      position: 'CEO at Igaps Technology,Kolhapur',
      content: 'Abhishek Pawar transformed our outdated website into a beautiful, functional platform that perfectly represents our brand. Their technical skills and eye for design are exceptional.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Mahesh Patil',
      position: 'HOD at Compserv Systems, Kolhapur',
      content: 'Working with Alex on our product dashboard was a fantastic experience. They understood our needs perfectly and delivered a solution that exceeded our expectations.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    // {
    //   id: 3,
    //   name: 'Emily Rodriguez',
    //   position: 'Founder of DesignHub',
    //   content: 'Alex has a rare combination of technical excellence and creative vision. They not only built us a highly functional application but ensured it looked stunning too.',
    //   avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
    // }
  ]);

  private experience: Experience[] = [
    {
      role: 'Junier Software Engineer',
      company: 'Compserv System , Kolhapur',
      period: '2023 - 2025',
      details: [
        'Led development of CBS(Core Banking System) web applications using Angular and Nest.js',
        'Mentored junior developers and conducted code reviews',
        'Implemented New Development as Old Windows Based Application reducing deployment time by 40%',
        'Daily Basis Customer Issues Fixing and Solving Problems',
        'ATM/UPI Integration In CBS Application through External Apis',
        'Report Query managing and proper UI Data Fetching From Database',
        'Customer Mobile Application Maintaining Apis and new development',
        'SMS Sending Integration in CBS Application from external Vendor Apis',
        'Gmail Statement generation and Schedule call api generation'
      ]
    },
    {
      role: 'Developer Trainee',
      company: 'Igaps Technology PVT.LTD, Kolhapur',
      period: '2022 - 2023',
      details: [
        'Developed and maintained multiple client projects using React and Express',
        'Optimized database queries improving application performance by 30%',
        'Integrated third-party APIs and payment gateways',
        'User Friendly site developmement and implementation',
        'E-Commerce Site development and responsive sites creation'
      ]
    },
    // {
    //   role: 'Frontend Developer',
    //   company: 'Creative Web Agency',
    //   period: '2017 - 2019',
    //   details: [
    //     'Built responsive web applications using Angular and Vue.js',
    //     'Collaborated with designers to implement pixel-perfect UI',
    //     'Reduced load time by 50% through optimization techniques'
    //   ]
    // }
  ];

   private education: Education[] = [
    {
      name: 'Master Of Computer Application (MCA)',
      collage: 'Bharati Vidyapeeth Institute Of Management,Kadamwadi, Kolhapur',
      period: '2021 - 2023',
      university: 'Deemed To Be Pune University'
    },
    {
      name: 'Bachelors Of Computer Science (BSC)',
      collage: 'Gopal Krishna Gokhale College, Kolhapur',
      period: '2018 - 2021',
      university: 'Shivaji University,Kolhapur'
    },
     {
      name: 'Higher Secondary School Certificate (HSC)',
      collage: 'Vivekananda College, Kolhapur',
      period: '2017 - 2018',
      university: 'Maharashtra State Board,Pune'
    },
     {
      name: 'Secondary School Certificate (SSC)',
      collage: 'The New English School Chandgad',
      period: '2015 - 2016',
      university: 'Maharashtra State Board,Pune'
    },
  
  ];

  constructor() {}

  // Getters for observable data
  getPortfolioOwner() {
    return this.portfolioOwner;
  }

  getProjects() {
    return this.projectsSubject.asObservable();
  }

  getFeaturedProjects() {
    return this.projectsSubject.value.filter(project => project.featured);
  }

  getProjectsByCategory(category: string) {
    return this.projectsSubject.value.filter(project => project.category === category);
  }

  getSkills() {
    return this.skillsSubject.asObservable();
  }

  getSkillsByCategory(category: string) {
    return this.skillsSubject.value.filter(skill => skill.category === category);
  }

  getSkillCategories() {
    const categories = new Set<string>();
    this.skillsSubject.value.forEach(skill => categories.add(skill.category));
    return Array.from(categories);
  }

  getTestimonials() {
    return this.testimonialsSubject.asObservable();
  }

  getExperience(){
    return this.experience;
  }
   getEducation(){
    return this.education;
  }
}