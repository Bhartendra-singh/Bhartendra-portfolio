import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Sidebar = () => {
  return (
    <aside style={{ backgroundColor: '#161616' }} className="w-full lg:w-72 border border-glass-border rounded-2xl p-6 flex flex-col gap-8 lg:sticky lg:top-6 lg:z-40">
      <div>
        <img
           src="/profile.jpg"
           alt="Bhartendra Singh"
           className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover border border-glass-border"
        />

        <h2 className="font-semibold text-base mb-2 text-center">Bhartendra Singh</h2>
        <div className="text-center mb-6">
          <span className="inline-block text-xs bg-glass px-3 py-1 rounded-full">
            MERN Stack Developer
          </span>
        </div>

        <div className="space-y-1 text-left mb-6">
          <div className="flex items-center gap-3 py-2.5 border-t border-glass-border">
            <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <FiMail size={13} />
            </span>
            <div>
              <span className="block text-[9px] uppercase tracking-wide text-text-secondary/70">Email</span>
              <span className="text-xs text-text-secondary">bhartendra750@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3 py-2.5 border-t border-b border-glass-border">
            <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <FiMapPin size={13} />
            </span>
            <div>
              <span className="block text-[9px] uppercase tracking-wide text-text-secondary/70">Location</span>
              <span className="text-xs text-text-secondary">Dehradun, India</span>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-[9px] uppercase tracking-wide text-accent mb-1.5 font-semibold">Currently exploring</p>
          <p className="text-xs text-text-secondary leading-relaxed">
            Researching ML & LLMs to bring smarter, AI-powered detection into Civic Issue Mapper.
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-glass-border space-y-2.5">
        <a href="https://github.com/Bhartendra-singh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-glass border border-glass-border text-xs text-text-secondary hover:border-accent hover:text-accent transition-colors">
          <FiGithub size={14} /> GitHub
        </a>
        <a href="https://leetcode.com/u/Bhartendra_singh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-glass border border-glass-border text-xs text-text-secondary hover:border-accent hover:text-accent transition-colors">
          <SiLeetcode size={14} /> LeetCode
        </a>
        <a href="https://www.linkedin.com/in/bhartendra-singh-17764a282/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-glass border border-glass-border text-xs text-text-secondary hover:border-accent hover:text-accent transition-colors">
          <FiLinkedin size={14} /> LinkedIn
        </a>
        <a href="/BhartendraSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/40 text-accent text-xs font-medium hover:bg-accent hover:text-white transition-colors">
          <FiDownload size={14} /> Download Resume
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;