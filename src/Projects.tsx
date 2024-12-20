import React from "react";
import { Project } from "./Project";
import { IProject, TProjectCategory } from "./resumeData";
import { ProjectFilterButton } from "./ProjectFilterButton";

export interface IProjectsProps {
  projects: IProject[];
}

export const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  const [category, setCategory] = React.useState<TProjectCategory | undefined>(
    undefined
  );

  const categories = projects
    .map((p) => p.category)
    .filter((c, i, a) => a.indexOf(c) === i);

  return (
    <>
      <div className="mt-5 md:justify-center flex flex-wrap print:hidden">
        <ProjectFilterButton
          text="All projects"
          onClick={() => setCategory(undefined)}
          isActive={!category}
        />
        {categories.map((c) => (
          <ProjectFilterButton
            text={c}
            onClick={() => setCategory(c)}
            isActive={c === category}
          />
        ))}
      </div>
      {projects
        .filter((p) => p.category === category || !category)
        .map((p, i) => (
          <Project key={i} project={p} />
        ))}
    </>
  );
};
