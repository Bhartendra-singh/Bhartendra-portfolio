import { FiAward, FiExternalLink } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    place: 'Graphic Era Deemed to be University',
    year: 'Aug 2023 – Aug 2027',
    detail: 'CGPA: 8.15/10 (Current)',
  },
  {
    degree: 'Higher Secondary Education (Class X & XII)',
    place: 'AN International School, Bijnor, UP',
    year: 'Jul 2020 – Jul 2023',
    detail: '84.33% (Class XII), 79.17% (Class X)',
  },
];

const skillGroups = [
  { category: 'Languages', skills: ['Java', 'C++', 'C'] },
  { category: 'Web Technologies', skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Databases', skills: ['MySQL', 'MongoDB'] },
  { category: 'Core CS & Concepts', skills: ['DSA', 'OOP', 'Operating Systems', 'System Design', 'Problem Solving', 'Agile Methodology'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
];

const achievements = [
  {
    title: 'SQL Foundations',
    org: 'Microsoft, via Coursera — Aug 2025',
    link: 'https://coursera.org/verify/CAXG4MPNZAJA',
  },
  {
    title: 'Adobe University Hackathon',
    org: 'Participation Certificate, organized by Adobe (via Unstop) — Aug 2026',
    link: '/adobe-hackathon-certificate.pdf',
  },
  {
    title: 'Full Stack Web Development Certification',
    org: 'Apna College',
    link: '/Full-Stack-Development-Certificate.pdf',
  },
  {
    title: 'DSA with Java Certification',
    org: 'Apna College',
    link: '',
  },
];

const ResumePage = () => {
  return (
    <div className="bg-panel border border-glass-border rounded-2xl p-6 lg:p-8">
      <h2 className="font-heading font-bold text-2xl mb-1">Resume</h2>
      <div className="w-8 h-1 bg-accent rounded-full mb-8"></div>

      {/* Education */}
      <h3 className="font-heading font-semibold text-lg mb-4">Education</h3>
      <div className="space-y-6 mb-10">
        {education.map((edu) => (
          <div key={edu.degree} className="relative pl-5 border-l-2 border-glass-border">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent"></span>
            <p className="text-xs text-accent mb-1">{edu.year}</p>
            <h4 className="text-sm font-semibold">{edu.degree}</h4>
            <p className="text-xs text-text-secondary">{edu.place}</p>
            <p className="text-xs text-text-secondary/70 mt-0.5">{edu.detail}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h3 className="font-heading font-semibold text-lg mb-4">Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-glass border border-glass-border rounded-xl p-4">
            <h4 className="text-sm font-semibold mb-3">{group.category}</h4>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span key={skill} className="text-[11px] px-2.5 py-1 rounded-full bg-accent/10 text-text-primary border border-accent/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <h3 className="font-heading font-semibold text-lg mb-4">Achievements</h3>
      <div className="space-y-3">
        {achievements.map((a) => {
          const content = (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-glass border border-glass-border hover:border-accent/40 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <FiAward size={14} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">{a.title}</p>
                <p className="text-xs text-text-secondary">{a.org}</p>
              </div>
              {a.link && <FiExternalLink size={14} className="text-text-secondary flex-shrink-0 mt-1" />}
              {!a.link && <span className="text-[10px] text-text-secondary/60 flex-shrink-0 mt-1.5">Coming soon</span>}
            </div>
          );

          return a.link ? (
            <a key={a.title} href={a.link} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={a.title}>{content}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumePage;