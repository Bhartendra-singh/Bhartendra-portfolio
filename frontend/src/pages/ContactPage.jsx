import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="bg-panel border border-glass-border rounded-2xl p-6 lg:p-8">
      <h2 className="font-heading font-bold text-2xl mb-1">Get in Touch</h2>
      <div className="w-8 h-1 bg-accent rounded-full mb-6"></div>

      <p className="text-text-secondary text-sm leading-relaxed text-justify mb-8 max-w-lg">
        I'm currently open to internship and full-time opportunities. Whether you have
        a question, an opportunity, or just want to connect — feel free to reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        <a href="mailto:bhartendra750@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-glass border border-glass-border hover:border-accent/40 transition-colors">
          <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
            <FiMail size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-text-secondary/70">Email</p>
            <p className="text-xs text-text-primary">bhartendra750@gmail.com</p>
          </div>
        </a>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-glass border border-glass-border">
          <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
            <FiMapPin size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-text-secondary/70">Location</p>
            <p className="text-xs text-text-primary">Dehradun, India</p>
          </div>
        </div>

        <a href="https://github.com/Bhartendra-singh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-glass border border-glass-border hover:border-accent/40 transition-colors">
          <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
            <FiGithub size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-text-secondary/70">GitHub</p>
            <p className="text-xs text-text-primary">Bhartendra-singh</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/bhartendra-singh-17764a282/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-glass border border-glass-border hover:border-accent/40 transition-colors">
          <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
            <FiLinkedin size={16} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-text-secondary/70">LinkedIn</p>
            <p className="text-xs text-text-primary">Bhartendra Singh</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;