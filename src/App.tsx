import React, { useState, useEffect, ReactNode } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Github, Linkedin, Mail, ExternalLink, Code2, Brain, Rocket, Target, Microscope, Volume2, VolumeX } from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';

// --- SYNTHESIZED AUDIO ENGINES --- //

let audioCtx: AudioContext | null = null;
const getAudioContext = () => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  return audioCtx;
};

const playHUDTransitionSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
};

const playTypingSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "square";
    osc.frequency.setValueAtTime(600 + Math.random() * 200, ctx.currentTime); // Random pitch for mechanical sound
    gain.gain.setValueAtTime(0.008, ctx.currentTime); // Very faint
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.02);
  } catch (e) {}
};

// --- GLOBAL STATES --- //
let globalLogsDecrypted = false;

// --- HUD THEME COMPONENTS --- //

const BootSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const[text, setText] = useState<string[]>([]);
  // Personal Boot System
  const sequence =[
    "INITIATING T.TAI_OS v8.31...",
    "LOADING ALL_NIGHTER_SEQUENCE...",
    "COMPILING HACKATHON_PROTOCOLS...",
    "BYPASSING TUTORING_BREAK...",
    "DECRYPTING ENGINEERING_LOGS...",
    "WELCOME TO MY PAGE - TERRI."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(prev =>[...prev, sequence[i]]);
      i++;
      if (i === sequence.length) {
        clearInterval(interval);
        setTimeout(onComplete, 600); 
      }
    }, 250); 
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px) brightness(2)" }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="fixed inset-0 z-[99999] bg-[#020b12] flex flex-col justify-center px-8 md:px-24 font-mono text-sm md:text-base pointer-events-none"
    >
      {text.map((line, idx) => (
        <div key={idx} className={idx === sequence.length - 1 ? "text-[#00f3ff] font-bold mt-4 animate-pulse" : "text-[#8ab4f8]/70"}>
          {idx === sequence.length - 1 ? "" : "> "}{line}
        </div>
      ))}
      <div className="w-3 h-5 bg-[#00f3ff] mt-2 animate-pulse" />
    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); },[pathname]);
  return null;
};

const GridBackground = () => {
  const[mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; 
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  },[]);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-[-2] transition-transform duration-700 ease-out"
        style={{
          backgroundColor: '#03101c',
          backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)` 
        }}
      />
      <motion.div
        animate={{ opacity:[0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.08) 0%, transparent 70%)' }}
      />
    </>
  );
};

// ✨ UPGRADED: Logs now only play once per session
const SystemLogs = () => {
  const [logs, setLogs] = useState<{msg: string, time: string}[]>([]);
  const [isComplete, setIsComplete] = useState(globalLogsDecrypted); // ← start true if already done
  const logMessages = [
    "FETCHING EXP_LOGS...",
    "BYPASSING FIREWALL...",
    "DECRYPTING CLEARANCES...",
    "LOGS UNLOCKED."
  ];
  
  useEffect(() => {
    if (globalLogsDecrypted) {
      const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
      setLogs(logMessages.map(msg => ({ msg, time: timestamp })));
      setIsComplete(true); // ← ensure green
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logMessages.length) {
        const timestamp = new Date().toISOString().split('T')[1].slice(0, -1);
        setLogs(prev => [...prev, { msg: logMessages[currentIndex], time: timestamp }]);
        currentIndex++;
        if (currentIndex === logMessages.length) {
          globalLogsDecrypted = true;
          setIsComplete(true); // ← turn green immediately when last log added
        }
      } else {
        clearInterval(interval);
      }
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[#00f3ff] text-xs md:text-sm mb-12 bg-[#00f3ff]/5 p-4 border border-[#00f3ff]/20 rounded h-40 flex flex-col justify-end relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,243,255,0.05)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f3ff]/30 to-transparent animate-[shimmer_2s_infinite]" />
      {logs.map((log, i) => (
        <motion.div key={i} initial={globalLogsDecrypted ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3 mb-1">
          <span className="text-slate-500 opacity-70">[{log.time}]</span>
          <span className={i === logMessages.length - 1 && isComplete ? "text-green-400 font-bold" : ""}>{log.msg}</span>
        </motion.div>
      ))}
      <div className="w-2 h-4 bg-[#00f3ff] mt-1 animate-pulse" />
    </div>
  );
};

const SciFiPanel: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative bg-[#021b2b]/40 border border-[#00f3ff]/40 p-8 shadow-[0_0_15px_rgba(0,243,255,0.15)] backdrop-blur-sm group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#021b2b]/50 hover:border-[#00f3ff]/80 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] z-0 hover:z-10 ${className}`}>
    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f3ff] transition-all group-hover:scale-125 group-hover:border-[#00f3ff]" />
    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f3ff] transition-all group-hover:scale-125 group-hover:border-[#00f3ff]" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f3ff] transition-all group-hover:scale-125 group-hover:border-[#00f3ff]" />
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f3ff] transition-all group-hover:scale-125 group-hover:border-[#00f3ff]" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#00f3ff]/5 to-transparent pointer-events-none transition-opacity group-hover:opacity-50" />
    <div className="relative z-10">{children}</div>
  </div>
);

