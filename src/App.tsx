import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, Github, Linkedin, Mail, ExternalLink, Code2, Brain, Rocket, ChevronRight } from 'lucide-react';
import { cn } from './lib/utils';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';

// 1. Updated Navbar to use <Link> instead of <a>
const Navbar = () => {
  const location = useLocation(); // Helps us know which page we are on to highlight the active link
  
  const navLinks =[
    { name: 'ABOUT', path: '/' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SKILLS', path: '/skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyber-blue rounded flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#020617]" />
          </div>
          <span className="font-bold tracking-tighter text-xl glow-text">TERRI TAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`transition-colors ${location.pathname === link.path ? 'text-cyber-blue' : 'hover:text-cyber-blue'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ttai2023" target="_blank" rel="noreferrer" className="p-2 hover:text-cyber-blue transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/terri-tai-732a21229" target="_blank" rel="noreferrer" className="p-2 hover:text-cyber-blue transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-12">
    <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/20">
      <Icon className="w-5 h-5 text-cyber-blue" />
    </div>
    <h2 className="text-3xl font-bold tracking-tight text-white uppercase">{children}</h2>
    <div className="h-px flex-1 bg-gradient-to-right from-cyber-blue/20 to-transparent ml-4" />
  </div>
);

// 2. Extracted Sections into Individual Page Components
const AboutPage = () => (
  <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-bold tracking-widest mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue"></span>
        </span>
        COMPUTER ENGINEERING @ UCSD
      </div>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight">
        BUILDING THE <span className="text-cyber-blue glow-text">FUTURE</span> OF ROBOTICS.
      </h1>
      <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
        I'm Terri Tai, a student engineer passionate about autonomous systems, 
        computer vision, and AI. Currently leading RoboCup software at IEEE UCSD.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/projects" className="px-8 py-4 bg-cyber-blue text-[#020617] font-bold rounded-lg hover:bg-neon-blue transition-all hover:scale-105">
          VIEW PROJECTS
        </Link>
        <a href="mailto:y2tai@ucsd.edu" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
          GET IN TOUCH
        </a>
      </div>
    </motion.div>
  </section>
);

const ExperiencePage = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
    <SectionHeading icon={Rocket}>Technical Experience</SectionHeading>
    <div className="space-y-8">
      {EXPERIENCES.map((exp, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-8 cyber-border group"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyber-blue transition-colors">{exp.role}</h3>
              <p className="text-cyber-blue font-medium">{exp.company}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-300 font-mono text-sm">{exp.period}</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">{exp.location}</p>
            </div>
          </div>
          <ul className="space-y-3">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                <ChevronRight className="w-5 h-5 text-cyber-blue shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectsPage = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
    <SectionHeading icon={Code2}>Featured Projects</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 cyber-border flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-cyber-blue/60">{project.date}</span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-slate-400 mb-8 flex-1 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const SkillsPage = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
    <SectionHeading icon={Brain}>Technical Arsenal</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {SKILLS.map((group, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 border-t-2 border-t-cyber-blue/30"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyber-blue shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill, i) => (
              <div key={i} className="px-4 py-2 rounded-lg bg-white/5 text-sm text-slate-300 font-mono">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-12 px-6 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-cyber-blue rounded flex items-center justify-center">
          <Cpu className="w-4 h-4 text-[#020617]" />
        </div>
        <span className="font-bold tracking-tighter text-lg">TERRI TAI</span>
      </div>
      <p className="text-slate-500 text-sm">
        © 2026 Yu Chen (Terri) Tai. Built with futuristic precision.
      </p>
      <div className="flex items-center gap-6">
        <a href="mailto:y2tai@ucsd.edu" className="text-slate-400 hover:text-cyber-blue transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com/ttai2023" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/terri-tai-732a21229" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

// 3. Main App Component wrapping everything in <Router> and <Routes>
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-cyber-blue/30">
        <div className="fixed inset-0 grid-bg pointer-events-none opacity-20" />
        <Navbar />

        <main className="relative pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}