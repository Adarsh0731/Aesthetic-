import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, GraduationCap, Users, ThumbsUp, ChevronRight, PlayCircle, Star, ShieldCheck, Briefcase, Code2, Server, Cloud, Cpu, Terminal, Search } from 'lucide-react';

const GridOverlay = () => (
  <div className="grid-overlay px-6 lg:px-12">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="grid-col-line" />
    ))}
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-brand-bg/95 backdrop-blur-xl border-border-subtle py-4' : 'bg-transparent border-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 border border-brand-accent flex items-center justify-center group-hover:rotate-90 transition-transform duration-700">
            <div className="w-5 h-5 bg-brand-accent rotate-45"></div>
          </div>
          <span className="font-display font-black text-2xl tracking-[-0.05em] uppercase text-brand-text">AESTHETIC</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[9px] font-bold uppercase tracking-[0.4em] text-brand-muted">
          <a href="#" className="hover:text-brand-accent transition-colors">Curriculum</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Ecosystem</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Intelligence</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Company</a>
          <button className="geometric-btn border-brand-accent/20 text-brand-text hover:bg-brand-accent hover:border-brand-accent hover:text-white tracking-[0.4em]">INITIATE</button>
        </div>

        <button className="md:hidden p-2 text-brand-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-border-subtle p-12 flex flex-col gap-8 md:hidden overflow-hidden"
          >
            <a href="#" className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40 hover:text-brand-accent">Curriculum</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40 hover:text-brand-accent">Ecosystem</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40 hover:text-brand-accent">Intelligence</a>
            <button className="geometric-btn border-brand-accent text-brand-accent w-full">INITIATE</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-border-subtle">
      <GridOverlay />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12 gap-0 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-8 py-20 lg:py-40 lg:border-r lg:border-border-subtle lg:pr-20"
        >
          <div className="label-mono flex items-center gap-4">
             <span className="w-12 h-[1px] bg-brand-accent"></span>
             PROTOCOL v.4.0 TECHNICAL EXCELLENCE
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-[-0.06em] mb-12 text-brand-text uppercase italic-serif-parent">
            CURATING <br/>
            <span className="text-brand-accent">FUTURE</span> <br/>
            <span className="serif-italic lowercase tracking-tight opacity-90 text-brand-muted">architects.</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-lg mb-16 leading-relaxed font-light">
            A refined ecosystem for high-stakes technical training. We bridge the gap between raw talent and architectural mastery in global software systems.
          </p>
          <div className="flex flex-wrap gap-8">
            <button className="bg-brand-accent text-white px-14 py-6 font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-brand-accent-hover transition-all shadow-[0_10px_30px_rgba(79,70,229,0.2)]">
              Enter Ecosystem
            </button>
            <button className="border border-brand-accent/20 text-brand-text px-14 py-6 font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-brand-text hover:text-white transition-all">
              View Blueprint
            </button>
          </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-4 flex flex-col justify-end p-12 lg:p-20 relative overflow-hidden group border-b lg:border-b-0 border-border-subtle">
           <motion.div
             initial={{ opacity: 0, scale: 1.2 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
             className="absolute inset-0 z-0 opacity-30 group-hover:scale-110 transition-transform duration-[3000ms] grayscale"
           >
             <img 
               src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
               alt="Aesthetic Technology" 
               className="w-full h-full object-cover"
             />
           </motion.div>
           <div className="relative z-10 p-10 border border-brand-accent/10 bg-white/60 backdrop-blur-md">
              <div className="label-mono !mb-4">INTELLIGENCE UNIT</div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-text">AUTONOMOUS <br/>CAREER <br/>SYSTEMS</h3>
              <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-muted group-hover:text-brand-accent transition-colors cursor-pointer">
                LEARN MORE <ChevronRight size={14} />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Network Integrity', value: '99.9%', icon: ThumbsUp },
    { label: 'Ecosystem Partners', value: '142+', icon: Briefcase },
    { label: 'System Response', value: '0.8ms', sub: 'LATENCY' },
    { label: 'Global Nodes', value: '12K+', icon: Users },
  ];

  return (
    <section className="border-b border-border-subtle overflow-hidden relative">
      <GridOverlay />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-48 grid grid-cols-12 gap-0 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="col-span-6 lg:col-span-3 border-r border-border-subtle last:border-r-0 flex items-center justify-center p-12 group hover:bg-white transition-all duration-700">
            <div className="flex flex-col text-center">
              <span className="text-5xl font-black leading-none text-brand-text transition-all group-hover:scale-110 group-hover:text-brand-accent">{stat.value}</span>
              <span className="text-[9px] uppercase font-bold text-brand-muted/40 tracking-[0.4em] mt-4 whitespace-nowrap">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CourseCard: React.FC<{ course: any; onFeedback: (title: string) => void }> = ({ course, onFeedback }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-brand-card border border-border-subtle flex flex-col group h-full transition-all hover:shadow-2xl hover:shadow-brand-accent/5"
  >
    <div className="h-64 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
      <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute top-0 right-0 px-3 py-1 bg-brand-accent text-white font-mono text-[9px] uppercase tracking-widest">
        {course.category}
      </div>
      {course.completed && (
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-2 border border-brand-accent/20 flex items-center gap-2 shadow-lg">
          <ShieldCheck size={14} className="text-brand-accent" />
          <span className="text-[8px] font-black uppercase tracking-widest text-brand-text">Completed</span>
        </div>
      )}
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-brand-accent">{course.rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-1 h-1 ${i < Math.floor(course.rating) ? "bg-brand-accent" : "bg-brand-muted/20"}`} />
            ))}
          </div>
        </div>
        <button 
          onClick={() => onFeedback(course.title)}
          className="text-[8px] font-bold uppercase tracking-widest text-brand-accent/40 hover:text-brand-accent transition-colors"
        >
          Leave Feedback
        </button>
      </div>
      <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-tight text-brand-text group-hover:text-brand-accent transition-colors">{course.title}</h3>
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-border-subtle">
        <p className="text-xl font-mono font-bold text-brand-text">{course.price}</p>
        <button className="text-[10px] font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-text transition-colors flex items-center gap-2">
          Details <ChevronRight size={14} />
        </button>
      </div>
    </div>
  </motion.div>
);