const SectionHeading: React.FC<{ children: ReactNode; icon: any }> = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="relative w-12 h-12 flex items-center justify-center border border-[#00f3ff] bg-[#00f3ff]/10 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#00f3ff]" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#00f3ff]" />
      <Icon className="w-6 h-6 text-[#00f3ff]" />
    </div>
    <h2 className="text-3xl font-bold tracking-widest text-white uppercase" style={{ textShadow: '0 0 10px rgba(0,243,255,0.5)' }}>
      {children}
    </h2>
    <div className="flex-1 flex items-center gap-2 ml-4">
      <div className="h-px flex-1 bg-gradient-to-right from-[#00f3ff] to-transparent" />
      <div className="w-2 h-2 rounded-full bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]" />
    </div>
  </div>
);

const Navbar: React.FC<{ soundEnabled: boolean, toggleSound: () => void }> = ({ soundEnabled, toggleSound }) => {
  const location = useLocation();
  const navLinks =[
    { name: 'SYSTEM_STATUS (ABOUT)', path: '/' },
    { name: 'EXP_LOGS', path: '/experience' },
    { name: 'PROJECT_ARCHIVES', path: '/projects' },
    { name: 'TECH_ARSENAL', path: '/skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020b12]/90 backdrop-blur-md border-b border-[#00f3ff]/30 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 bg-[#00f3ff]/20 border border-[#00f3ff] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#00f3ff]" />
            <div className="absolute inset-0 animate-ping opacity-20 bg-[#00f3ff]" />
          </div>
          <span className="font-mono font-bold tracking-widest text-xl text-white" style={{ textShadow: '0 0 8px #00f3ff' }}>
            T.TAI
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-[#00f3ff]/60">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`transition-all duration-300 hover:text-[#00f3ff] hover:drop-shadow-[0_0_8px_#00f3ff] ${location.pathname === link.path ? 'text-[#00f3ff] border-b border-[#00f3ff] pb-1' : ''}`}>
              [{link.name}]
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-4 text-[#00f3ff]">
          <button onClick={toggleSound} className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-2 hover:bg-[#00f3ff]/10 rounded border border-transparent hover:border-[#00f3ff]/50 transition-all text-xs font-mono mr-2" title="Toggle HUD Sounds">
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-50" />}
            <span className="hidden sm:inline opacity-70">SND:{soundEnabled ? 'ON' : 'OFF'}</span>
          </button>
          <div className="w-px h-6 bg-[#00f3ff]/30 mr-2" />
          <a href="mailto:y2tai@ucsd.edu" className="p-2 hover:bg-[#00f3ff]/10 rounded border border-transparent hover:border-[#00f3ff]/50 transition-all"><Mail className="w-4 h-4 md:w-5 md:h-5" /></a>
          <a href="https://github.com/ttai2023" target="_blank" rel="noreferrer" className="p-2 hover:bg-[#00f3ff]/10 rounded border border-transparent hover:border-[#00f3ff]/50 transition-all"><Github className="w-4 h-4 md:w-5 md:h-5" /></a>
          <a href="https://linkedin.com/in/terri-tai-732a21229" target="_blank" rel="noreferrer" className="p-2 hover:bg-[#00f3ff]/10 rounded border border-transparent hover:border-[#00f3ff]/50 transition-all"><Linkedin className="w-4 h-4 md:w-5 md:h-5" /></a>
        </div>
      </div>
    </nav>
  );
};

// ✨ UPGRADED: Added typing sound integration
const TerminalTypingEffect: React.FC<{ soundEnabled: boolean }> = ({ soundEnabled }) => {
  const[displayedText, setDisplayedText] = useState("");
  const fullText = "BUILDING FUTURE SYSTEMS...";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 80;
    const delayStart = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          if (soundEnabled && index < fullText.length) playTypingSound(); // Play sound!
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, typingSpeed);
      return () => clearInterval(intervalId);
    }, 800);
    return () => clearTimeout(delayStart);
  },[soundEnabled]);

  const part1 = "BUILDING ";
  const part2 = "FUTURE";
  let firstString = "", highlightString = "", endString = "";

  if (displayedText.length <= part1.length) {
    firstString = displayedText;
  } else if (displayedText.length <= part1.length + part2.length) {
    firstString = part1;
    highlightString = displayedText.slice(part1.length);
  } else {
    firstString = part1;
    highlightString = part2;
    endString = displayedText.slice(part1.length + part2.length);
  }

  return (
    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase min-h-[1.5em] text-center">
      {firstString}
      <span className="text-[#00f3ff]" style={{ textShadow: '0 0 20px #00f3ff' }}>{highlightString}</span>
      {endString}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity:[1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[0.4em] h-[0.9em] bg-[#00f3ff] ml-1 shadow-[0_0_10px_#00f3ff] align-baseline"
      />
    </h1>
  );
};

const AboutPage: React.FC<{ soundEnabled: boolean }> = ({ soundEnabled }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-12 relative">
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease:[0.22, 1, 0.36, 1], delay: 0.2 }}
      className="w-full max-w-4xl my-12"
    >
      <SciFiPanel className="text-center py-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#00f3ff]/50 bg-[#00f3ff]/10 text-[#00f3ff] font-mono text-xs font-bold tracking-[0.2em] mb-8"
        >
          <Target className="w-4 h-4 animate-pulse" />
          COMPUTER_ENGINEER // UCSD_2027
        </motion.div>
        
        <TerminalTypingEffect soundEnabled={soundEnabled} />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="text-lg md:text-xl text-[#8ab4f8] mb-12 max-w-2xl mx-auto font-mono leading-relaxed text-left inline-block w-full sm:w-auto"
        >
          <p>&gt; Subject: Terri Yu Chen Tai.</p>
          <p>&gt; Specialization: Autonomous Systems, Robotics & AI.</p>
          <p>&gt; Current Missions:</p>
          <div className="pl-6 md:pl-10 ml-2 mt-2 space-y-2 border-l border-[#00f3ff]/40 text-[#00f3ff]">
            <p className="flex items-start gap-2"><span className="text-slate-500">|-</span> CSE Tutor @ CSE Department UCSD.</p>
            <p className="flex items-start gap-2"><span className="text-slate-500">|-</span> ELC Tutor @ Jacobs School of Engineering UCSD.</p>
            <p className="flex items-start gap-2"><span className="text-slate-500">|-</span> Technical Development: Projects @ WIC UCSD.</p>
            <p className="flex items-start gap-2"><span className="text-slate-500">|-</span> Hard Hack Director @ HKN UCSD.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 font-mono"
        >
          <Link to="/projects" className="group relative px-8 py-4 bg-[#00f3ff]/10 border border-[#00f3ff] text-[#00f3ff] font-bold tracking-widest overflow-hidden transition-all hover:bg-[#00f3ff] hover:text-[#03101c] hover:shadow-[0_0_20px_#00f3ff]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            ACCESS_PROJECTS
          </Link>
          <a 
            href="/terri-tai-portfolio/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="Terri_Tai_Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 border border-[#00f3ff]/30 text-white font-bold tracking-widest hover:border-[#00f3ff] hover:bg-[#00f3ff]/5 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            DOWNLOAD_RESUME
          </a>
          <a href="https://linkedin.com/in/terri-tai-732a21229" target="_blank" rel="noreferrer" className="px-8 py-4 border border-[#00f3ff]/30 text-white font-bold tracking-widest hover:border-[#00f3ff] hover:bg-[#00f3ff]/5 transition-all">
            ESTABLISH_LINK
          </a>
        </motion.div>
      </SciFiPanel>
    </motion.div>
  </section>
);

