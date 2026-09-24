import { FiCode, FiServer, FiDatabase, FiBookOpen } from 'react-icons/fi';

const skillCards = [
  { icon: FiCode, title: 'Frontend', desc: 'React, JavaScript, Tailwind CSS, HTML5, CSS3' },
  { icon: FiServer, title: 'Backend', desc: 'Node.js, Express.js, REST APIs, JWT Auth' },
  { icon: FiDatabase, title: 'Database', desc: 'MongoDB, Mongoose' },
  { icon: FiBookOpen, title: 'Core CS', desc: 'DSA, OS, DBMS, Computer Networks, OOPs (Java)' },
];

const AboutPage = () => {
  return (
    <div className="bg-panel border border-glass-border rounded-2xl p-6 lg:p-8">
      <h2 className="font-heading font-bold text-2xl mb-1">About Me</h2>
      <div className="w-8 h-1 bg-accent rounded-full mb-6"></div>

      <p className="text-text-secondary text-sm leading-relaxed text-justify mb-4">
        I'm pursuing a Bachelor of Technology in Computer Science and Engineering at
        Graphic Era Deemed to be University, where I've developed a strong foundation
        in building full-stack web applications that solve real, everyday problems.
        My core stack is MERN — React powers the interfaces I build, while Node.js and
        Express handle the logic behind them, backed by MongoDB for data.
      </p>

      <p className="text-text-secondary text-sm leading-relaxed text-justify mb-10">
        Outside of coursework, I spend a lot of time in competitive programming,
        working through data structures and algorithms in Java to sharpen how I think
        through problems before I write a single line of code. I'm currently exploring
        internship and full-time opportunities where I can bring that mindset to a team
        and keep growing as an engineer.
      </p>

      <h3 className="font-heading font-semibold text-lg mb-4">What I Work With</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="bg-glass border border-glass-border rounded-xl p-4 hover:border-accent/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                <Icon size={16} />
              </div>
              <h4 className="text-sm font-semibold mb-1">{card.title}</h4>
              <p className="text-xs text-text-secondary">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;