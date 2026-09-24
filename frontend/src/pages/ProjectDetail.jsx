import { useParams, Link, Navigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const Icon = project.icon;

  return (
    <div className="bg-panel border border-glass-border rounded-2xl p-6 lg:p-8">
      <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors mb-6">
        <FiArrowLeft size={13} /> Back to Projects
      </Link>

      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          <Icon className="text-accent" size={22} />
        </div>
        <h2 className="font-heading font-bold text-2xl">{project.title}</h2>
      </div>
      <div className="w-8 h-1 bg-accent rounded-full mb-4"></div>

      <p className="text-text-secondary text-sm leading-relaxed mb-2">{project.tagline}</p>

      {project.status && (
        <p className="text-text-secondary text-sm leading-relaxed mb-6">{project.status}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-[11px] px-3 py-1 rounded-full bg-accent/10 text-text-primary border border-accent/20">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-10">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-glass border border-glass-border text-xs text-text-secondary hover:border-accent hover:text-accent transition-colors">
            <FiGithub size={13} /> View Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-2 transition-colors">
            <FiExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-heading font-semibold text-base mb-2 text-text-primary">Problem Statement</h3>
          <p className="text-text-secondary text-sm leading-relaxed text-justify">{project.problem}</p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-base mb-2 text-text-primary">Objective</h3>
          <p className="text-text-secondary text-sm leading-relaxed text-justify">{project.objective}</p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-base mb-2 text-text-primary">Solution</h3>
          <p className="text-text-secondary text-sm leading-relaxed text-justify">{project.solution}</p>
        </div>

        {project.features.length > 0 && (
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 text-text-primary">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed text-justify">
                  <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.architecture && (
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 text-text-primary">Architecture Highlights</h3>

            {project.architecture.current.length > 0 && (
              <>
                <p className="text-[11px] uppercase tracking-wide text-text-secondary/70 mb-2">Implemented</p>
                <ul className="space-y-2 mb-5">
                  {project.architecture.current.map((a) => (
                    <li key={a} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed text-justify">
                      <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {project.architecture.planned.length > 0 && (
              <>
                <p className="text-[11px] uppercase tracking-wide text-text-secondary/70 mb-2">Planned</p>
                <ul className="space-y-2">
                  {project.architecture.planned.map((a) => (
                    <li key={a} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed text-justify">
                      <span className="text-text-secondary/50 mt-1.5 w-1 h-1 rounded-full bg-text-secondary/50 flex-shrink-0"></span>
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {project.roadmap.length > 0 && (
          <div>
            <h3 className="font-heading font-semibold text-base mb-3 text-text-primary">Roadmap — What's Next</h3>
            <ul className="space-y-2">
              {project.roadmap.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed text-justify">
                  <span className="text-text-secondary mt-1.5 w-1 h-1 rounded-full bg-text-secondary flex-shrink-0"></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;