const ExperiencePage = () => {
  const researchLogs = EXPERIENCES.filter(exp => exp.role.toLowerCase().includes('research') || exp.company.toLowerCase().includes('lab'));
  const techExperiences = EXPERIENCES.filter(exp => !exp.role.toLowerCase().includes('research') && !exp.company.toLowerCase().includes('lab'));

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <SystemLogs />
      <div className="mb-24">
        <SectionHeading icon={Rocket}>Technical Experience</SectionHeading>
        <div className="space-y-8">
          {techExperiences.map((exp, idx) => (
            <motion.div key={`tech-${idx}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: idx * 0.1, ease:[0.22, 1, 0.36, 1] }}>
              <SciFiPanel>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#00f3ff]/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                    <p className="text-[#00f3ff] font-mono mt-1 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00f3ff] rounded-full animate-pulse" />{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right font-mono text-sm">
                    <p className="text-[#00f3ff]/80">[{exp.period}]</p>
                    <p className="text-slate-400 mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#8ab4f8] font-mono text-sm leading-relaxed"><span className="text-[#00f3ff] mt-0.5">&gt;</span><span>{item}</span></li>
                  ))}
                </ul>
              </SciFiPanel>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeading icon={Microscope}>Research Logs</SectionHeading>
        <div className="space-y-8">
          {researchLogs.map((exp, idx) => (
            <motion.div key={`research-${idx}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: idx * 0.1, ease:[0.22, 1, 0.36, 1] }}>
              <SciFiPanel>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#00f3ff]/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                    <p className="text-[#00f3ff] font-mono mt-1 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00f3ff] rounded-full animate-pulse" />{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right font-mono text-sm">
                    <p className="text-[#00f3ff]/80">[{exp.period}]</p>
                    <p className="text-slate-400 mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#8ab4f8] font-mono text-sm leading-relaxed"><span className="text-[#00f3ff] mt-0.5">&gt;</span><span>{item}</span></li>
                  ))}
                </ul>
              </SciFiPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Expandable Project Cards
