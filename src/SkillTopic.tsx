import { ISkillTopic, TranslatableKey } from "./resumeData";

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
    <>
      <div className="font-semibold pr-4">{skillTopic.topic[lang]}</div>
      <div>
        <span>{topSkills}</span>
        <span className="text-slate-400">{otherSkills}</span>
      </div>
    </>
  );
};
