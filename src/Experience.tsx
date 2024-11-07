import { IExperience, TranslatableKey } from "./resumeData";

export interface IExperienceProps {
  experience: IExperience;
  lang: TranslatableKey;
}

export const Experience: React.FC<IExperienceProps> = ({
  experience,
  lang,
}) => {
  return (
    <div>
      <div className="flex mt-2">
        <div className="flex-1">
          <span className="font-semibold">{experience.business}</span>
          {" - "}
          {experience.location[lang]}
        </div>
        <div className="italic text-slate-500">{experience.timespan[lang]}</div>
      </div>
      <p className="text-sm text-slate-500">{experience.jobTitle}</p>
      <ul className="list-disc ml-8 mt-2 mb-4">
        {experience.highlights.map((h) => (
          <li>{h[lang]}</li>
        ))}
      </ul>
    </div>
  );
};