interface ProjectCardProps {
  project: any;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease:[0.22, 1, 0.36, 1] }} className="h-full">
      <SciFiPanel className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b border-[#00f3ff]/20 pb-2">
          <span className="text-xs font-mono text-[#00f3ff]/60">DATE: {project.date}</span>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-[#00f3ff] hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{project.title}</h3>
        <p className="text-[#8ab4f8] font-mono text-sm flex-1 leading-relaxed">
          {project.description}
        </p>
        
        {/* Expandable Details Section */}
        {project.details && (
          <div className="mt-4">
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-[#00f3ff] text-xs font-mono hover:text-white transition-colors flex items-center gap-2">
              {isExpanded ? "[-] HIDE_ARCHIVE_DATA" : "[+] DECRYPT_FULL_ARCHIVE"}
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="pt-4 mt-4 border-t border-[#00f3ff]/20 text-slate-400 text-sm leading-relaxed">
                    {project.details}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-8">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-[10px] font-mono tracking-widest text-[#00f3ff] uppercase">{tag}</span>
          ))}
        </div>
      </SciFiPanel>
    </motion.div>
  );
};

const ProjectsPage = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
    <SectionHeading icon={Code2}>Project Archives</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

const SkillsPage = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
    <SectionHeading icon={Brain}>Technical Arsenal Data</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {SKILLS.map((group, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: idx * 0.1, ease:[0.22, 1, 0.36, 1] }} className="h-full">
          {/* ✨ UPGRADED: Added h-full and flex flex-col to force alignment */}
          <SciFiPanel className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-[#00f3ff]/20 pb-4">
              <div className="w-2 h-2 bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3 mt-auto">
              {group.skills.map((skill, i) => (
                <div key={i} className="px-3 py-1 border border-[#00f3ff]/30 bg-[#00f3ff]/5 text-xs text-[#8ab4f8] font-mono hover:bg-[#00f3ff]/20 hover:text-white transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </SciFiPanel>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-[#00f3ff]/20 bg-[#020b12] py-8 px-6 mt-auto relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Cpu className="w-4 h-4 text-[#00f3ff]" />
        <span className="font-mono font-bold tracking-widest text-[#00f3ff] text-sm">T.TAI_OS v8.31</span>
      </div>
      <p className="text-[#00f3ff]/50 font-mono text-xs">© 2026 TERRI YU CHEN TAI // ALL SYSTEMS OPERATIONAL...HOPEFULLY.</p>
      <div className="flex items-center gap-6">
        <a href="mailto:y2tai@ucsd.edu" className="text-[#00f3ff]/70 hover:text-[#00f3ff] hover:shadow-[0_0_10px_#00f3ff] transition-all"><Mail className="w-5 h-5" /></a>
        <a href="https://github.com/ttai2023" target="_blank" rel="noreferrer" className="text-[#00f3ff]/70 hover:text-[#00f3ff] hover:shadow-[0_0_10px_#00f3ff] transition-all"><Github className="w-5 h-5" /></a>
        <a href="https://linkedin.com/in/terri-tai-732a21229" target="_blank" rel="noreferrer" className="text-[#00f3ff]/70 hover:text-[#00f3ff] hover:shadow-[0_0_10px_#00f3ff] transition-all"><Linkedin className="w-4 h-4 md:w-5 md:h-5" /></a>
      </div>
    </div>
  </footer>
);

const AppContent = () => {
  const location = useLocation();
  const[hasBooted, setHasBooted] = useState(false);
  const[soundEnabled, setSoundEnabled] = useState(false);

  // ✨ FIX 5: Programmatically changing the Document Title
  useEffect(() => {
    document.title = "Terri Tai | Portfolio";
  },[]);

  useEffect(() => {
    if (hasBooted && soundEnabled) playHUDTransitionSound();
  },[location.pathname, hasBooted, soundEnabled]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#00f3ff]/30 text-slate-200 overflow-x-hidden relative">
      <AnimatePresence>
        {!hasBooted && <BootSequence key="boot" onComplete={() => setHasBooted(true)} />}
      </AnimatePresence>

      <GridBackground />
      <ScrollToTop />
      <Navbar soundEnabled={soundEnabled} toggleSound={() => setSoundEnabled(!soundEnabled)} />
      
      <main className="relative pt-16 flex-grow">
        <AnimatePresence mode="wait">
          {hasBooted && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.98, filter: "brightness(2) blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "brightness(2) blur(5px)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Routes location={location}>
                <Route path="/" element={<AboutPage soundEnabled={soundEnabled} />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return <Router><AppContent /></Router>;
}