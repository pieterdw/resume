import { IProject } from "./resumeData";

export interface IProjectProps {
  project: IProject;
}

export const Project: React.FC<IProjectProps> = ({ project }) => {
  return (
    <div className="mb-5">
      <div className="break-inside-avoid">
        <div className="flex mb-2 pt-4">
          <div className="flex-1">
            <h3 className="font-semibold inline">{project.name}</h3>
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
          <div className="md:inline print:inline italic text-slate-400">
            {project.timeSpan}
          </div>
        </div>
        <div>
          {project.text.split("\n").map((text) => (
            <p className="mb-2">{text}</p>
          ))}
        </div>
      </div>
      <div className="grid print:grid grid-cols-[max-content_auto] print:mb-8 break-inside-avoid">
        {project.tech && (
          <>
            <div className="pr-4 text-slate-500 print:text-slate-400">Tech</div>
            <div>{project.tech}</div>
          </>
        )}
        <div className="pr-4 text-slate-500 print:text-slate-400">Role</div>
        <div>{project.role}</div>
        {project.teamSize && (
          <>
            <div className="pr-4 text-slate-500 print:text-slate-400">
              Team size
            </div>
            <div>{project.teamSize}</div>
          </>
        )}
        <div className="pr-4 text-slate-500 print:text-slate-400">Business</div>
        <div>{project.category}</div>
      </div>
    </div>
  );
};
