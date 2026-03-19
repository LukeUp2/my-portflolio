import { FolderGit2, ExternalLink } from "lucide-react";

interface ProjectItemProps {
  title: string;
  description: string;
  repoLink: string;
}

export function ProjectItem({
  title,
  description,
  repoLink,
}: ProjectItemProps) {
  return (
    <article className="project-article">
      <div style={{ flex: 1, paddingRight: "1rem" }}>
        <h3
          style={{
            fontSize: "1.6rem",
            color: "#eeeeee",
            fontFamily: "'VT323', monospace",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <FolderGit2 size={20} color="#4ade80" />
          {title}
        </h3>
        <p
          style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#a0a0a0" }}
        >
          {description}
        </p>
      </div>

      <a
        href={repoLink}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.9rem",
          border: "1px solid #333",
          padding: "0.4rem 0.8rem",
        }}
      >
        [ repositório ] <ExternalLink size={14} />
      </a>
    </article>
  );
}
