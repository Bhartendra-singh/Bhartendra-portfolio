import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <div className="bg-panel border border-glass-border rounded-2xl p-6 lg:p-8">
      <h2 className="font-heading font-bold text-2xl mb-1">Projects</h2>
      <div className="w-8 h-1 bg-accent rounded-full mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group bg-glass border border-glass-border rounded-xl p-5 hover:border-accent/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Icon className="text-accent" size={18} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-heading font-semibold text-base">{project.title}</h3>
                {project.status && (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent/15 text-accent font-medium">
                    In Progress
                  </span>
                )}
                {project.live && (
                  <span className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Live
                  </span>
                )}
              </div>
              <p className="text-text-secondary text-xs leading-relaxed mb-4">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-text-primary border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] px-2.5 py-1 text-text-secondary">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <span className="flex items-center gap-1.5 text-xs text-accent font-medium">
                View details
                <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;