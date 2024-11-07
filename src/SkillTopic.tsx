import { IExperience, ISkillTopic, TranslatableKey } from "./resumeData";

export interface ISkillTopicProps {
  skillTopic: ISkillTopic;
  lang: TranslatableKey;
}

export const SkillTopic: React.FC<ISkillTopicProps> = ({
  skillTopic,
  lang,
}) => {
  if (skillTopic.language && skillTopic.language !== lang) {
    return null;
  }
  const topSkills = skillTopic.topSkills.join(", ");
  let otherSkills = skillTopic.otherSkills.join(", ");
  if (otherSkills) {
    otherSkills = ", " + otherSkills;
  }
  return (
    <div>
      <span className="font-semibold">{skillTopic.topic[lang]}</span>:{" "}
      <span>{topSkills}</span>
      <span className="text-slate-400">{otherSkills}</span>
    </div>
  );
};
