import { IProject, TranslatableKey } from "./resumeData";

export interface IProjectProps {
  project: IProject;
  lang: TranslatableKey;
}

export const Project: React.FC<IProjectProps> = ({ project, lang }) => {
  return (
    <div className="break-inside-avoid">
      <div>
        <span className="font-semibold">{project.name}</span>
        {project.url && (
          <span className="text-slate-500 text-sm print:hidden ml-1">
            (
            <a href={project.url} target="_blank" className="underline">
              link
            </a>
            )
          </span>
        )}
      </div>
      <div className="text-sm mt-1 text-slate-500 print:text-slate-400">
        {project.role}
      </div>
      <div className="text-sm mt-1 text-slate-500 print:text-slate-400">
        {project.tech}
      </div>
      <ul className="list-disc ml-8 mt-2 mb-4">
        {project.text.map((text, i) => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  );
};