const FeedbackModal = ({ isOpen, onClose, courseTitle }: { isOpen: boolean; onClose: () => void; courseTitle: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-bg/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-white border border-border-subtle p-12 relative"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-brand-muted hover:text-brand-text transition-colors">
          <X size={20} />
        </button>
        
        <div className="label-mono">Course Feedback</div>
        <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-text mb-2">{courseTitle}</h3>
        <p className="text-brand-muted text-sm font-light mb-8">Share your technical insights and experience with this module.</p>
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text mb-3">Rating</label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" className="text-brand-muted hover:text-brand-accent transition-colors">
                  <Star size={20} />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text mb-3">Your Intel</label>
            <textarea 
              rows={4}
              placeholder="PROVIDE ARCHITECTURAL FEEDBACK..."
              className="w-full bg-brand-bg/5 border border-border-subtle p-4 text-[11px] font-medium uppercase tracking-widest focus:outline-none focus:border-brand-accent transition-colors"
            />
          </div>
          
          <button type="submit" className="w-full bg-brand-text text-white py-4 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-brand-accent transition-all">
            SUBMIT FEEDBACK
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const SkillCard: React.FC<{ skill: any }> = ({ skill }) => (
  <motion.div 
    whileHover={{ 
      y: -8,
      backgroundColor: "rgba(79, 70, 229, 0.04)",
      boxShadow: "0 20px 40px rgba(79, 70, 229, 0.1)"
    }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="p-10 border border-border-subtle group relative overflow-hidden flex flex-col h-full bg-white"
  >
    <div className="flex items-start justify-between mb-8 relative z-10">
      <div className="p-4 border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
        <skill.icon size={24} />
      </div>
      <div className="label-mono opacity-20 !mb-0">{skill.code}</div>
    </div>
    
    <div className="relative z-10 flex-1 flex flex-col">
      <h4 className="text-lg font-black uppercase tracking-tight text-brand-text mb-4 group-hover:text-brand-accent transition-colors">
        {skill.name}
      </h4>
      <p className="text-brand-muted text-xs leading-relaxed font-light mb-6 max-w-[200px]">
        {skill.description}
      </p>

      {/* Technical Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {skill.tags.map((tag: string, i: number) => (
          <span key={i} className="px-2 py-0.5 bg-brand-accent/5 border border-brand-accent/10 text-[8px] font-bold uppercase tracking-widest text-brand-accent/60 group-hover:border-brand-accent/30 transition-colors">
            {tag}
          </span>
        ))}
      </div>
      
      <motion.button 
        whileTap={{ scale: 0.9, x: 5 }}
        className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-muted hover:text-brand-accent transition-colors mt-auto w-fit"
      >
        LEARN MORE <ChevronRight size={14} />
      </motion.button>
    </div>

    {/* Architectural Accent */}
    <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-brand-accent/10 group-hover:border-brand-accent group-hover:w-full transition-all duration-700 pointer-events-none"></div>
  </motion.div>
);

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Software Testing", "Development", "Intelligence"];
  const courses = [
    {
      title: "Manual & Automation Testing",
      category: "Software Testing",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600",
      price: "$499",
      rating: 4.8,
      students: "2.4k",
      completed: true
    },
    {
      title: "Full Stack Development",
      category: "Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      price: "$599",
      rating: 4.9,
      students: "3.1k",
      completed: false
    },
    {
      title: "Data Analytics Bootcamp",
      category: "Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      price: "$699",
      rating: 4.7,
      students: "1.8k",
      completed: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="courses" className="py-32 px-6 lg:px-12 relative border-b border-border-subtle bg-brand-card">
      <GridOverlay />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-0 mb-20 border-b border-border-subtle pb-12">
          <div className="col-span-12 lg:col-span-8 lg:border-r lg:border-border-subtle lg:pr-12">
            <div className="label-mono">SELECTED CURRICULUM</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-text mb-8 italic-serif-parent">
              PREMIUM <br/><span className="text-brand-accent">ACADEMY</span> <span className="serif-italic lowercase tracking-tight opacity-50 ml-4 font-light text-brand-muted">modules.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end w-full">
              <div className="flex-1 w-full max-w-md">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted/40 group-focus-within:text-brand-accent transition-colors" size={16} />
                  <input 
                    type="text" 
                    placeholder="SEARCH MODULES..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-border-subtle p-5 pl-12 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-accent transition-all"
                  />
                </div>
              </div>
              <p className="text-brand-muted max-w-xs font-light leading-relaxed text-sm">
                Curated by global leads to bridge the critical gap between theory and high-stakes practice.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end p-6 lg:p-12">
            <div className="flex flex-col gap-6 text-[9px] uppercase font-bold tracking-[0.4em] text-brand-muted/40">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left hover:text-brand-text transition-all hover:translate-x-2 ${activeCategory === cat ? 'text-brand-accent translate-x-2 font-black' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-border-subtle min-h-[400px]">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, i) => (
              <div key={i} className="border-r border-border-subtle last:border-r-0">
                <CourseCard course={course} onFeedback={setSelectedCourse} />
              </div>
            ))
          ) : (
            <div className="col-span-3 flex flex-col items-center justify-center p-32 text-center">
              <div className="w-12 h-12 border border-brand-accent/20 flex items-center justify-center text-brand-muted mb-6">
                <Search size={24} className="opacity-20" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter text-brand-text mb-2">No Modules Found</h4>
              <p className="text-[10px] font-bold text-brand-muted/40 uppercase tracking-widest">Adjust your search parameters and try again.</p>
            </div>
          )}
        </div>

        <AnimatePresence>
          {selectedCourse && (
            <FeedbackModal 
              isOpen={!!selectedCourse} 
              onClose={() => setSelectedCourse(null)} 
              courseTitle={selectedCourse} 
            />
          )}
        </AnimatePresence>

        {/* Technical Core Section */}
        <div className="mt-32">
          <div className="grid grid-cols-12 gap-0 mb-12 items-end">
            <div className="col-span-12 lg:col-span-8">
               <div className="label-mono">TECHNICAL CORE</div>
               <h3 className="text-3xl font-black uppercase tracking-tighter text-brand-text italic-serif-parent">
                ESSENTIAL <span className="text-brand-accent">MODULES</span> <span className="serif-italic lowercase text-brand-muted ml-2 font-light opacity-40">expertise layers.</span>
               </h3>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
               <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-muted pb-2">REF: PROTOCOL_SKILLS_v.4</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-subtle">
            {[
              { 
                name: "React Architecture", 
                code: "UI.01", 
                description: "Master high-performance component patterns and advanced state orchestration.", 
                icon: Code2,
                tags: ["State Mgmt", "Component Design", "Performance"] 
              },
              { 
                name: "Node.js Systems", 
                code: "SRV.02", 
                description: "Architecting scalable backend ecosystems with autonomous worker protocols.", 
                icon: Server,
                tags: ["Microservices", "Event Loop", "Security"]
              },
              { 
                name: "AWS Lambda", 
                code: "CLD.03", 
                description: "Deployment of serverless intelligence units across global cloud nodes.", 
                icon: Cloud,
                tags: ["Serverless", "Event-Driven", "Cost Control"]
              },
              { 
                name: "Intelligent APIs", 
                code: "INTEL.04", 
                description: "Integration of high-stakes AI models into production-ready software systems.", 
                icon: Cpu,
                tags: ["LLM Integration", "Vector DB", "Latency Sync"]
              }
            ].map((skill, i) => (
              <div key={i} className="border-r border-border-subtle last:border-r-0 border-b lg:border-b-0">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-32 border border-border-subtle bg-white p-12 relative overflow-hidden group">
           <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
             <div>
               <div className="label-mono">Featured Track</div>
               <h3 className="text-3xl font-display font-black uppercase tracking-tight text-brand-text mb-6">Master Software Testing</h3>
               <p className="text-brand-muted mb-10 max-w-lg font-light leading-relaxed px-4 border-l-2 border-brand-accent">Get access to our premium video course bundle covering everything from manual testing basics to advanced automation frameworks.</p>
               <button className="bg-brand-accent text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20">Buy Online Course</button>
             </div>
             <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm aspect-video bg-slate-100 border border-border-subtle group cursor-pointer overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt="Course Preview" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-brand-accent/10 backdrop-blur-md flex items-center justify-center text-brand-accent border border-brand-accent/20 group-hover:scale-110 transition-transform">
                       <PlayCircle size={32} fill="currentColor" className="text-brand-accent" />
                     </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Anita Sharma", role: "QA Engineer @ Google", text: "Aesthetic literally changed my life. The mock interviews were tougher than the real ones!" },
    { name: "John Doe", role: "Full Stack Dev @ Amazon", text: "The hands-on projects helped me build a portfolio that finally got recruiters' attention." },
    { name: "Priya K.", role: "SDET @ Microsoft", text: "The ATS-friendly resume support is 100% legit. My response rate tripled after following their advice." },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 relative border-b border-border-subtle bg-white">
       <GridOverlay />
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-12 mb-20">
             <div className="col-span-12 lg:col-span-6">
                <div className="label-mono">Success Stories</div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-text mb-6">ALUMNI <br/>IMPACT</h2>
             </div>
             <div className="col-span-12 lg:col-span-6 flex items-end">
                <p className="text-brand-muted max-w-md font-light leading-relaxed text-lg italic-serif-parent">Curated testimonials from the <span className="serif-italic lowercase opacity-60">alumni ecosystem.</span></p>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-border-subtle">
            {reviews.map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border-r border-border-subtle last:border-r-0 flex flex-col hover:bg-brand-bg transition-all"
              >
                <div className="text-brand-accent font-mono mb-8 font-bold">0{i+1}.</div>
                <p className="text-brand-muted italic leading-relaxed mb-12 flex-1 font-light lg:text-lg">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-bg flex items-center justify-center overflow-hidden border border-border-subtle">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`} alt={review.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text text-sm uppercase tracking-tight">{review.name}</h4>
                    <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-brand-muted pt-40 pb-12 px-6 lg:px-12 border-t border-border-subtle relative overflow-hidden">
      <GridOverlay />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-0 mb-32 border-b border-border-subtle pb-32">
          <div className="col-span-12 lg:col-span-5 lg:border-r lg:border-border-subtle lg:pr-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 border border-brand-accent flex items-center justify-center">
                <div className="w-5 h-5 bg-brand-accent rotate-45"></div>
              </div>
              <span className="font-display font-black text-3xl tracking-tighter uppercase text-brand-text">AESTHETIC</span>
            </div>
            <p className="leading-relaxed mb-12 font-light text-lg">Curating the next generation of technical architects through high-performance training and ecosystem integration.</p>
            <div className="flex gap-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-text hover:text-brand-accent transition-all cursor-pointer">LinkedIn</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-text hover:text-brand-accent transition-all cursor-pointer">Twitter</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-text hover:text-brand-accent transition-all cursor-pointer">Intelligence</span>
            </div>
          </div>
          
          <div className="col-span-6 lg:col-span-2 lg:border-r lg:border-border-subtle lg:px-12 mt-20 lg:mt-0">
            <h4 className="text-brand-text text-[10px] uppercase font-bold tracking-[0.5em] mb-10">Academy</h4>
            <ul className="space-y-6 text-[10px] font-bold tracking-[0.3em] uppercase">
              <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-muted">Testing Labs</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-muted">Development</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-muted">Intelligence</a></li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:border-r lg:border-border-subtle lg:px-12 mt-20 lg:mt-0">
            <h4 className="text-brand-text text-[10px] uppercase font-bold tracking-[0.5em] mb-10">Protocols</h4>
            <ul className="space-y-6 text-[10px] font-bold tracking-[0.3em] uppercase">
              <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-muted">Placement</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-muted">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors text-brand-muted">Terms</a></li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:pl-20 mt-20 lg:mt-0">
            <h4 className="text-brand-text text-[10px] uppercase font-bold tracking-[0.5em] mb-10">Newsletter</h4>
            <div className="flex flex-col gap-6">
               <input type="email" placeholder="IDENTITY@DOMAIN.COM" className="bg-transparent border-b border-brand-text/10 pb-6 focus:outline-none focus:border-brand-accent text-[10px] font-bold tracking-[0.3em] uppercase text-brand-text" />
               <button className="bg-brand-text text-white px-10 py-6 font-bold uppercase text-[10px] tracking-[0.5em] hover:bg-brand-accent hover:text-white transition-all shadow-xl">INITIATE SUB</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase font-bold tracking-[0.4em]">
          <p>© 2026 AESTHETIC ECOSYSTEM. ALL RIGHTS SECURED.</p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
              <span>NETWORK STABILITY: 100%</span>
            </div>
            <span className="opacity-40">LONDON // TOKYO // SAN FRANCISCO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Stats />
      
      <section className="py-32 px-6 lg:px-12 relative border-b border-border-subtle overflow-hidden">
        <GridOverlay />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0 relative z-10 border border-border-subtle overflow-hidden">
           <div className="lg:col-span-6 lg:border-r lg:border-border-subtle p-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                  alt="Aesthetic Training" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
           </div>
           <div className="lg:col-span-6 p-12 lg:p-24 flex flex-col justify-center bg-white/60 backdrop-blur-xl">
              <div className="label-mono">STRATEGIC FRAMEWORK</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-text mb-12 leading-[0.85] italic-serif-parent">THE <br/><span className="text-brand-accent">VISION</span> <br/><span className="serif-italic ml-2 lowercase text-brand-muted font-light opacity-50 tracking-tight">statement.</span></h2>
              <div className="space-y-16">
                <div className="flex gap-10 group">
                  <div className="w-1.5 h-16 bg-brand-accent flex-shrink-0 group-hover:h-20 transition-all duration-700"></div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-brand-text uppercase tracking-tight">Technical Mastery</h3>
                    <p className="text-brand-muted text-sm font-light leading-relaxed max-w-sm">Engineered training modules designed for individuals to master the most complex system architectures in global tech.</p>
                  </div>
                </div>
                <div className="flex gap-10 group">
                  <div className="w-1.5 h-16 bg-brand-muted/10 flex-shrink-0 group-hover:bg-brand-accent group-hover:h-20 transition-all duration-700"></div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-brand-text uppercase tracking-tight">Ecosystem Deployment</h3>
                    <p className="text-brand-muted text-sm font-light leading-relaxed max-w-sm">Serving as the primary conduit between top-tier technical talent and industry-leading corporate ecosystems.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      <Courses />
      
      <section className="py-32 px-6 lg:px-12 relative border-b border-border-subtle overflow-hidden">
        <GridOverlay />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-0 mb-20 items-end">
            <div className="col-span-12 lg:col-span-8 lg:border-r lg:border-border-subtle lg:pr-20">
               <div className="label-mono">CORE ADVANTAGE</div>
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-text leading-[0.9] italic-serif-parent">WHY <br/><span className="text-brand-accent">AESTHETIC</span> <span className="serif-italic lowercase text-brand-muted ml-4 font-light opacity-40 tracking-tight">protocols?</span></h2>
            </div>
            <div className="col-span-12 lg:col-span-4 p-8 lg:p-12">
               <p className="text-brand-muted text-lg font-light leading-relaxed border-l-2 border-brand-accent pl-8">We curate more than just courses. We engineer professional identities via a high-performance mentorship ecosystem.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-subtle">
            {[
              { title: "Elite Mentorship", desc: "Curated instruction from veterans with 15+ years in architectural roles.", icon: Users },
              { title: "Deployment Labs", desc: "Simulation of high-stakes, real-world deployment scenarios.", icon: PlayCircle },
              { title: "Accelerator Cell", desc: "Architectural career planning and identity optimization.", icon: Briefcase },
              { title: "Legacy Access", desc: "Infinite retrieval of all ecosystem datasets and updates.", icon: Star },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.03)" }}
                className="p-12 border-r border-border-subtle last:border-r-0 flex flex-col group transition-all duration-700"
              >
                <div className="w-14 h-14 border border-border-subtle flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-1000">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-6 uppercase tracking-tight text-brand-text group-hover:text-brand-accent transition-colors">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Support Section */}
      <section className="py-32 px-6 lg:px-12 relative border-b border-border-subtle bg-brand-bg overflow-hidden">
        <GridOverlay />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 relative z-10 border border-border-subtle">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-white lg:border-r lg:border-border-subtle">
             <div className="label-mono">Career Architecture</div>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-text mb-10 leading-[0.9]">DEVELOPMENT <br/><span className="text-brand-accent">ACCELERATOR</span></h2>
             <p className="text-brand-muted mb-12 text-lg font-light leading-relaxed">We provide a comprehensive support matrix ensuring that every graduate is positioned for long-term professional success in global markets.</p>
             <ul className="space-y-6 mb-12">
                {[
                  "ATS-Optimized Identity Strategy",
                  "Simulated Deployment Labs",
                  "Architectural Career Planning",
                  "Global Intelligence Network"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-[10px] uppercase tracking-widest text-brand-text">
                    <div className="w-2 h-2 bg-brand-accent rotate-45"></div>
                    {item}
                  </li>
                ))}
             </ul>
             <button className="bg-brand-text text-white px-12 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl shadow-brand-text/10">
                Access Accelerator
             </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-0">
             {[
               { title: "ATS ENGINE", desc: "Algorithmic profile optimization.", color: "bg-brand-bg/40" },
               { title: "SIM LABS", desc: "Practical interview simulations.", color: "bg-brand-accent/5" },
               { title: "BOARD ACCESS", desc: "Exclusive referrals to partners.", color: "bg-brand-bg/60" },
               { title: "CODE REVIEW", desc: "Portfolio audit & refactoring.", color: "bg-brand-bg/40" },
             ].map((feature, i) => (
               <div key={i} className={`${feature.color} p-12 border-b border-r border-border-subtle last:border-b-0 flex flex-col justify-center group hover:bg-white transition-all cursor-pointer`}>
                  <div className="text-brand-accent font-mono text-[10px] mb-4 group-hover:scale-110 transition-transform origin-left">0{i+1}.</div>
                  <h4 className="text-lg font-black uppercase tracking-tighter text-brand-text mb-2">{feature.title}</h4>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-widest">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Placement Partners */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white">
        <GridOverlay />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-center text-[10px] font-black text-brand-muted/40 uppercase tracking-[0.5em] mb-16">Ecosystem Placement Partners</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-40 grayscale hover:opacity-100 transition-all duration-1000 cursor-none">
             <span className="text-2xl font-black tracking-tighter text-brand-text font-display">GOOGLE.INTEL</span>
             <span className="text-2xl font-black tracking-tighter text-brand-text font-display">AMAZON.AWS</span>
             <span className="text-2xl font-black tracking-tighter text-brand-text font-display">MICROSOFT.CLOUD</span>
             <span className="text-2xl font-black tracking-tighter text-brand-text font-display">INFOSYS.SYSTEMS</span>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
