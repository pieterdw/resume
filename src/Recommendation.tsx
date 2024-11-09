import { IRecommendation, TranslatableKey } from "./resumeData";

export interface IRecommendationProps {
  recommendation: IRecommendation;
  lang: TranslatableKey;
}

export const Recommendation: React.FC<IRecommendationProps> = ({
  recommendation,
  lang,
}) => {
  let className =
    "flex flex-col px-5 py-4 print:border-[1px] border-slate-200 rounded-lg bg-slate-100";
  if (recommendation.isAvailableOnLinkedIn) {
    className += " hover:bg-slate-200 cursor-pointer";
  }

  const handleClick = () => {
    if (recommendation.isAvailableOnLinkedIn) {
      window.open(
        "https://www.linkedin.com/in/pieterdw/details/recommendations/"
      );
    }
  };

  const handleNameClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
    return false;
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className="flex-grow pb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#94a3b8"
          viewBox="0 0 24 24"
          className="mb-2"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
        {recommendation.text[lang]}
      </div>
      <div className="flex align-middle">
        <img
          src={recommendation.thumb}
          alt={recommendation.name}
          className="w-[50px] h-[50px] print:w-[30px] print:h-[30px] rounded-full mr-2"
        />
        <div>
          <div>
            <a
              href={recommendation.linkedInUrl}
              target="_blank"
              className="hover:underline"
              onClick={handleNameClick}
            >
              {recommendation.name}
            </a>
          </div>
          <div className="text-sm text-slate-500">
            {recommendation.relation[lang]}
          </div>
        </div>
      </div>
    </div>
  );
};
