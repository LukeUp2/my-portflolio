import { ArrowUpRight, FolderGit2 } from "lucide-react";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectItemProps {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  index: number;
  featured?: boolean;
}

export function ProjectItem({ title, eyebrow, description, stack, links, index, featured = false }: ProjectItemProps) {
  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      <div className="project-topline">
        <span className="project-icon"><FolderGit2 size={20} aria-hidden="true" /></span>
        <span className="project-number">0{index}</span>
      </div>
      <p className="project-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-stack" aria-label="Tecnologias">
        {stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="project-links">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
}
