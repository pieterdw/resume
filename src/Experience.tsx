import { Fragment, useState } from "react";
import { IExperience, TranslatableKey } from "./resumeData";
import ConfettiExplosion from "react-confetti-explosion";

export interface IExperienceProps {
  experience: IExperience;
  lang: TranslatableKey;
}

export const Experience: React.FC<IExperienceProps> = ({
  experience,
  lang,
}) => {
  const [isExploding, setIsExploding] = useState<boolean>(false);

  const handleExplosion = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1000);
  };

  return (
    <div className="break-inside-avoid">
      <div className="flex mt-2">
        <div className="flex-1">
          <h3 className="font-semibold inline">{experience.business}</h3>
          {" - "}
          {experience.location[lang]}
        </div>
        <div className="md:inline print:inline italic text-slate-400">
          {experience.timespan[lang]}
        </div>
      </div>
      <p className="">{experience.jobTitle[lang]}</p>
      {experience.businessDescription[lang] && (
        <p className="text-sm mt-1 text-slate-500 print:text-slate-400">
          {experience.businessDescription[lang]}
        </p>
      )}
      {/* <div className="md:hidden print:hidden text-sm mt-1 text-slate-500 print:text-slate-400">
        {experience.timespan[lang]}
      </div> */}
      <ul className="list-disc ml-8 mt-2 mb-4">
        {experience.highlights.map((h, i) => (
          <Fragment key={i}>
            {h[lang] !== "easter egg" ? (
              <li>
                {`${h[lang]} `}
                {h.url && (
                  <span className="text-slate-500 text-sm print:hidden">
                    (
                    <a href={h.url} target="_blank" className="underline">
                      link
                    </a>
                    )
                  </span>
                )}
              </li>
            ) : lang === "en" ? (
              <li className="print:hidden">
                Are you still reading? That is amazing, thank you very much.{" "}
                <a
                  onClick={handleExplosion}
                  className="cursor-pointer hover:underline"
                >
                  Click{" "}
                  {isExploding && <ConfettiExplosion className="inline" />}here
                </a>{" "}
                for a celebration.
              </li>
            ) : (
              <li className="print:hidden">
                Ben je nog aan het lezen? Dat is geweldig, bedankt.{" "}
                <a
                  onClick={handleExplosion}
                  className="cursor-pointer hover:underline"
                >
                  Klik {isExploding && <ConfettiExplosion className="inline" />}
                  hier
                </a>{" "}
                om dit te vieren.
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
